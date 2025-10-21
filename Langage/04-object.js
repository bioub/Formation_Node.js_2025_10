// La plupart des APIs JavaScript sont définis en utilisant des objets.
// et parfois sont des variables globales.
// Exemple
console.log(Math.PI); // Accès à la propriété PI de l'objet Math
console.log(Math.sqrt(16)); // Appel de la méthode sqrt de l'objet Math

// Exemples de namespaces objects
console.log(typeof Math); // 'object'
console.log(typeof JSON); // 'object'

// Exemple d'objets instanciables
console.log(typeof new Date()); // 'object'
console.log(typeof new Date()); // 'object'

// En JavaScript tous les types sont des objets ou des types primitifs.
console.log(Math instanceof Object); // true
console.log(JSON instanceof Object); // true
console.log(new Date() instanceof Object); // true
console.log(Date instanceof Object); // true
console.log(typeof Date); // 'function'

// En JavaScript, un objet est une collection de paires clé-valeur.
// Par rapport à des modèles objets statiques (Java, C#, C++...),
// JavaScript utilise des objets dynamiques.
// On peut ajouter, modifier ou supprimer des propriétés et des méthodes à tout moment.

// On parle d'extension dynamique des objets.
console.log(Math.sum); // undefined
Math.sum = function (a, b) {
  return a + b;
};
console.log(Math.sum(2, 3)); // 5

delete Math.sum;
console.log(Math.sum); // undefined
// Mauvaise pratique de modifier des objets qu'on a pas créé (risque de conflits)
// Pratique dans les tests automatisés (mocking)

// Pour créer un objet il existe plusieurs systèmes.
// Object literal
// Cas d'utilisations :
// - des objets qui ne sont pas destinés à être réutilisés (Objet de configuration, options d'une fonction, namespace object...)
// - s'il est réutilisé plusieurs fois il ne contient pas de méthodes

// Config (d'une application)
const config = {
  host: 'localhost',
  port: 8080,
};

function createButton(options) {

}

// Options d'une fonction
createButton({
  color: 'blue',
  fontSize: 12,
  onClick: function () {
    console.log('Clicked');
  }
});

// Namespace object (plus vraiment recommandé avec les modules ES6)
const MyMath = {
  sum: function (a, b) {
    return a + b;
  },
  square: function (a) {
    return a * a;
  }
};

console.log(MyMath.sum(2, 3));
console.log(MyMath.square(4));

// Exemple d'objet réutilisable sans méthode
const pointA = {
  x: 10,
  y: 20,
};

const pointB = {
  x: 30,
  y: 40,
};

// Constructor / class
// Cas d'utilisations :
// - des objets destinés à être réutilisés plusieurs fois
// - des objets qui contiennent des méthodes

// La syntaxe ancienne (fonction constructeur + prototype)
// function User(name) {
//   console.log(this); // c'est l'objet en cours de création
//   this.name = name;
// }

// User.prototype.hello = function () {
//   console.log(`Hello ${this.name}`);
// }

// Depuis 2015 on privilégie la syntaxe class (syntactic sugar)
class User {
  constructor(name) {
    console.log(this); // c'est l'objet en cours de création
    this.name = name;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
}

// Si on appelle une fonction normalement, cette appel vaut la valeur de retour de la fonction (ici undefined)
// console.log(User()); // undefined

// Si on l'appelle avec le mot clé new, on obtient un nouvel objet
console.log(new User()); // User {}

console.log(typeof User); // 'function'
console.log(User.prototype.hello); // function hello() { ... }

const user1 = new User('Romain');
// user1.name = 'Romain';
console.log(user1.name); // 'Romain'
user1.hello(); // 'Hello Romain'

const user2 = new User('Alice');
user2.hello(); // 'Hello Alice'

console.log(user1.hello === user2.hello); // true, la méthode est partagée via le prototype
