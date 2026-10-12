import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const source = resolve(process.cwd(), '../handoff/prototype/SCREEN-INVENTORY.md');
const output = resolve(process.cwd(), 'lib/platform/catalog.ts');
const markdown = readFileSync(source, 'utf8');
const screens = [...markdown.matchAll(/^\| `#\/([^/`]+)\/([^`]+)` \| ([^|]+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|$/gm)].map((match) => ({
  workspace: match[1].trim(),
  slug: match[2].trim(),
  label: match[3].trim(),
  component: match[4].trim(),
  stream: match[6].trim(),
}));

if (screens.length !== 281) throw new Error(`Expected 281 screens, found ${screens.length}`);

const contents = `// Generated from handoff/prototype/SCREEN-INVENTORY.md.\n` +
  `export type ScreenDefinition = { workspace: string; slug: string; label: string; component: string; stream: string };\n` +
  `export const screens = ${JSON.stringify(screens, null, 2)} as const satisfies readonly ScreenDefinition[];\n` +
  `export const workspaceOrder = [...new Set(screens.map((screen) => screen.workspace))];\n` +
  `export const screensByWorkspace = Object.fromEntries(workspaceOrder.map((workspace) => [workspace, screens.filter((screen) => screen.workspace === workspace)]));\n`;

writeFileSync(output, contents);
console.log(`Generated ${screens.length} screens across ${new Set(screens.map((screen) => screen.workspace)).size} workspaces.`);
