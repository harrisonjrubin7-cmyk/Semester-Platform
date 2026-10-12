import { describe, expect, it } from 'vitest';
import { upstreamRouteFor } from '@/lib/platform/upstream';

describe('canonical Semester runtime routing', () => {
  it.each([
    ['student', 'registration', 'Registration', 'registration'],
    ['faculty', 'gradebook', 'Gradebook', 'gradebook'],
    ['studio', 'slides', 'Slides', 'deck'],
    ['social', 'moderation', 'Moderation', 'moderation'],
    ['operations', 'console', 'Console', 'console'],
  ])('maps %s/%s to the functional runtime', (workspace, slug, label, expected) => {
    expect(upstreamRouteFor({ workspace, slug, label })).toBe(expected);
  });

  it('does not misrepresent an unrelated route as implemented', () => {
    expect(upstreamRouteFor({ workspace: 'executive', slug: 'forecast', label: 'Forecast' })).toBeNull();
  });
});
