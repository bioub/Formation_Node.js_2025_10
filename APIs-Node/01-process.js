import process from 'node:process';
import fs from 'node:fs/promises';

console.log(`Version de Node.js : ${process.version}`);
console.log(`Plateforme : ${process.platform}`);
console.log(`Architecture : ${process.arch}`);

console.log(`Chemin du répertoire courant : ${process.cwd()}`);
process.chdir(import.meta.dirname);
console.log(`Nouveau répertoire courant : ${process.cwd()}`);
// ATTENTION les chemins relatifs avec fs sont relatifs au répertoire courant (CWD)
console.log(await fs.readFile('.prettierrc', 'utf-8'));

console.log('Arguments passés au script :', process.argv);
// On n'utilise jamais argv directement
// on passe toujours par une bibliothèque comme yargs, commander ou minimist

console.log(`PID du processus : ${process.pid}`);

// Stats d'utilisation de la mémoire ou du CPU
console.log('Utilisation mémoire :', process.memoryUsage());
console.log('Utilisation CPU :', process.cpuUsage());

// Ecouter si CTRL+C est pressé
process.on('SIGINT', () => {
  console.log('CTRL+C détecté !');
  process.exit(0); // terminer le processus proprement
});

process.on('uncaughtException', (err) => {
  console.error('Exception non capturée :', err);
  process.exit(1); // terminer le processus avec une erreur
});

setInterval(() => {
  console.log('Processus en cours...');
}, 1000);

// Variables d'environnement
console.log('Variable PATH :', process.env.PATH);
console.log('Variable HOME :', process.env.HOME || process.env.USERPROFILE);
console.log('Variable NODE_ENV :', process.env.NODE_ENV); // souvent "development" ou "production"

process.exit(0); // terminer le processus sans erreurs
process.exit(1); // terminer le processus avec une erreur
