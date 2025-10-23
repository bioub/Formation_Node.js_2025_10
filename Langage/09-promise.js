import { promisify } from 'node:util';
import { setTimeout } from 'node:timers/promises';
// Promise est une nouveauté de ES2015
// et a connu différentes ajouts dans les versions suivantes
// Elles existaient déjà sous forme de bibliothèques précédemment :
// Ex: bluebird, q...

// Depuis 2015 de nombreux APIs async se sont mis à utiliser les promesses
// ex :
// fetch au lieu de XMLHttpRequest
// depuis Node 12, fs

// Si pas de version basé sur des promesses on peut la créer soit même

// Ex :
// timeout(1000).then(() => { console.log('A') });
// ou :
// await timeout(1000);
// console.log('A');

// Version 1 avec le constructeur Promise
// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// Version 2 avec promisify
// const timeout = promisify(setTimeout);

// Version 3 setTimeout de timers/promises (quand ça existe)
setTimeout(1000).then(() => { console.log('A') });

// Version 4 passer par une lib plutôt que de le créer
// Exemple : execa pour child_process.exec

// Les 4 fonctions suivantes permettent de combiner plusieurs
// promesses en entrée en une promesse en sortie
// de sorte à paralléliser les opérations asynchrones

// all et allSettled attendent que toutes les opérations se terminent
// la différence entre all et allSettled se fait sur la gestion des erreurs

// all attend que toutes les opérations se terminent
// si une échoue l'ensemble échoue
Promise.all
// Exemple : le build soit tous les fichiers ont été lu
// soit on fait échouer le build si une lecture échoue

// allSettled attend que toutes les opérations se terminent
// on récupère le détail de ce qui a échoue ou pas échouer
Promise.allSettled
// Dashboard ou il vaut faire un affichage partiel que pas d'affichage du tout

// race et any attendent que la première opération se termine
// la différence entre race et any se fait sur la gestion des erreurs

// race attend que la première se termine
// si la première échoue l'ensemble échoue
Promise.race
// Exemple : opération avec un timeout
// Dans mon app si une requete est trop longue on veut affiche un message
// (La requête a pris plus de 10 secondes, veuillez réassayer plus tard)

// any attend que la première se termine
// si la première échoue on attends la suivante (et ainsi de suite)
// si tout échoue l'ensemble échoue
Promise.any
// Exemple : ping de plusieurs serveur pour connaitre le plus rapide

