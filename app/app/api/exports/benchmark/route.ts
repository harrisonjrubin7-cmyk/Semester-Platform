import { NextResponse } from 'next/server';
import { requireUser } from '@/lib/supabase/server';
import { aggregateGrades } from '@/lib/benchmark/scoring';
import { toCsv } from '@/lib/exports/csv';
import { benchmarkMarkdown } from '@/lib/exports/markdown';
type Grade = { correctness: number | null; code_quality: number | null; rendering: number | null; state_management: number | null; maintainability: number | null; handoff: number | null; sandbox_fit: number | null; persistence: number | null };
type Run = { platform: string; status: string; benchmark_grades?: Grade[] };
type Task = { number: number; weights: unknown; benchmark_runs?: Run[] };
export async function GET(req: Request) {
  const url = new URL(req.url); const suiteId = url.searchParams.get('suite'); const format = url.searchParams.get('format') === 'md' ? 'md' : 'csv';
  const { supabase, user } = await requireUser(); if (!user) return NextResponse.json({ error: 'Sign in' }, { status: 401 });
  if (!suiteId) return NextResponse.json({ error: 'suite is required' }, { status: 422 });
  const { data: tasks, error } = await supabase.from('benchmark_tasks').select('id, number, weights, benchmark_runs(id, platform, status, benchmark_grades(*))').eq('suite_id', suiteId).order('number'); // RLS scopes this
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const rows = ((tasks ?? []) as Task[]).flatMap((t) => (t.benchmark_runs ?? []).map((r) => {
    const sheets = (r.benchmark_grades ?? []).map((g) => ({ correctness: g.correctness, codeQuality: g.code_quality, rendering: g.rendering, stateManagement: g.state_management, maintainability: g.maintainability, handoff: g.handoff, sandboxFit: g.sandbox_fit, persistence: g.persistence }));
    const s = aggregateGrades(sheets, t.weights ?? undefined);
    return { workflow: t.number, platform: r.platform, status: r.status, outOf5: s.outOf5, outOf100: s.outOf100, graders: s.graders, missing: s.missing.join(' ') };
  }));
  const body = format === 'md' ? benchmarkMarkdown(rows) : toCsv(rows, ['workflow', 'platform', 'status', 'outOf5', 'outOf100', 'graders', 'missing']);
  return new NextResponse(body, { headers: { 'content-type': format === 'md' ? 'text/markdown; charset=utf-8' : 'text/csv; charset=utf-8', 'content-disposition': 'attachment; filename="semester-benchmark.' + format + '"' } });
}
