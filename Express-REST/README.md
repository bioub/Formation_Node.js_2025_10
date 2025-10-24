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
