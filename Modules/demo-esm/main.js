// Pas besoin du "use strict" en ESM
// on est déjà en mode strict par défaut
import process from 'node:process';
import { sum } from './my-maths.js';
import hello from './hello.js';
import config from './config.json' with { type: 'json' };

console.log(sum(1, 2)); // 3
console.log(hello('Romain')); // Hello Romain

// chemin entre la racine du disque et le dossier dans lequel se trouve
// le fichier courant
console.log(import.meta.dirname); // /Users/romain/Desktop/Formation/Module/demos-commonjs

console.log(config.appName); // MyApp

console.log(process.version); // Version de Node
