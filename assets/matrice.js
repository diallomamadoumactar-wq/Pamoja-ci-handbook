// Data : 27 tactiques extraites de la matrice complète (version complète dans l'Excel téléchargeable)
const TACTIQUES = [
  {n:1, persona:'aminata', personaLabel:'Aminata', pilier:'P1', comb:'M', format:'TikTok court (15-30s)', angle:"Série « Ce que personne ne t'a dit » — 1 fait médical ou juridique par capsule, raconté par une jeune femme proche en âge", comp:"Chercher l'info fiable sur la contraception et les cas légaux article 427", atter:'Lien bio → mini-site ressources PAMOJA avec annuaire AIBEF', prio:1},
  {n:2, persona:'aminata', personaLabel:'Aminata', pilier:'P1', comb:'C', format:'Carrousel Instagram', angle:"« AIBEF c'est quoi exactement ? » — décodage visuel : qui, où, combien, confidentialité", comp:"Identifier un point d'atterrissage sûr près de chez elle", atter:'Slide finale : numéro WhatsApp AIBEF + adresses 7 centres', prio:1},
  {n:3, persona:'aminata', personaLabel:'Aminata', pilier:'P2', comb:'C', format:'Reels témoignage anonymisé', angle:"Voix d'une jeune femme qui raconte son parcours — ce qu'elle aurait aimé savoir avant", comp:"Comprendre la différence avortement sécurisé vs clandestin", atter:"Description : lien vers page ressources + ligne d'écoute", prio:1},
  {n:4, persona:'aminata', personaLabel:'Aminata', pilier:'P1', comb:'C', format:'Stories Instagram quiz', angle:"Quiz « Article 427 : vrai ou faux ? » — 5 questions ludiques", comp:"Tester ses connaissances sur l'article 427", atter:"Carrousel permanent dans highlights « Tes droits »", prio:1},
  {n:5, persona:'aminata', personaLabel:'Aminata', pilier:'P3', comb:'M', format:'Podcast court 3-5 min', angle:"« Ce qu'on se dit entre meilleures amies » — 2 voix, conversation naturelle", comp:"Oser parler à une amie de confiance", atter:"Numéro ligne d'écoute + kit « comment aider une amie »", prio:2},
  {n:6, persona:'aminata', personaLabel:'Aminata', pilier:'P1', comb:'O', format:'WhatsApp chatbot', angle:"Porte d'entrée « J'ai une question et je ne veux pas que ça se sache »", comp:"Obtenir une information médicale fiable et confidentielle", atter:"Redirection ciblée : AIBEF / services / ligne verte", prio:1},
  {n:7, persona:'aminata', personaLabel:'Aminata', pilier:'P1', comb:'M', format:'Radio jeune (NRJ, Trace)', angle:"Chronique hebdo « Entre nous les filles » — 2 min, ton libre", comp:"Entendre le sujet traité publiquement sans honte", atter:"Numéro WhatsApp / site ressources", prio:2},
  {n:8, persona:'adjoua', personaLabel:'Adjoua', pilier:'P3', comb:'M', format:'Radio magazine santé', angle:"Magazine récurrent « Entre nous » — invités sage-femme, femme leader, leader religieux progressiste", comp:"Écouter une conversation qui articule foi et compassion", atter:"Numéros utiles et adresses en fin d'émission", prio:1},
  {n:9, persona:'adjoua', personaLabel:'Adjoua', pilier:'P3', comb:'M', format:'Théâtre radio série', angle:"12 épisodes suivant une famille où une jeune fille tombe enceinte", comp:"Reconnaître chez un personnage ce qu'elle vit ou a vu vivre", atter:"Discussion communautaire (tontine ou radio)", prio:1},
  {n:10, persona:'adjoua', personaLabel:'Adjoua', pilier:'P3', comb:'O', format:'Tontine / atelier communautaire', angle:"Kit d'animation pour femmes leaders de tontines", comp:"Parler du sujet en cercle de femmes de confiance", atter:"Intervention d'une OSC référente", prio:1},
  {n:11, persona:'adjoua', personaLabel:'Adjoua', pilier:'P3', comb:'M', format:'Radio religieuse', angle:"Intervention pasteur/imam progressiste sur radio grand public", comp:"Entendre une voix religieuse qui autorise la compassion", atter:"Associations religieuses d'accompagnement", prio:1},
  {n:12, persona:'koffi', personaLabel:'Koffi', pilier:'P4', comb:'O', format:'Podcast entre hommes', angle:"3-4 hommes (comédien, footballeur, journaliste) discutent de paternité, responsabilité, couple", comp:"Parler publiquement du sujet entre hommes sans moquerie", atter:"Kit « ce que tu peux faire »", prio:1},
  {n:13, persona:'koffi', personaLabel:'Koffi', pilier:'P4', comb:'M', format:'Capsule humoristique', angle:"Sketch de 90s : scène où un homme évite le sujet, retournement humoristique", comp:"Reconnaître une situation absurde sans agressivité", atter:"Site micro-communautaire « On en parle »", prio:1},
  {n:14, persona:'koffi', personaLabel:'Koffi', pilier:'P4', comb:'M', format:'Interview sportif', angle:"Interview 5 min avec footballeur / artiste qui parle de sa responsabilité de père", comp:"Entendre un modèle masculin admiré parler de paternité", atter:"Suivre le podcast « Entre hommes »", prio:1},
  {n:15, persona:'koffi', personaLabel:'Koffi', pilier:'P4', comb:'O', format:'WhatsApp groupe masculin', angle:"Micro-vidéos 30s avec question ouverte pour relance groupe", comp:"Lancer une conversation sérieuse dans son groupe", atter:"Lien vers podcast ou page ressources", prio:2},
  {n:16, persona:'koffi', personaLabel:'Koffi', pilier:'P4', comb:'C', format:"Kit d'orientation hommes", angle:"Carte « Ta partenaire est enceinte — voici ce que tu peux faire » : 5 étapes", comp:"Savoir quoi faire quand sa partenaire lui annonce une grossesse", atter:"Distribution maquis, clubs sportifs, barbershops", prio:2},
  {n:17, persona:'tantie', personaLabel:'Tantie Affoué', pilier:'P3', comb:'O', format:'Réseau WhatsApp tanties', angle:"Groupe privé avec mise à jour mensuelle : services, cas, retours", comp:"Entrer dans une communauté de pratique formée", atter:"Formation VCAT en présentiel trimestrielle", prio:1},
  {n:18, persona:'tantie', personaLabel:'Tantie Affoué', pilier:'P2', comb:'C', format:"Kit d'orientation poche", angle:"Document 4 pages : qui contacter, dans quel cas, questions à poser, signes d'alerte", comp:"Avoir sous la main la bonne info au bon moment", atter:"Contacts AIBEF + ligne verte + OSC", prio:1},
  {n:19, persona:'tantie', personaLabel:'Tantie Affoué', pilier:'P3', comb:'M', format:'Ateliers VCAT communautaires', angle:"Atelier 3h animé par OSC — échanges, cas, textes religieux en dialogue", comp:"Faire le travail d'articulation valeurs / réalité", atter:"Engagement à rejoindre le réseau WhatsApp", prio:1},
  {n:20, persona:'tantie', personaLabel:'Tantie Affoué', pilier:'P2', comb:'C', format:'Annuaire services numérique', angle:"Carte interactive en ligne + version A3 plastifiée", comp:"Connaître précisément les services disponibles", atter:"Points de retrait (AIBEF, OSC partenaires)", prio:1},
  {n:21, persona:'eliane', personaLabel:'Dr Éliane', pilier:'P2', comb:'C', format:'Note juridique SOGOCI / AFJCI', angle:"Document technique co-signé : cas, procédures, responsabilité", comp:"Maîtriser précisément le cadre de l'article 427", atter:"Diffusion SOGOCI, hôpitaux, cabinets privés", prio:1},
  {n:22, persona:'eliane', personaLabel:'Dr Éliane', pilier:'P2', comb:'C', format:'Webinaire formation continue', angle:"2h avec experts nationaux et internationaux — cas cliniques, Q&A", comp:"Se former aux protocoles OMS", atter:"Attestation + communauté de pratique", prio:1},
  {n:23, persona:'eliane', personaLabel:'Dr Éliane', pilier:'P2', comb:'M', format:'Plaidoyer guidelines SOGOCI', angle:"Contribution technique + notes de plaidoyer — lobbying professionnel ciblé", comp:"Intégrer les recommandations OMS dans les guidelines", atter:"Inclusion dans document officiel", prio:1},
  {n:24, persona:'eliane', personaLabel:'Dr Éliane', pilier:'P3', comb:'O', format:'Communauté pratique SOGOCI', angle:"Groupe restreint mensuel, cas pratiques et soutien entre pairs", comp:"Ne pas être isolée dans sa pratique", atter:"Plateforme de partage clinique sécurisée", prio:1},
  {n:25, persona:'mariam', personaLabel:'Pasteur Mariam', pilier:'P3', comb:'C', format:'Formation VCAT religieuse', angle:"Formation 3 jours type Catholics for Choice adaptée au contexte ivoirien", comp:"Maîtriser un cadre théologique de compassion qui tient", atter:"Intégration réseau leaders progressistes", prio:1},
  {n:26, persona:'mariam', personaLabel:'Pasteur Mariam', pilier:'P3', comb:'C', format:'Pool de prêches modèles', angle:"Kit de 10 prédications type — chrétien et musulman — sur la compassion", comp:"Avoir des ressources homilétiques prêtes à adapter", atter:"Communauté partage WhatsApp", prio:1},
  {n:27, persona:'mariam', personaLabel:'Pasteur Mariam', pilier:'P3', comb:'M', format:'Passage radio religieuse', angle:"Entretien pastoral 10-15 min sur radio religieuse confessionnelle", comp:"Porter la parole de compassion auprès d'une large audience de foi", atter:"Réseau d'accompagnement", prio:1}
];

