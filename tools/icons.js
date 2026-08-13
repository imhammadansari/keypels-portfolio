/* ==========================================================================
   KeyPels — inline SVG icon set
   24×24, stroke-based, `currentColor`. Kept in one place so the dropdown,
   service cards and page sections all draw from the same visual vocabulary.
   ========================================================================== */

const s = (paths, extra) =>
  `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ` +
  `stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra || ''}>${paths}</svg>`;

const ICONS = {
  /* ---- service marks ---- */
  web: s('<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M7 6.5h.01M9.5 6.5h.01"/>'),
  mobile: s('<rect x="7" y="2.5" width="10" height="19" rx="3"/><path d="M10.5 5.5h3M11 18.5h2"/>'),
  crm: s('<path d="M4 20V9m5 11V4m5 16v-7m5 7V7"/>'),
  automation: s('<rect x="2.5" y="3" width="7" height="6" rx="2"/><rect x="14.5" y="15" width="7" height="6" rx="2"/><path d="M9.5 6h4a3 3 0 0 1 3 3v6"/><path d="M14 12.5 16.5 15l2.5-2.5"/>'),
  agent: s('<rect x="4" y="6.5" width="16" height="12.5" rx="4"/><path d="M12 2.5v4M9 12h.01M15 12h.01M9.5 15.5h5"/>'),
  chat: s('<path d="M4 5.5h16v11H9l-5 4z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/>'),

  /* ---- utility ---- */
  arrow: s('<path d="M4 12h14M13 7l5 5-5 5"/>'),
  check: s('<path d="m4.5 12.5 4.5 4.5 10.5-11"/>'),
  spark: s('<path d="m12 3 2 5.5L19.5 10 14 12l-2 6-2-6-5.5-2L10 8.5 12 3Z"/>'),
  shield: s('<path d="M12 3 5 6v6.5c0 4 3 7 7 8.5 4-1.5 7-4.5 7-8.5V6l-7-3Z"/><path d="m9 12 2 2 4-4.5"/>'),
  gauge: s('<path d="M4.5 18a8 8 0 1 1 15 0"/><path d="m12 14 3.5-4"/><circle cx="12" cy="18" r="1.4"/>'),
  layers: s('<path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z"/><path d="m3.5 12 8.5 4.5L20.5 12M3.5 16.5 12 21l8.5-4.5"/>'),
  users: s('<circle cx="9.5" cy="8.5" r="3.5"/><path d="M3 20a6.5 6.5 0 0 1 13 0"/><path d="M17 5.5a3.2 3.2 0 0 1 0 6M18.5 19.8a6.4 6.4 0 0 0-1.6-4.3"/>'),
  search: s('<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>'),
  route: s('<circle cx="5.5" cy="6" r="2.5"/><circle cx="18.5" cy="18" r="2.5"/><path d="M8 6h6a4 4 0 0 1 0 8h-4a4 4 0 0 0 0 8"/>'),
  plug: s('<path d="M9 3v5M15 3v5"/><path d="M6 8h12v3a6 6 0 0 1-12 0V8Z"/><path d="M12 17v4"/>'),
  clock: s('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  cloud: s('<path d="M7 18a4 4 0 0 1-.4-8A6 6 0 0 1 18 9.5a3.9 3.9 0 0 1-.6 8.5H7Z"/>'),
  lock: s('<rect x="4.5" y="10" width="15" height="10.5" rx="3"/><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"/>'),
  target: s('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>'),
  refresh: s('<path d="M20 5.5v5h-5"/><path d="M19 10.5A7.5 7.5 0 1 0 19.5 15"/>'),
  code: s('<path d="m9 8-5 4 5 4M15 8l5 4-5 4"/>'),
  cart: s('<path d="M3 4h2.2l2.3 11h9.6l2.1-8H6"/><circle cx="9.5" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>'),
  book: s('<path d="M5 4.5h9a3 3 0 0 1 3 3V20a2.5 2.5 0 0 0-2.5-2.5H5V4.5Z"/><path d="M17 7.5h2v12.9a2.5 2.5 0 0 0-2.5-2.4"/>'),
  wand: s('<path d="m4 20 9-9M14.5 5.5 16 4M19 9l1.5-1.5M15 9.5 17 11"/><path d="m11.5 8.5 4 4"/>'),
  globe: s('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c4 4.5 4 12.5 0 17-4-4.5-4-12.5 0-17Z"/>'),
  bolt: s('<path d="m13 3-8 10h6l-2 8 8-10h-6l2-8Z"/>'),
  chart: s('<path d="M4 19h16"/><path d="M7 19v-6M12 19V6M17 19v-9"/>'),
  inbox: s('<path d="M3.5 13.5h4l1.5 3h6l1.5-3h4"/><path d="M5.5 5.5h13l2 8v4.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V13.5l2-8Z"/>'),
  fingerprint: s('<path d="M12 4.5a7.5 7.5 0 0 1 7.5 7.5v1.5"/><path d="M4.5 13.5V12A7.5 7.5 0 0 1 8 5.6"/><path d="M8.5 12a3.5 3.5 0 0 1 7 0v3a5 5 0 0 1-.6 2.4"/><path d="M12 12v4.5a8 8 0 0 1-.9 3.7"/>')
};

module.exports = { ICONS };
