/* ==========================================================================
   KeyPels — visual library
   Every service illustration is hand-built markup styled by service.css:
   no image files, nothing to lazy-load, nothing that can 404, and each
   composition can be re-skinned per service through the --viz-a/--viz-b
   accent variables set on the wrapper.
   ========================================================================== */

const wrap = (name, inner, mod) =>
  `<div class="viz viz--${name}${mod ? ' ' + mod : ''}" aria-hidden="true">${inner}</div>`;

const bars = (heights, hot) =>
  heights.map((h, i) => `<i style="--h:${h}%"${hot === i ? ' class="is-hot"' : ''}></i>`).join('');

const rows = (n, widths) =>
  Array.from({ length: n }, (_, i) => `<i style="width:${(widths && widths[i]) || 100}%"></i>`).join('');

/* --- browser window ------------------------------------------------------ */
const browser = (o = {}) =>
  wrap('browser', `
    <div class="win">
      <div class="win__bar"><span class="win__dots"><i></i><i></i><i></i></span><span class="win__url">${o.url || 'keypels.com'}</span></div>
      <div class="win__body">
        <div class="win__hero"><span class="win__h1"></span><span class="win__h2"></span><span class="win__cta"></span></div>
        <div class="win__cards"><i></i><i></i><i></i></div>
        <div class="win__rows">${rows(3, [100, 78, 54])}</div>
      </div>
    </div>
    <div class="viz__chip viz__chip--tl">${o.chipA || 'LCP 0.9s'}</div>
    <div class="viz__chip viz__chip--br">${o.chipB || 'CLS 0.00'}</div>`, o.mod);

/* --- commerce storefront ------------------------------------------------- */
const commerce = () =>
  wrap('commerce', `
    <div class="win">
      <div class="win__bar"><span class="win__dots"><i></i><i></i><i></i></span><span class="win__url">shop</span></div>
      <div class="shop">
        <div class="shop__filters">${rows(4, [100, 72, 88, 60])}</div>
        <div class="shop__grid"><i></i><i></i><i></i><i></i><i></i><i></i></div>
      </div>
    </div>
    <div class="cartcard">
      <span class="cartcard__title"></span>
      <span class="cartcard__line"></span><span class="cartcard__line is-short"></span>
      <span class="cartcard__pay">Pay</span>
    </div>`);

/* --- application console ------------------------------------------------- */
const console_ = (o = {}) =>
  wrap('console', `
    <div class="panelapp">
      <div class="panelapp__side"><b></b>${rows(5, [100, 80, 92, 68, 76])}</div>
      <div class="panelapp__main">
        <div class="panelapp__top"><span class="viz__pill">${o.pill || 'Overview'}</span><span class="panelapp__avatars"><i></i><i></i><i></i></span></div>
        <div class="panelapp__kpis"><i></i><i></i><i></i></div>
        <div class="panelapp__chart">${bars([42, 66, 54, 88, 61, 94, 72], 5)}</div>
        <div class="panelapp__table">${rows(4, [100, 100, 100, 100])}</div>
      </div>
    </div>`, o.mod);

/* --- monitoring / reliability ------------------------------------------- */
const monitor = () =>
  wrap('monitor', `
    <div class="mon">
      <div class="mon__head"><span class="viz__pill viz__pill--ok">All systems operational</span></div>
      <div class="mon__stats"><span><b>99.98%</b>uptime</span><span><b>184ms</b>p95</span><span><b>0</b>incidents</span></div>
      <div class="mon__spark">${bars([30, 46, 38, 62, 52, 74, 58, 82, 66, 90, 71, 86])}</div>
      <ul class="mon__list"><li><i class="ok"></i>Dependencies patched</li><li><i class="ok"></i>Backups verified</li><li><i class="run"></i>Performance audit running</li></ul>
    </div>`);

/* --- phone ---------------------------------------------------------------- */
const phoneFrame = (mod, inner) => `
  <div class="ph ${mod || ''}">
    <span class="ph__notch"></span>
    <div class="ph__screen">${inner}</div>
  </div>`;

const phoneApp = () => `
  <div class="ph__top"><i></i><b></b></div>
  <div class="ph__feature"><span></span><b></b></div>
  <div class="ph__list">${rows(3, [100, 100, 100])}</div>
  <div class="ph__tabs"><i></i><i></i><i></i><i></i></div>`;

