
## 🌟 Introduction

Ce travail pratique (TP) a pour objectif de te familiariser avec les concepts fondamentaux de React, l’une des bibliothèques JavaScript les plus utilisées pour créer des interfaces utilisateur modernes et interactives.
À travers une série d’exercices progressifs, tu apprendras à concevoir une application React complète, en comprenant comment organiser ton code en composants réutilisables, gérer les données dynamiques et structurer un projet professionnel.

Ce TP te guidera pas à pas dans :

**L’installation et la configuration d’un projet React avec Create React App.**

**La création et l’intégration de composants fonctionnels en utilisant la syntaxe JSX.**

**L’utilisation des props pour transmettre des données entre les composants.**

**La validation des types de données avec PropTypes.**

**L’affichage de listes dynamiques et la réutilisation de composants.**

À la fin de ce TP, tu seras capable de construire une application React bien structurée, lisible et modulable — une base essentielle pour le développement d’applications web modernes.



## 🧩 Étape 1 – Préparer l’environnement de travail
**🎯 Objectif :**

Installer les outils nécessaires pour créer et exécuter une application React.

**🪄 Détails :**

Installer Node.js et npm

Node.js permet d’exécuter JavaScript sur ton ordinateur (en dehors du navigateur).

npm (Node Package Manager) sert à installer des bibliothèques comme React.


<img width="853" height="592" alt="Capture d&#39;écran 2025-11-08 181910" src="https://github.com/user-attachments/assets/5cef4eda-5508-463d-8ee2-f7d0c6ac0679" />


## Créer un nouveau projet React

npx create-react-app tp-react
cd tp-react
npm start


<img width="970" height="648" alt="Capture d&#39;écran 2025-11-08 182005" src="https://github.com/user-attachments/assets/05558007-1a77-44b7-80e2-8479fdf102ae" />

npx create-react-app crée automatiquement toute la structure du projet React.

npm start démarre le serveur local sur http://localhost:3000


<img width="1918" height="1015" alt="localhost3000" src="https://github.com/user-attachments/assets/edaa3b3b-48a2-4c91-830f-4cbc6dc5e4d2" />


## 🧩 Étape 2 – Création de composants fonctionnels simples
**🎯 Objectif :**

Apprendre à créer ton premier composant React.

**🪄 Détails :**

Un composant est une fonction qui retourne du code JSX (HTML + JavaScript).

<img width="758" height="294" alt="Capture d&#39;écran 2025-11-08 150645" src="https://github.com/user-attachments/assets/9335e029-f17b-40b8-bd6e-1c48cbc50326" />

## 🧩 Étape 3 – Création et utilisation des composants avec props
**🎯 Objectif :**

Découvrir les props, c’est-à-dire les données que l’on passe à un composant.

**🪄 Détails :**


<img width="645" height="418" alt="étape3" src="https://github.com/user-attachments/assets/0838b5c4-19eb-410d-889a-0270bff7d503" />

## 🧩 Étape 4 – Composant avancé avec props et PropTypes
**🎯 Objectif :**

Valider les types de données et afficher des informations plus complexes.

**🪄 Détails :**

installé prop-types :

npm install prop-types


→ Cette librairie vérifie les types de données passées aux composants.

créé un composant Profil.js :



<img width="756" height="371" alt="Capture d&#39;écran 2025-11-08 173745" src="https://github.com/user-attachments/assets/9b715895-e0f7-4e0f-be63-a271afa7b56a" />


<img width="646" height="540" alt="Capture d&#39;écran 2025-11-08 174843" src="https://github.com/user-attachments/assets/a36ae1fb-cd17-4095-b237-8bdf2ccc38ba" />


👉 Cela force React à vérifier que les données reçues ont bien la bonne forme.

## 🧩 Étape 5 – Exercices pratiques complémentaires
**🎯 Objectif :**

Combiner ce que tu as appris : plusieurs composants, des props et des listes dynamiques.

**🪄 Exercice  : Voiture.js**

créé un composant simple qui reçoit 3 props :


Puis tu l’as utilisé plusieurs fois dans App.js :

<Voiture marque="Toyota" modele="Corolla" couleur="Bleu" />
<Voiture marque="Renault" modele="Clio" couleur="Rouge" />
<Voiture marque="Peugeot" modele="208" couleur="Noir" />




<img width="475" height="990" alt="exercice 1" src="https://github.com/user-attachments/assets/d415fdab-44b6-43c0-97aa-6426312ac3ad" />



## 🏁 Conclusion

À travers ce TP, nous avons parcouru les principales notions nécessaires pour bien débuter avec React.
Tu as appris à initialiser un projet, à créer et organiser des composants fonctionnels, et à communiquer entre eux à l’aide des props.
L’introduction de PropTypes t’a permis de renforcer la fiabilité de ton code en validant les types de données échangés entre les composants.
Enfin, les exercices sur les composants dynamiques comme ListeCourses t’ont montré comment afficher et manipuler des collections d’éléments de manière efficace.

Ce TP t’a permis de consolider tes connaissances sur la structure d’une application React, son fonctionnement interne, et les bonnes pratiques de développement (réutilisabilité, clarté, modularité).
Ces bases te serviront pour aborder des notions plus avancées telles que la gestion d’état avec useState, la communication entre composants via les hooks, ou encore la navigation dans des applications React plus complexes.

