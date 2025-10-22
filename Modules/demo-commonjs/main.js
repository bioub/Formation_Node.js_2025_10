"use strict";

const config = require('./config.json');
const MyMath = require('./my-maths')
const hello = require('./hello')

console.log(MyMath.sum(1, 2)); // 3
console.log(hello('Romain')); // Hello Romain

// chemin entre la racine du disque et le dossier dans lequel se trouve
// le fichier courant
console.log(__dirname); // /Users/romain/Desktop/Formation/Module/demos-commonjs

console.log(config.appName); // MyApp