const phoneDuo = () =>
  wrap('phones', `
    ${phoneFrame('ph--back', phoneApp())}
    ${phoneFrame('ph--front', phoneApp())}
    <div class="viz__chip viz__chip--tl">60 fps</div>
    <div class="viz__chip viz__chip--br">iOS &amp; Android</div>`);

const phoneDetail = (o = {}) =>
  wrap('phone', `
    ${phoneFrame(o.mod, phoneApp())}
    <div class="viz__chip viz__chip--tr">${o.chip || 'Swift &amp; SwiftUI'}</div>`, o.wrapMod);

const crossPlatform = () =>
  wrap('cross', `
    ${phoneFrame('ph--back', phoneApp())}
    ${phoneFrame('ph--front ph--android', phoneApp())}
    <div class="cross__base"><span>Shared codebase</span><i></i><i></i></div>`);

const commerceApp = () =>
  wrap('phone', `
    ${phoneFrame('', `
      <div class="ph__top"><i></i><b></b></div>
      <div class="ph__shop"><i></i><i></i><i></i><i></i></div>
      <div class="ph__pay">Apple Pay</div>
      <div class="ph__tabs"><i></i><i></i><i></i><i></i></div>`)}
    <div class="viz__chip viz__chip--tr">Checkout</div>`);

const enterpriseApp = () =>
  wrap('phone', `
    ${phoneFrame('', `
      <div class="ph__top"><i></i><b></b></div>
      <div class="ph__offline">Offline · syncing</div>
      <div class="ph__list">${rows(4, [100, 100, 100, 100])}</div>
      <div class="ph__tabs"><i></i><i></i><i></i><i></i></div>`)}
    <div class="viz__chip viz__chip--tl">SSO</div>
    <div class="viz__chip viz__chip--br">Offline-first</div>`);

/* --- kanban board -------------------------------------------------------- */
const board = (o = {}) =>
  wrap('board', `
    <div class="win">
      <div class="win__bar"><span class="win__dots"><i></i><i></i><i></i></span><span class="win__url">${o.url || 'pipeline'}</span></div>
      <div class="kb">
        ${['New', 'Qualified', 'Proposal', 'Won'].map((c, i) => `
          <div class="kb__col"><span class="kb__head">${c}</span>
            ${Array.from({ length: [2, 3, 2, 1][i] }, (_, j) =>
              `<i${i === 2 && j === 0 ? ' class="is-hot"' : ''}></i>`).join('')}
          </div>`).join('')}
      </div>
    </div>
    <div class="viz__chip viz__chip--br">Forecast +18%</div>`, o.mod);

/* --- support inbox ------------------------------------------------------- */
const inbox = () =>
  wrap('inbox', `
    <div class="tickets">
      <div class="tickets__head"><span class="viz__pill">Queue</span><span class="viz__pill viz__pill--ok">SLA 98%</span></div>
      ${[['Refund request', 'is-urgent', '2m'], ['Delivery delay', '', '14m'], ['Account access', '', '31m'], ['Invoice query', 'is-done', 'closed']]
        .map(([t, cls, time]) => `<div class="ticket ${cls}"><span class="ticket__dot"></span><span class="ticket__t">${t}</span><span class="ticket__time">${time}</span></div>`).join('')}
    </div>`);

/* --- automation flow canvas ---------------------------------------------- */
const flow = (o = {}) => {
  const labels = o.labels || ['Trigger', 'Enrich', 'Decide', 'Act'];
  return wrap('flow', `
    <svg class="flowcanvas" viewBox="0 0 340 210" role="presentation">
      <g class="flowcanvas__wires">
        <path d="M56 46 H140 V105 H228"/><path d="M56 164 H140"/><path d="M140 164 V105"/><path d="M228 105 H300"/>
      </g>
      <g class="flowcanvas__pulse"><path d="M56 46 H140 V105 H228 H300" pathLength="100"/></g>
    </svg>
    <div class="flownode flownode--a"><span>${labels[0]}</span></div>
    <div class="flownode flownode--b"><span>${labels[1]}</span></div>
    <div class="flownode flownode--c is-active"><span>${labels[2]}</span></div>
    <div class="flownode flownode--d"><span>${labels[3]}</span></div>
    <div class="viz__chip viz__chip--br">${o.chip || '412 runs today'}</div>`, o.mod);
};

