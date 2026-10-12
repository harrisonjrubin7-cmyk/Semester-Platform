import { describe, expect, it } from 'vitest';
import { screenProfile } from '@/lib/platform/presentation';
import { screens } from '@/lib/platform/catalog';

describe('route-specific screen profiles', () => {
  it('gives every registered screen a distinct content signature', () => {
    const signatures = screens.map((screen) => {
      const profile = screenProfile(screen);
      return [profile.description, profile.title, profile.section, ...profile.items, ...profile.metrics.flat()].join('|');
    });

    expect(new Set(signatures).size).toBe(screens.length);
  });

  it('uses purpose-specific layouts for representative routes', () => {
    const profile = (workspace: string, slug: string) => screenProfile(screens.find((screen) => screen.workspace === workspace && screen.slug === slug)!);

    expect(profile('executive', 'forecast').kind).toBe('forecast');
    expect(profile('support', 'desk').kind).toBe('queue');
    expect(profile('student', 'registration').kind).toBe('workspace');
  });
});
