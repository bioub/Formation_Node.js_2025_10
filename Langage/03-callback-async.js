setTimeout(() => { console.log('A') }, 500);
setTimeout(() => { console.log('B') }, 0);
setTimeout(() => { console.log('C') }, 1000);
setTimeout(() => { console.log('D') }, 500);

console.log('E')

// Dans quel ordre s'affiche les lettres :

// pile d'appels
// ^
// |
// |
// |                         [lg]                   [lg]   [lg]            [lg]
// |[st][st][st][st][lg] ⟳  [taskB] ⟳              [taskA][taskD] ⟳       [taskC]
// +------------------------7ms----------------------------------------------------> temps
// Sortie :         E        B                      A       D               C

// File d'attente (0ms) : taskB
// File d'attente (500ms) : taskA
// File d'attente (501ms) : taskA - taskD
// File d'attente (502ms) : taskD
// File d'attente (503ms) :

// Côté C++ le code JavaScript s'exécute dans une boucle (Event Loop)
// La boucle ressemble à :
// do {
//   executeLaPileDAppel();
// } while (ilYADesCallbackEnAttente)