/* --- document extraction -------------------------------------------------- */
const documentFlow = () =>
  wrap('doc', `
    <div class="paper">
      <span class="paper__title"></span>
      ${rows(5, [100, 88, 96, 62, 80])}
      <span class="paper__stamp">PDF</span>
    </div>
    <div class="extract">
      <span class="extract__head">Extracted</span>
      <span class="extract__row"><b>Invoice&nbsp;no.</b><i>INV-40218</i></span>
      <span class="extract__row"><b>Total</b><i>£4,180.00</i></span>
      <span class="extract__row is-low"><b>PO ref</b><i>review →</i></span>
    </div>`);

/* --- agent run log -------------------------------------------------------- */
const agent = (o = {}) => {
  const steps = o.steps || [
    ['Read request', 'done'],
    ['crm.lookupOrder()', 'tool'],
    ['Check refund policy', 'done'],
    ['billing.refund()', 'active']
  ];
  return wrap('agent', `
    <div class="run">
      <div class="run__head"><span class="run__avatar"></span><span class="run__name">${o.name || 'Support Agent'}</span><span class="viz__pill viz__pill--ok">Running</span></div>
      <ul class="run__steps">
        ${steps.map(([t, s]) => `<li class="is-${s}"><span></span>${t}</li>`).join('')}
      </ul>
      <div class="run__foot"><span class="viz__pill">Guardrail: max £500</span></div>
    </div>`, o.mod);
};

/* --- chat panel ----------------------------------------------------------- */
const chat = (o = {}) => {
  const msgs = o.msgs || [
    ['in', 'Where is order 48219?'],
    ['out', 'It shipped Tuesday and is out for delivery today.'],
    ['in', 'Can I change the address?']
  ];
  return wrap('chat', `
    <div class="convo">
      <div class="convo__head"><span class="convo__avatar"></span><span class="convo__name">${o.name || 'KeyPels Assistant'}</span></div>
      ${msgs.map(([d, t]) => `<div class="msg msg--${d}">${t}</div>`).join('')}
      <div class="msg msg--typing"><i></i><i></i><i></i></div>
      <div class="convo__source">Source: ${o.source || 'Delivery policy'}</div>
    </div>`, o.mod);
};

/* --- integration bridge --------------------------------------------------- */
const integration = () =>
  wrap('bridge', `
    <div class="sys sys--a"><b></b>${rows(3, [100, 74, 88])}</div>
    <div class="bridge__link"><span></span><span></span></div>
    <div class="sys sys--b"><b></b>${rows(3, [100, 82, 66])}</div>
    <div class="viz__chip viz__chip--br">Two-way sync</div>`);

/* --- registry ------------------------------------------------------------- */
const VISUALS = {
  'browser-stack': () => browser({ mod: 'viz--stacked' }),
  'browser-detail': () => browser({}),
  commerce,
  'app-console': () => console_({ pill: 'Workspace' }),
  monitoring: monitor,

  'phone-duo': phoneDuo,
  'phone-detail': () => phoneDetail({ chip: 'Swift &amp; SwiftUI' }),
  'android-detail': () => phoneDetail({ mod: 'ph--android', chip: 'Kotlin &amp; Compose' }),
  'cross-platform': crossPlatform,
  'commerce-app': commerceApp,
  'enterprise-app': enterpriseApp,

  'crm-board': () => board({ mod: 'viz--stacked' }),
  'crm-detail': () => board({}),
  'support-console': inbox,
  integration,

  'flow-canvas': () => flow({ mod: 'viz--stacked' }),
  'flow-detail': () => flow({}),
  'document-flow': documentFlow,
  reporting: () => console_({ pill: 'Weekly report', mod: 'viz--report' }),

  'agent-console': () => agent({ mod: 'viz--stacked' }),
  'agent-detail': () => agent({}),
  copilot: () => chat({ name: 'Internal Copilot', source: 'Ops handbook', msgs: [['in', 'What is our refund window for EU orders?'], ['out', '14 days from delivery, extended to 30 for damaged goods.'], ['in', 'Raise a ticket for #48219']] }),
  revops: () => console_({ pill: 'Pipeline health', mod: 'viz--revops' }),
  research: () => agent({ name: 'Research Agent', steps: [['Gather sources', 'done'], ['web.search()', 'tool'], ['Verify claims', 'done'], ['Draft brief', 'active']] }),

  'chat-panel': () => chat({ mod: 'viz--stacked' }),
  'chat-detail': () => chat({})
};

function renderVisual(key) {
  const fn = VISUALS[key];
  if (!fn) throw new Error('Unknown visual: ' + key);
  return fn();
}

module.exports = { renderVisual, VISUALS };
