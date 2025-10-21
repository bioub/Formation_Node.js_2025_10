// Exercice 1 :
// Créer un namespace object Random qui contient les 4 fonctions de génération de nombres aléatoires
// Appeler getRandomInt(0, 100) via Random.getRandomInt(0, 100) pour générer un entier aléatoire entre 0 et 100
const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require('node:readline');

// Exercice 2 :
// Créer une class Jeu qui encapsule les 3 variables rl, entierAlea et essais
// sous forme de propriétés
// Déplacer la fonction jouer en méthode de la class Jeu
// Tester que le code fonctionne avec :
// const jeu = new Jeu();
// jeu.jouer();

class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getRandomInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà saisi : ' + this.essais.join(', '));
    }

    this.rl.question('Quel est le nombre ? ', (answer) => {
      // Attention answer est de type string
      console.log('Vous avez saisi : ' + answer);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log("Erreur: la saisie n'est pas un nombre");
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}

const jeu = new Jeu({ max: 10 });
jeu.jouer();

// Exercice 3
// Recevoir des options min et max au niveau du constructeur de la class Jeu (sous forme d'objet)
// Prévoir des valeurs par défaut (min = 0, max = 100)
// Il faut que tous ces appels fonctionnent :
// const jeu = new Jeu({ min: 20, max: 40 });
// const jeu = new Jeu({ max: 150 });
// const jeu = new Jeu({ min: 50 });
// const jeu = new Jeu({});
// const jeu = new Jeu();
