// Un stream est une séquence de données qui peut être lue ou écrite de manière continue.
// Les streams sont utilisés pour gérer des flux de données volumineux ou infinis,
// comme la lecture de fichiers, la communication réseau, etc.

// Dans Node il existe plusieurs types de streams :
// - Readable : pour lire des données
// - Writable : pour écrire des données
// - Duplex : pour lire et écrire des données
// - Transform : pour modifier les données en cours de lecture ou d'écriture

// Importation du module 'fs' pour travailler avec le système de fichiers
import fs from 'node:fs';
import zlib from 'node:zlib';

// Création d'un stream de lecture pour un fichier texte
const readStream = fs.createReadStream('bigFile.html', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('copy-bigFile.html');

// Utilisation de la méthode 'pipe' pour connecter le stream de lecture au stream d'écriture
// Cela permet de copier le contenu du fichier 'bigFile.html' vers 'copy-bigFile.html'
// readfile bigFile.html | writefile copy-bigFile.html
readStream.pipe(writeStream);

// Création d'un stream de lecture pour un fichier texte
const gzipReadStream = fs.createReadStream('bigFile.html');
const gzipWriteStream = fs.createWriteStream('bigFile.html.gz');
const gzip = zlib.createGzip();

// Compression du fichier en utilisant un stream de transformation (gzip)
// readfile bigFile.html | gzip | writefile bigFile.html.gz
gzipReadStream.pipe(gzip).pipe(gzipWriteStream);

// let i = 0;
// // Écoute de l'événement 'data' pour lire les données par morceaux
// readStream.on('data', (chunk) => {
//   i++;
//   console.log(`Nouveau morceau de données reçu (${i}) :`);
//   console.log(chunk.length);
// });
