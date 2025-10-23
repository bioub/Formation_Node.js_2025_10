import { exec } from "node:child_process";
import { promisify } from "node:util";

const execPromise = promisify(exec);

try {
  const { stdout, stderr } = await execPromise("git --version");
  if (stderr) {
    console.error(`Erreur dans la sortie standard : ${stderr}`);
    process.exit(1);
  }
  console.log(`Version de Git : ${stdout}`);
} catch (error) {
  console.error(`Erreur lors de l'exécution de la commande : ${error.message}`);
}
