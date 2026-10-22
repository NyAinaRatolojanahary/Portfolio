import { Braces, Database, Layers3, Terminal } from 'lucide-react'

export const skillAreas = [
  {
    title: 'Langages',
    icon: Braces,
    items: [
      { name: 'Java', kind: 'Langage', context: 'Facturation en production · Orange Madagascar' },
      { name: 'C#', kind: 'Langage', context: 'Madagasikara Nomerika · projet académique en Licence' },
      { name: 'JavaScript', kind: 'Langage', context: 'Développement Web' },
      { name: 'TypeScript', kind: 'Langage' , context: 'Développement Web'},
      { name: 'Python', kind: 'Langage', context: 'Traitement de données' },
      { name: 'SQL', kind: 'Langage de requête', context: 'Traitements ETL · Orange Madagascar' },
      { name: 'Shell', kind: 'Langage de script', context: 'Diagnostic de traitements · Orange Madagascar' },
      { name: 'AWK', kind: 'Langage de traitement', context: 'Optimisation de traitements · Orange Madagascar' },
    ],
  },
  {
    title: 'Frameworks, bibliothèques & API',
    icon: Layers3,
    items: [
      { name: 'Spring Boot', kind: 'Framework Java', context: 'Application de gestion des logs IT · stage' },
      { name: 'J2EE', kind: 'Plateforme Java', context: 'Madagasikara Nomerika · projet de Licence' },
      { name: '.NET', kind: 'Plateforme de développement', context: 'Madagasikara Nomerika · projet de Licence' },
      { name: 'React', kind: 'Bibliothèque UI', context: 'Application de gestion des logs IT · stage' },
      { name: 'Angular', kind: 'Framework frontend', context: 'Gestion de centre commercial · Master I' },
      { name: 'Node.js', kind: 'Runtime JavaScript', context: 'API REST · projet web' },
      { name: 'Express.js', kind: 'Framework backend', context: 'API REST · projet web' },
      { name: 'API REST', kind: 'Style d’architecture', context: 'Gestion de centre commercial · projet web' },
      { name: 'JWT', kind: 'Authentification par jetons', context: 'Gestion des rôles · projet web' },
    ],
  },
  {
    title: 'Bases de données',
    icon: Database,
    items: [
      { name: 'MongoDB', kind: 'Base NoSQL', context: 'Logs IT · stage; centre commercial · Master I' },
      { name: 'PostgreSQL', kind: 'Base relationnelle', context: 'Madagasikara Nomerika · projet de Licence' },
      { name: 'SQL Server', kind: 'Base relationnelle', context: 'Madagasikara Nomerika · projet de Licence' },
      { name: 'Oracle', kind: 'Base relationnelle', context: ' Projet académique en Licence' },
      { name: 'MySQL', kind: 'Base relationnelle', context: 'Facturation en production · Orange Madagascar' },
    ],
  },
  {
    title: 'Systèmes & outils',
    icon: Terminal,
    items: [
      { name: 'Linux', kind: 'Système d’exploitation', context: 'Environnement de production' },
      { name: 'Docker', kind: 'Conteneurisation', context: 'Environnement du stage fullstack' },
      { name: 'Git', kind: 'Gestion de versions', context: 'Contrôle de version du code' },
      { name: 'Apache NiFi', kind: 'Orchestration de flux', context: 'Flux de données · Orange Madagascar' },
      { name: 'Talend', kind: 'Outil ETL', context: 'Traitement des flux · Orange Madagascar' },
    ],
  },
]

export const skillHighlights = [
  { value: '50 000', label: 'fichiers traités par flux et par jour en moyenne' },
  { value: '50 000', label: 'factures B2B et B2C générées par cycle de facturation environ' },
]