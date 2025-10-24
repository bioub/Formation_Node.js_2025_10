import os from 'node:os';

console.log('Nom de l\'OS :', os.type());
console.log('Version de l\'OS :', os.release());
console.log('Architecture de l\'OS :', os.arch());
console.log('Plateforme de l\'OS :', os.platform());
console.log('Nombre de CPU :', os.cpus().length);
console.log('Nombre de CPU :', os.availableParallelism());
console.log('Mémoire totale :', os.totalmem());
console.log('Mémoire libre :', os.freemem());
console.log('Répertoire home de l\'utilisateur :', os.homedir());
console.log('Nom de l\'utilisateur courant :', os.userInfo().username);
console.log('Uptime de l\'OS (en secondes) :', os.uptime());
console.log('Interfaces réseau :', os.networkInterfaces());
console.log('Tmpdir :', os.tmpdir());
