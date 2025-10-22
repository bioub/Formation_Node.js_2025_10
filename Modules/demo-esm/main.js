// Pas besoin du "use strict" en ESM
// on est déjà en mode strict par défaut
import { sum } from './my-maths.js';
import hello from './hello.js';

console.log(sum(1, 2)); // 3
console.log(hello('Romain')); // Hello Romain
