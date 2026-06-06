# Infrastructure Web - Alain Didier Noutchegueme

Ce dépôt contient le code source de mon espace web personnel. Il s'agit d'une architecture statique conçue pour consolider et archiver mes travaux de recherche en géométrie spectrale, mes analyses en stratégie d'intelligence artificielle et mes essais.

Le système est délibérément minimaliste. L'objectif est la vélocité, la résilience et l'indépendance vis-à-vis des serveurs d'applications dynamiques.

## Pile Technologique

* **Moteur de rendu :** Astro (génération de site statique).
* **Architecture visuelle :** Tailwind CSS.
* **Gestion du contenu :** Markdown / MDX.
* **Déploiement :** GitHub Pages via GitHub Actions (environnement Node.js 22+).

## Topologie du Système

La structure du projet répond à une logique de routage par fichier :

* `public/` : Héberge les ressources statiques et les médias. Les serveurs de production opérant sous Linux, la casse des noms de fichiers y est strictement respectée.
* `src/pages/` : Définit la cartographie du site. Chaque fichier ou dossier génère une route physique. Le sous-système de blog y est intégré.
* `src/layouts/` : Contient l'ossature HTML et les balises métadonnées (Open Graph, indexation).
* `astro.config.mjs` : Cœur de la configuration du compilateur.

## Note sur le Routage Absolu

Pour pallier les asymétries de résolution entre l'environnement de développement local et la production sur GitHub Pages, le système de navigation utilise un routage déterministe. 

L'intégralité des hyperliens internes et des appels de ressources statiques est encodée en dur avec le préfixe du dépôt : `/Alain-Didier-Noutchegueme/`. Toute modification de la structure de navigation doit respecter cette loi spatiale pour éviter la création de nœuds morts (Erreur 404) en production.

## Opérations Locales

Toutes les instructions s'exécutent depuis la racine du projet dans l'interface en ligne de commande.

| Commande | Exécution |
| :--- | :--- |
| `npm install` | Résout et installe les dépendances de l'arbre structurel. |
| `npm run dev` | Instancie le serveur de développement local sur `localhost:4321`. |
| `npm run build` | Exécute la compilation totale du code en HTML/CSS brut vers le dossier `./dist/`. |
| `npm run preview` | Émule l'environnement de production en local après compilation. |