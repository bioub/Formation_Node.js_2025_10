// Jeu du plus ou moins
// 1/ Ecrire une fonction qui génère un entier aléatoire entre 0 et 100 (API Math sur MDN)
// 2/ Demander et récupérer la saisie (API Readline sur Node.js) puis afficher si le nombre est plus grand, plus petit ou trouvé
// 3/ Pouvoir trouver en plusieurs tentatives (problème d’asynchronisme)
// 4/ Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
// 5/ Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    // Attention answer est de type string
    console.log('Vous avez saisi : ' + answer);

    // Pour rejouer :
    jouer();

    // A faire quand on trouvé le bon nombre :
    // rl.close();
  });
}

jouer();

// pile d'appels
// ^
// |
// |                        [question]                     [question]
// |[question]              [jouer   ]                     [jouer   ]
// |[jouer   ] ⟳            [task    ] ⟳                   [task    ] ⟳
// +------------------------ENTREE--------------------------ENTREE--------------------------> temps
// Sortie :
