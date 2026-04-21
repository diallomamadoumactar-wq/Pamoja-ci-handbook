// =============== NAV — marquer la page active ===============
(function() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  const cleanName = filename.replace('.html', '') || 'index';

  document.querySelectorAll('.nav-links a').forEach(function(link) {
    const href = link.getAttribute('href') || '';
    const linkName = href.replace('.html', '').replace('./', '').replace('/', '');

    // Match direct (ex: ned.html -> ned)
    if (linkName === cleanName) {
      link.classList.add('active');
    }
    // Match page persona détaillée -> persona galerie actif
    if (cleanName.startsWith('persona-') && linkName === 'personas') {
      link.classList.add('active');
    }
  });
})();

// =============== NED PAGE — Schéma interactif ===============
const NED_DETAILS = {
  nuage: {
    title: 'Niveau 5 — Nuage narratif',
    desc: 'L\'enveloppe la plus diffuse : l\'atmosphère culturelle globale autour d\'un sujet, produite par l\'écosystème dans son ensemble. Le nuage n\'est pas contrôlé par un acteur unique — il émerge de la densité des récits convergents. Objectif du NED : déplacer progressivement ce nuage.'
  },
  recit: {
    title: 'Niveau 4 — Grand récit central et boussole morale',
    desc: 'La phrase-matrice qui oriente tout l\'écosystème. Pour PAMOJA CI : « En Côte d\'Ivoire, nous protégeons les nôtres. » La boussole morale associée précise les valeurs qui doivent rester partagées entre tous les contenus — compassion, protection, dignité, responsabilité partagée.'
  },
  piliers: {
    title: 'Niveau 3 — Piliers narratifs',
    desc: 'Les grandes portes d\'entrée par lesquelles le grand récit se décline. Pour PAMOJA CI : Réalité (ça arrive, à toutes), Le silence tue, Compassion ivoirienne, Les hommes. Un contenu efficace active un pilier prioritaire — parfois un second en appui — mais jamais les quatre en même temps.'
  },
  cercles: {
    title: 'Niveau 2 — Cercles concentriques',
    desc: 'L\'étagement de proximité au sujet sensible. Cercle 3 sociétal (valeurs, foi, famille) pour ouvrir sans déclencher les défenses. Cercle 2 connexe (grossesse non désirée, contraception, viol) pour le pont. Cercle 1 avortement pour l\'atterrissage — jamais pour l\'ouverture. La circulation entre cercles structure chaque récit.'
  },
  tactiques: {
    title: 'Niveau 1 — Tactiques et atterrissages',
    desc: 'Le niveau du terrain. Un contenu précis — un TikTok, une chronique radio, un prêche, un atelier — produit par un acteur identifié pour un persona précis, avec un atterrissage concret vers un service réel. C\'est le seul niveau où tout doit être absolument précis et vérifiable. Si l\'atterrissage n\'existe pas, la tactique ne doit pas être diffusée.'
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
  // Scroll doux vers la zone de détail
  setTimeout(function() {
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// Scroll vers ancre NED (table des matières)
function scrollToNED(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
