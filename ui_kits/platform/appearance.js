// Semester appearance — user-customizable color, layout and design, applied everywhere.
// Loaded in <head> of every kit (sync, before paint) and by the platform shell, which also re-applies it to each workspace it opens.
// Settings live on this device (localStorage 'sem-appearance'); when signed in live they can be saved to the account later.
(function () {
  const KEY = 'sem-appearance';
  const ACCENTS = { // light-mode value (white text ≥ 4.5:1) · dark-mode value (dark text ≥ 4.5:1)
    blue:    ['#416180', '#94bce3'], copper: ['#8a4b2a', '#d6a98d'], jade: ['#2f6b57', '#a8ccbd'],
    indigo:  ['#4a4f8f', '#a9aed6'], oxblood: ['#7f2e2e', '#c99a9a'], moss: ['#4f6230', '#b6c39b'],
    slate:   ['#4a5a6e', '#aebdd0'], gold: ['#6e5a1f', '#d6c089'],
  };
  const GROUNDS = { light: ['default', 'paper', 'bone', 'fog', 'industry'], dark: ['default', 'graphite', 'midnight', 'basalt', 'oxide', 'forest', 'wine', 'industry-dark'] };
  const DEF = { mode: 'system', ground: 'default', accent: 'blue', density: 'comfortable', text: 100, radius: 'default', motion: 'system', contrast: 'standard', font: 'brand', rail: 'standard', width: 'full' };
  const DENS = { spacious: 1.12, comfortable: 1, snug: 0.86, tight: 0.74 };
  const RAD = { square: [0, 0, 0], default: [3, 6, 10], round: [6, 12, 18] };
  const load = () => { try { return { ...DEF, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch (e) { return { ...DEF }; } };
  const mq = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  const isDark = (s) => s.mode === 'dark' || (s.mode === 'system' && mq && mq.matches);

  function apply(doc, s) {
    s = s || load();
    const el = doc.documentElement, st = el.style, dark = isDark(s);
    el.setAttribute('data-theme', dark ? 'dark' : 'light');
    const g = GROUNDS[dark ? 'dark' : 'light'].includes(s.ground) ? s.ground : 'default';
    if (g === 'default') el.removeAttribute('data-ground'); else el.setAttribute('data-ground', g);
    // Accent pair lives in a stylesheet keyed on the document's actual data-theme, so it always matches the theme in force.
    const [L, D] = ACCENTS[s.accent] || ACCENTS.blue;
    for (const k of ['--action-primary', '--action-primary-hover', '--action-primary-press', '--text-on-action', '--focus-color']) st.removeProperty(k);
    let ac = doc.getElementById('sem-appearance-accent');
    if (!ac) { ac = doc.createElement('style'); ac.id = 'sem-appearance-accent'; (doc.head || doc.documentElement).appendChild(ac); }
    ac.textContent = `:root,[data-theme=light]{--action-primary:${L};--action-primary-hover:color-mix(in oklch,${L} 88%,black);--action-primary-press:color-mix(in oklch,${L} 78%,black);--text-on-action:#ffffff;--focus-color:${L}}` +
      `[data-theme=dark]{--action-primary:${D};--action-primary-hover:color-mix(in oklch,${D} 88%,white);--action-primary-press:color-mix(in oklch,${D} 78%,white);--text-on-action:#0d0f14;--focus-color:${D}}`;
    st.setProperty('--density', String(DENS[s.density] || 1));
    st.setProperty('--text-scale', String(Math.min(1.5, Math.max(0.85, (+s.text || 100) / 100))));
    el.style.fontSize = ((+s.text || 100)) + '%';
    const r = RAD[s.radius] || RAD.default; st.setProperty('--r-sm', r[0] + 'px'); st.setProperty('--r-md', r[1] + 'px'); st.setProperty('--r-lg', r[2] + 'px');
    if (s.font === 'system') { st.setProperty('--font-body', 'system-ui, -apple-system, "Segoe UI", sans-serif'); st.setProperty('--font-heading', 'system-ui, -apple-system, "Segoe UI", sans-serif'); }
    else { st.removeProperty('--font-body'); st.removeProperty('--font-heading'); }
    if (s.contrast === 'high') { st.setProperty('--text-secondary', 'var(--text-primary)'); st.setProperty('--border-subtle', `color-mix(in oklch, var(--text-primary) 55%, transparent)`); el.setAttribute('data-contrast', 'high'); }
    else { st.removeProperty('--text-secondary'); st.removeProperty('--border-subtle'); el.removeAttribute('data-contrast'); }
    const reduce = s.motion === 'reduce' || (s.motion === 'system' && window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
    for (const k of ['--motion-save', '--motion-insert', '--motion-panel', '--motion-sheet', '--fast']) reduce ? st.setProperty(k, '0ms linear') : st.removeProperty(k);
    el.toggleAttribute('data-reduce-motion', reduce);
    st.setProperty('--rail-w', s.rail === 'compact' ? 'var(--rail-w-compact, 72px)' : '248px');
    el.setAttribute('data-width', s.width);
    if (!doc.getElementById('sem-appearance-css')) {
      const c = doc.createElement('style'); c.id = 'sem-appearance-css';
      c.textContent = '[data-reduce-motion] *,[data-reduce-motion] *::before,[data-reduce-motion] *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}' +
        '[data-contrast=high] :focus-visible{outline-width:3px!important}[data-contrast=high] a{text-decoration:underline}' +
        '[data-width=readable] body>*:not(script):not(style){max-width:1180px;margin-left:auto;margin-right:auto}';
      (doc.head || doc.documentElement).appendChild(c);
    }
  }
  function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); apply(document, s); window.dispatchEvent(new CustomEvent('sem-appearance', { detail: s })); }
  apply(document);
  if (mq && mq.addEventListener) mq.addEventListener('change', () => apply(document));
  window.addEventListener('storage', (e) => { if (e.key === KEY) apply(document); });

  // Panel (used by the platform shell; any kit can call SEM_APPEARANCE.open()).
  function open() {
    let d = document.getElementById('sem-appr');
    if (!d) { d = document.createElement('div'); d.id = 'sem-appr'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true'); d.setAttribute('aria-label', 'Appearance');
      d.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:70;display:flex;justify-content:flex-end'; document.body.appendChild(d);
      d.addEventListener('click', (e) => { if (e.target === d) close(); }); d.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); }); }
    const s = load(), dark = isDark(s);
    const seg = (k, opts) => '<div role="radiogroup" aria-label="' + k + '" style="display:flex;gap:4px;flex-wrap:wrap">' + opts.map(([v, l]) => '<button type="button" role="radio" aria-checked="' + (s[k] === v) + '" data-k="' + k + '" data-v="' + v + '" style="all:unset;cursor:pointer;padding:6px 10px;border-radius:6px;font-size:13px;border:1px solid var(--border-subtle);' + (s[k] === v ? 'background:var(--action-primary);color:var(--text-on-action);border-color:var(--action-primary)' : 'background:var(--surface-base)') + '">' + l + '</button>').join('') + '</div>';
    const row = (t, c) => '<div style="display:grid;gap:6px"><b style="font-size:13px">' + t + '</b>' + c + '</div>';
    d.innerHTML = '<div style="width:min(380px,100%);height:100%;overflow:auto;background:var(--surface-base);color:var(--text-primary);border-left:1px solid var(--border-subtle);padding:18px;display:grid;gap:16px;align-content:start;font-family:var(--font-body)">' +
      '<div style="display:flex;justify-content:space-between;align-items:center"><h2 style="margin:0;font-size:18px">Appearance</h2><button type="button" id="sem-appr-x" style="all:unset;cursor:pointer;padding:6px 10px;border:1px solid var(--border-subtle);border-radius:6px;font-size:13px">Close</button></div>' +
      '<span style="font-size:12.5px;color:var(--text-secondary)">Applies to every workspace on this device. Contrast stays at accessible levels whatever you choose.</span>' +
      row('Mode', seg('mode', [['system', 'Match device'], ['light', 'Light'], ['dark', 'Dark']])) +
      row('Background', seg('ground', GROUNDS[dark ? 'dark' : 'light'].map((g) => [g, g === 'default' ? 'Default' : g.replace('-', ' ').replace(/^./, (x) => x.toUpperCase())]))) +
      row('Accent color', '<div role="radiogroup" aria-label="Accent color" style="display:flex;gap:6px;flex-wrap:wrap">' + Object.entries(ACCENTS).map(([k, v]) => '<button type="button" role="radio" aria-checked="' + (s.accent === k) + '" aria-label="' + k + '" data-k="accent" data-v="' + k + '" style="all:unset;cursor:pointer;width:32px;height:32px;border-radius:50%;background:' + v[dark ? 1 : 0] + ';box-shadow:' + (s.accent === k ? '0 0 0 2px var(--surface-base),0 0 0 4px ' + v[dark ? 1 : 0] : 'none') + '"></button>').join('') + '</div>') +
      row('Density', seg('density', [['spacious', 'Spacious'], ['comfortable', 'Comfortable'], ['snug', 'Snug'], ['tight', 'Compact']])) +
      row('Text size · ' + s.text + '%', '<input type="range" min="85" max="150" step="5" value="' + s.text + '" data-k="text" aria-label="Text size" style="width:100%">') +
      row('Corners', seg('radius', [['square', 'Square'], ['default', 'Default'], ['round', 'Rounded']])) +
      row('Typeface', seg('font', [['brand', 'Semester (Barlow)'], ['system', 'System']])) +
      row('Side navigation', seg('rail', [['standard', 'Full'], ['compact', 'Compact']])) +
      row('Page width', seg('width', [['full', 'Full width'], ['readable', 'Readable (centered)']])) +
      row('Motion', seg('motion', [['system', 'Match device'], ['full', 'Full'], ['reduce', 'Reduced']])) +
      row('Contrast', seg('contrast', [['standard', 'Standard'], ['high', 'High']])) +
      '<div style="display:flex;gap:8px"><button type="button" id="sem-appr-reset" style="all:unset;cursor:pointer;padding:7px 12px;border:1px solid var(--border-subtle);border-radius:6px;font-size:13px">Reset to default</button></div></div>';
    d.style.display = 'flex';
    d.querySelectorAll('[data-k]').forEach((b) => {
      const k = b.dataset.k;
      if (b.tagName === 'INPUT') b.oninput = () => { const n = load(); n[k] = +b.value; save(n); b.closest('div').querySelector('b').textContent = 'Text size · ' + b.value + '%'; };
      else b.onclick = () => { const n = load(); n[k] = b.dataset.v; save(n); open(); const f = d.querySelector('[data-k="' + k + '"][data-v="' + b.dataset.v + '"]'); if (f) f.focus(); };
    });
    d.querySelector('#sem-appr-x').onclick = close;
    d.querySelector('#sem-appr-reset').onclick = () => { save({ ...DEF }); open(); };
    const first = d.querySelector('[aria-checked=true]') || d.querySelector('button'); if (first && !d.contains(document.activeElement)) first.focus();
  }
  let opener = null;
  function close() { const d = document.getElementById('sem-appr'); if (d) d.style.display = 'none'; if (opener) opener.focus(); }
  window.SEM_APPEARANCE = { apply, load, save, open: (from) => { opener = from || document.activeElement; open(); }, DEFAULTS: DEF };
})();
