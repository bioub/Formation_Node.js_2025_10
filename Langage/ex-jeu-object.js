// Exercice 1 :
// Créer un namespace object Random qui contient les 4 fonctions de génération de nombres aléatoires
// Appeler getRandomInt(0, 100) via Random.getRandomInt(0, 100) pour générer un entier aléatoire entre 0 et 100
function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const readline = require('node:readline');

// Exercice 2 :
// Créer une class Jeu qui encapsule les 3 variables rl, entierAlea et essais
// sous forme de propriétés
// Déplacer la fonction jouer en méthode de la class Jeu
// Tester que le code fonctionne avec :
// const jeu = new Jeu();
// jeu.jouer();

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà saisi : ' + essais.join(', '))
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    // Attention answer est de type string
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur: la saisie n\'est pas un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const entierAlea = getRandomInt(0, 100);
const essais = [];
jouer();


// Exercice 3
// Recevoir des options min et max au niveau du constructeur de la class Jeu (sous forme d'objet)
// Prévoir des valeurs par défaut (min = 0, max = 100)
// Il faut que tous ces appels fonctionnent :
// const jeu = new Jeu({ min: 20, max: 40 });
// const jeu = new Jeu({ max: 150 });
// const jeu = new Jeu({ min: 50 });
// const jeu = new Jeu({});
// const jeu = new Jeu();
