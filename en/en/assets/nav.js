// =============== NAV — mark active page ===============
(function() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  const cleanName = filename.replace('.html', '') || 'index';

  document.querySelectorAll('.nav-links a').forEach(function(link) {
    const href = link.getAttribute('href') || '';
    const linkName = href.replace('.html', '').replace('./', '').replace('/', '');
    if (linkName === cleanName) {
      link.classList.add('active');
    }
  });
})();

// =============== NED PAGE — Interactive schema (EN) ===============
const NED_DETAILS = {
  nuage: {
    title: 'Level 5 — Narrative cloud',
    desc: 'The most diffuse envelope: the overall cultural atmosphere surrounding a subject, produced by the ecosystem as a whole. The cloud is not controlled by any single actor — it emerges from the density of convergent stories. The goal of NED: gradually shift this cloud.'
  },
  recit: {
    title: 'Level 4 — Central grand narrative and moral compass',
    desc: 'The matrix-sentence that orients the entire ecosystem. For PAMOJA CI: "In Côte d\'Ivoire, we protect our own." The associated moral compass defines the values that must remain shared across all contents — compassion, protection, dignity, shared responsibility.'
  },
  piliers: {
    title: 'Level 3 — Narrative pillars',
    desc: 'The main gateways through which the grand narrative is expressed. For PAMOJA CI: Reality (it happens, to everyone), Silence kills, Ivorian compassion, The men. An effective content activates one priority pillar — sometimes a second as support — but never all four at once.'
  },
  cercles: {
    title: 'Level 2 — Concentric circles',
    desc: 'The layering of proximity to the sensitive subject. Circle 3 societal (values, faith, family) to open without triggering defenses. Circle 2 adjacent (unwanted pregnancy, contraception, rape) as a bridge. Circle 1 abortion for the landing — never as the opening. The circulation between circles structures each narrative.'
  },
  tactiques: {
    title: 'Level 1 — Tactics and landings',
    desc: 'The ground level. A specific content — a TikTok, a radio chronicle, a sermon, a workshop — produced by an identified actor for a specific persona, with a concrete landing toward a real service. This is the only level where everything must be absolutely precise and verifiable. If the landing does not exist, the tactic must not be distributed.'
  }
};

function showNEDDetail(key) {
  const data = NED_DETAILS[key];
  if (!data) return;
  const box = document.getElementById('ned-schema-detail');
  const title = document.getElementById('ned-schema-title');
  const desc = document.getElementById('ned-schema-desc');
  if (!box || !title || !desc) return;
  title.textContent = data.title;
  desc.textContent = data.desc;
  box.classList.add('active');
  setTimeout(function() {
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

function scrollToNED(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
