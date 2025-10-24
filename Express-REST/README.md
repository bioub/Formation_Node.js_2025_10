# Exercice Mongo

## Exercice 1

Avec MongoShell ou MongoDB Compass insérer dans la collection users de la base test :
```
{
  username: 'toto',
  password: 'password'
}
{
  username: 'titi',
  password: '1234'
}
```

Dans le fichier `models/user.js` créer un model Mongoose User qui viendra remplacer le user par défaut :
```
const user = {
  username: 'romain',
  password: '123456',
};
```

## Exercice 2

Modifier la méthode login pour qu'elle recherche si un utilisateur en base correspond au username / password reçu via credentials

## Exercice 3

Ajouter une route `/api/users/register` pour pouvoir créer un nouvel user en db.

Dans `routes/user.js` ne pas ajouter le préfixe `/api/users` car il est déjà présent dans `app.js`

# Exercices Tests

## Exercice 1 : Fonctions Pures

Ecrire les tests de `lib/my-maths.js`


## Exercice 2 : Middleware

Compléter le test de `middlewares/authenticate.test.js` pour vérifier que `next` soit appelé si le token JWT est valide.

Exemple de token valide :

```
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2OGZiNmE0OWI1ODkxYzk2OTQ0NzljMmMifQ.0_gboM6uUs0S2HOjrFwGPfZwPNRQybsdBwqtZSMRIGE
```

Alternative : remplacer jwt.verify le temps du test (en s'inspirant du remplacement de Todo.find)

## Exercice 3 : Fonctionnel

Ajouter le test de `GET /api/todos/1` dans `routes/todos.test.js`

## Administratif

- signer toutes les feuilles de présence
- remplir la 2e partie de validation des acquis
- remplir le questionnaire de satisfaction
