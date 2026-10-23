export const academicProjects = [
  {
    id: 'centre-commercial',
    title: 'Gestion de centre commercial',
    repositoryName: 'm1p13mean-Liantsiky-NyAina',
    context: 'Projet de Master I · Réalisation collaborative',
    summary:
      'Application MEAN pour organiser les boutiques, les espaces commerciaux et les achats dans un centre commercial.',
    objective:
      'Réunir dans une application web la gestion des espaces commerciaux et les parcours d’achat des utilisateurs.',
    features: [
      'Gestion des boutiques, produits, catégories, boxes et étages.',
      'Parcours d’achat, historique des achats et portefeuille de jetons.',
      'Interfaces et routes différenciées selon les rôles utilisateur.',
      'Frontend Angular relié à une API Express et à MongoDB.',
    ],
    technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
    contribution:
      'Projet réalisé à deux contributeurs; pour la pratique de MEAN.',
    githubUrl: 'https://github.com/NyAinaRatolojanahary/m1p13mean-Liantsiky-NyAina',
    visual: 'marketplace',
    visualLabel: 'Projet MEAN',
    visualTitle: 'Centre commercial',
    visualDetail: 'Boutiques · Produits · Achats',
  },
  {
    id: 'identite-numerique',
    title: 'Madagasikara Nomerika',
    repositoryName: 'Electronic-National-Identity-Card',
    context: 'Projet pratique en Licence · Identité numérique',
    summary:
      'Prototype d’identité numérique autour de trois domaines sensibles : santé, finance et foncier.',
    objective:
      'Explorer une identité numérique commune à plusieurs services et domaines de la vie quotidienne.',
    features: [
      'Recherche et consultation d’informations associées à un numéro CIN.',
      'Modules de santé et de banque, avec un parcours de transfert d’argent par CIN.',
      'Module foncier permettant de positionner une parcelle sur une carte Leaflet.',
      'Le dépôt rassemble des modules Java/JSP et un module foncier distinct en ASP.NET Core.',
    ],
    technologies: ['Java', 'JSP', 'SQL', 'ASP.NET Core', 'Leaflet'],
    contribution:
      'Projet de pratique en année Licence en Informatique, option Web et Design; les sources publiques présentent plusieurs modules du prototype.',
    githubUrl: 'https://github.com/NyAinaRatolojanahary/Electronic-National-Identity-Card',
    visual: 'identity',
    visualLabel: 'Prototype',
    visualTitle: 'Identité numérique',
    visualDetail: 'Santé · Finance · Foncier',
  },
  {
    id: 'ultimate-team-race',
    title: 'Ultimate Team Race',
    repositoryName: 'ULTIMATE-TEAM-RACE',
    context: 'Projet académique d\'évaluation finale · Gestion de course',
    summary:
      'Application de suivi d’une course par étapes, avec points, pénalités et classements individuels et par équipe.',
    objective:
      'Calculer les résultats provisoires et finaux à partir des temps et pénalités des coureurs à chaque étape.',
    features: [
      'Saisie des coureurs, équipes, étapes, temps et pénalités.',
      'Classements individuels, par étape et par équipe.',
      'Import de points et de résultats à partir de fichiers CSV.',
      'Génération d’un certificat de résultat.',
    ],
    technologies: ['Java', 'JSP', 'Servlets', 'PL/pgSQL'],
    contribution:
      'Projet académique individuel d\'évaluation finale; le code comprend des interfaces d’administration et d’équipe.',
    githubUrl: 'https://github.com/NyAinaRatolojanahary/ULTIMATE-TEAM-RACE',
    visual: 'race',
    visualLabel: 'Course par étapes',
    visualTitle: 'Points & classements',
    visualDetail: 'Temps · Pénalités · Équipes',
  },
]

export const upcomingProjects = [
  {
    id: 'gestion-financiere-eglise',
    number: '01',
    title: 'Gestion financière d’église',
    status: 'En cours',
    summary:
      'Un outil de suivi financier pour organiser les charges et les produits selon le PCG, suivre les cotisations des fidèles et piloter le budget annuel.',
    features: [
      'Suivi des charges et des produits selon le PCG.',
      'Gestion des fidèles et de leurs cotisations.',
      'Préparation et suivi du budget annuel.',
      'Tableau de bord des dépenses avec alertes de seuil.',
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'Docker', 'PostgreSQL'],
  },
  {
    id: 'arbre-genealogique',
    number: '02',
    title: 'Arbre généalogique personnalisé',
    status: 'En cours',
    summary:
      'Une application pour organiser les familles et parcourir leurs liens à travers un arbre généalogique interactif.',
    features: [
      'Gestion des familles et des grandes familles.',
      'Arbre interactif pour explorer les relations familiales.',
      'Affichage interactif de l’identité de chaque personne.',
    ],
    technologies: ['Node.js', 'Express', 'React', 'PostgreSQL'],
  },
]