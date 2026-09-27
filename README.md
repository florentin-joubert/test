# E-portfolio — modèle statique

Un point de départ en français pour créer un portfolio personnel. Le contenu visible est une **démo à remplacer** : il ne décrit pas une personne réelle. Le site fonctionne directement dans un navigateur, sans framework, compilation ni dépendance npm, et peut être publié avec GitHub Pages.

## Ouvrir et prévisualiser le site

1. Installez [Visual Studio Code](https://code.visualstudio.com/) si nécessaire, puis ouvrez le dossier du dépôt avec **Fichier > Ouvrir le dossier…**.
2. Dans VS Code, ouvrez **Extensions** (`Ctrl+Shift+X`) et installez les extensions proposées dans `.vscode/extensions.json` :
   - **Live Server** (`ritwickdey.LiveServer`) démarre un serveur local et actualise la page après vos modifications. Cliquez sur **Go Live** dans la barre d’état.
   - **Prettier - Code formatter** (`esbenp.prettier-vscode`) met en forme HTML, CSS et JavaScript. Il est facultatif : le site n’en dépend pas.
3. Sans Live Server, ouvrez simplement `index.html` dans votre navigateur. Les extensions ne sont jamais requises pour GitHub Pages.

## Fichiers

- `index.html` contient les sections et le contenu statique de secours, lisible même si JavaScript est désactivé.
- `styles.css` gère la mise en page responsive, les thèmes clair/sombre, les contrastes et les animations.
- `script.js` regroupe les données de démonstration à personnaliser, affiche les listes de compétences, de parcours et de projets, et active le menu et le thème.
- `.vscode/extensions.json` suggère deux extensions utiles dans VS Code ; elles ne sont pas installées automatiquement.

## Personnaliser le contenu

1. Ouvrez `script.js` et modifiez d’abord l’objet `portfolioData` en haut du fichier. Remplacez notamment `[Votre nom]`, `[Votre rôle]`, les textes entre crochets, les compétences, le parcours, les projets et la ville. Les tableaux `experiences` et `projects` peuvent contenir autant d’éléments que nécessaire.
2. Mettez également à jour les textes de remplacement correspondants dans `index.html` : ils servent de version de secours si JavaScript ne se charge pas.
3. Dans `portfolioData.contact`, renseignez votre adresse e-mail et vos liens LinkedIn/GitHub. Les liens sociaux restent inactifs tant qu’une URL `https://` ou `http://` n’est pas fournie.
4. Pour un CV, copiez votre propre fichier dans le dépôt (par exemple `assets/cv-votre-nom.pdf`), puis indiquez ce chemin dans `cvPath`. Le bouton CV n’apparaît pas tant que ce chemin est vide. N’ajoutez que des documents que vous avez le droit de publier.
5. Ajustez les couleurs ou espacements dans `styles.css`. Vérifiez les changements avec Live Server et sur un écran étroit.

Les données initiales sont fictives ou entre crochets pour rendre le modèle visuellement complet, mais ne constituent pas une biographie. Évitez d’ajouter des coordonnées personnelles que vous ne souhaitez pas rendre publiques.

## Publier sur GitHub Pages

1. Enregistrez vos changements et envoyez-les sur GitHub dans la branche `main`.
2. Dans le dépôt GitHub, ouvrez **Settings > Pages**.
3. Dans **Build and deployment**, choisissez **Deploy from a branch**, puis la branche **main** et le dossier **/ (root)**. Cliquez sur **Save**.
4. Attendez la fin du déploiement ; l’adresse du site s’affiche dans **Settings > Pages**. Après chaque mise à jour envoyée sur `main`, Pages republie le site automatiquement.

Il n’y a pas de commande de build, de workflow ni de configuration Jekyll à ajouter : `index.html` doit rester à la racine du dépôt.

## Dépannage

- **La page est vide ou ancienne :** vérifiez que `index.html` est à la racine, enregistrez vos fichiers et actualisez le navigateur sans cache (`Ctrl+F5`).
- **Live Server ne démarre pas :** vérifiez que l’extension est installée et que le dossier du dépôt, plutôt que le seul fichier HTML, est ouvert dans VS Code. Vous pouvez toujours ouvrir `index.html` directement.
- **Le menu ou le thème ne répond pas :** vérifiez que `script.js` est présent à la racine et que la console du navigateur ne signale pas d’erreur. Le contenu statique reste affiché sans JavaScript.
- **GitHub Pages affiche une erreur ou une ancienne version :** vérifiez **Settings > Pages** (`main`, `/ (root)`), attendez la fin du déploiement dans l’onglet **Actions**, puis actualisez le site.
- **Une image ou un CV n’apparaît pas :** contrôlez le chemin et les majuscules/minuscules. Les chemins publiés par Pages sont sensibles à la casse ; gardez vos fichiers locaux dans le dépôt.
