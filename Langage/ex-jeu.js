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

// Jeu du plus ou moins
// 1/ Ecrire une fonction qui génère un entier aléatoire entre 0 et 100 (API Math sur MDN)
// 2/ Demander et récupérer la saisie (API Readline sur Node.js) puis afficher si le nombre est plus grand, plus petit ou trouvé
// 3/ Pouvoir trouver en plusieurs tentatives (problème d’asynchronisme)
// 4/ Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
// 5/ Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)

const readline = require('node:readline');

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

// pile d'appels
// ^
// |
// |                        [question]                     [question]
// |[question]              [jouer   ]                     [jouer   ]
// |[jouer   ] ⟳            [task    ] ⟳                   [task    ] ⟳
// +------------------------ENTREE--------------------------ENTREE--------------------------> temps
// Sortie :
