import path from 'node:path';

const absolutePath = '/user/local/bin/file.txt';
const relativePath = './some/relative/path/file.txt';

console.log('Chemin du fichier :', absolutePath);
console.log('Nom du fichier :', path.basename(absolutePath));
console.log('Extension du fichier :', path.extname(absolutePath));
console.log('Répertoire du fichier :', path.dirname(absolutePath));
console.log('Chemin absolu :', path.resolve(relativePath));
console.log('Chemin relatif vers le fichier :', path.relative(process.cwd(), absolutePath));
console.log('Séparateur de chemin :', path.sep);
console.log('Délimiteur de chemin :', path.delimiter);

const joinedPath = path.join('local', 'bin', 'file.txt');
console.log('Chemin joint join :', joinedPath);

const resolvedJoinedPath = path.resolve('local', 'bin', 'file.txt');
console.log('Chemin joint resolve :', resolvedJoinedPath);

const normalizedPath = path.normalize('/user//local/../local/bin///file.txt');
console.log('Chemin normalisé :', normalizedPath);

const parsedPath = path.parse(absolutePath);
console.log('Chemin parsé :', parsedPath);