function renderTactiques() {
  const list = document.getElementById('tactique-list');
  if (!list) return;
  const f = window.filters || {persona:'all', pilier:'all', comb:'all'};
  const filtered = TACTIQUES.filter(t =>
    (f.persona === 'all' || t.persona === f.persona) &&
    (f.pilier === 'all' || t.pilier === f.pilier) &&
    (f.comb === 'all' || t.comb === f.comb)
  );

  const counter = document.getElementById('tactique-counter');
  if (counter) counter.textContent = filtered.length + ' / ' + TACTIQUES.length;

  if (filtered.length === 0) {
    list.innerHTML = '<p style="text-align: center; padding: 60px 0; color: var(--ink-muted);">Aucune tactique ne correspond à ces filtres.</p>';
    return;
  }
  list.innerHTML = filtered.map(t => `
    <div class="tactique">
      <div class="id">${String(t.n).padStart(2,'0')}</div>
      <div>
        <div class="tactique-head">
          <h3>${t.format}</h3>
          <span class="badge persona-${t.persona}">${t.personaLabel}</span>
          <span class="badge pilier">${t.pilier}</span>
          <span class="badge comb-${t.comb.toLowerCase()}">COM-B · ${t.comb}</span>
          ${t.prio === 1 ? '<span class="badge" style="background: var(--forest-soft); color: var(--forest);">Priorité 1</span>' : ''}
        </div>
        <div class="tactique-body">
          <p><strong>Angle :</strong> ${t.angle}</p>
          <p><strong>Comportement cible :</strong> ${t.comp}</p>
          <p><strong>Atterrissage :</strong> ${t.atter}</p>
        </div>
      </div>
    </div>
  `).join('');
}

window.filters = {persona: 'all', pilier: 'all', comb: 'all'};
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const f = chip.dataset.f;
      const v = chip.dataset.v;
      document.querySelectorAll(`.filter-chip[data-f="${f}"]`).forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      window.filters[f] = v;
      renderTactiques();
    });
  });
  renderTactiques();
});
