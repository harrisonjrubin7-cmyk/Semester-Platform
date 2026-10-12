import { notFound } from 'next/navigation';
import { SemesterShell } from '@/components/platform/semester-shell';
import { screens, screensByWorkspace } from '@/lib/platform/catalog';

export function generateStaticParams() {
  return screens.map(({ workspace, slug }) => ({ workspace, screen: slug }));
}

export default async function PlatformPage({ params }: { params: Promise<{ workspace: string; screen: string }> }) {
  const { workspace, screen } = await params;
  const definition = screens.find((item) => item.workspace === workspace && item.slug === screen);
  if (!definition) notFound();
  return <SemesterShell definition={definition} workspaceScreens={screensByWorkspace[workspace] ?? []} />;
}
