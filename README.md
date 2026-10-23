# Portfolio de Ny Aina

Portfolio personnel développé avec React, Vite et JavaScript. Les fonctionnalités sont organisées par domaine dans `src/features/`; l’application, le routage et les layouts partagés se trouvent dans `src/app/`.

## Démarrage

```sh
npm install
npm run dev
```

## Commandes

- `npm run dev` : démarre le serveur local.
- `npm run lint` : vérifie le code avec ESLint.
- `npm run build` : génère le site dans `dist/`.
- `npm run preview` : prévisualise le build.

## Organisation

- `src/app/` : point d’entrée, providers, routeur, routes et layouts.
- `src/features/` : pages et composants organisés par domaine (`home`, `skills`, `projects`, `contact`).
- `src/components/` : composants partagés, dont le header et le footer.
- `src/assets/` : ressources importées par le code, dont les images du portfolio.
- `public/` : ressources statiques accessibles par URL.

Les dossiers suivent uniquement les besoins actuels de la V1; les structures dédiées à l’authentification, au tableau de bord, aux stores et aux tests seront ajoutées si le périmètre évolue.

## Formulaire de contact

Le formulaire utilise Formspree. Créez un formulaire dans votre compte Formspree, puis copiez son endpoint dans `.env` :

```sh
cp .env.example .env
```

Renseignez ensuite `VITE_FORMSPREE_ENDPOINT` avec l’URL Formspree, puis redémarrez Vite. Configurez la même variable dans l’environnement de déploiement. Le fichier `.env` local n’est pas suivi par Git.