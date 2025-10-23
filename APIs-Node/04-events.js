import { EventEmitter } from "node:events";

class MonEvenement extends EventEmitter {
  demarrer() {
    console.log("Démarrage de l'événement...");
    this.emit("debut", { message: "L'événement a commencé !" });

    setTimeout(() => {
      this.emit("milieu", { message: "Nous sommes au milieu de l'événement." });
    }, 1000);

    setTimeout(() => {
      this.emit("fin", { message: "L'événement est terminé." });
    }, 2000);
  }
}

const evenement = new MonEvenement();

evenement.on("debut", (data) => {
  console.log("Événement 'debut' reçu :", data.message);
});

evenement.on("milieu", (data) => {
  console.log("Événement 'milieu' reçu :", data.message);
});

const callbackFin = (data) => {
  console.log("Événement 'fin' reçu :", data.message);
  evenement.off("fin", callbackFin);
};

evenement.on("fin", callbackFin);

evenement.demarrer();
console.log('FIN DU PROGRAMME');

// once écoute une seule fois l'événement
process.once("SIGINT", (err) => {
  console.error("Signal d'interruption reçu :", err);
});

