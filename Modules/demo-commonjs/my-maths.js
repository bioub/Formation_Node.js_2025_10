// Node.js créé automatiquement une fonction
// pour créer une portée au niveau du fichier
// donc les variables et fonctions sont locales au fichiers
// -> portée de module
// function(exports, require, module, __filename, __dirname) {
'use strict';

// console.log('my-math.js loaded')
// console.log(arguments);

exports.sum = function sum(a, b) {
  return a + b;
};

exports.square = function square(a) {
  return a * a;
};
// }
