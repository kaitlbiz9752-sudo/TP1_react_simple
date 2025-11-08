// App.js
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses'; // (utilisé à l'exo 2)

function App() {
  const utilisateur = { nom: 'Emma', photo: '/user.png' };

  // 3 voitures différentes
  const voitures = [
    { marque: 'Toyota', modele: 'Corolla', couleur: 'Bleu' },
    { marque: 'Renault', modele: 'Clio', couleur: 'Rouge' },
    { marque: 'Peugeot', modele: '208', couleur: 'Noir' },
  ];

  // Listes pour l'exercice 2
  const courses1 = ['Lait', 'Pain', 'Œufs'];
  const courses2 = ['Tomates', 'Pâtes', 'Fromage', 'Basilic'];

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Alice" />
      <Profil utilisateur={utilisateur} taille={150} />

      {/* Exercice 1 : afficher 3 voitures */}
      {voitures.map((v, i) => (
        <Voiture
          key={i}
          marque={v.marque}
          modele={v.modele}
          couleur={v.couleur}
        />
      ))}

      {/* Exercice 2 : deux listes différentes */}
      <h3>Liste 1</h3>
      <ListeCourses elements={courses1} />

      <h3>Liste 2</h3>
      <ListeCourses elements={courses2} />
    </div>
  );
}

export default App;
