import fs from 'node:fs/promises';

fs.readFile('.prettierrc', { encoding: 'utf-8' })
  .then((content) => fs.writeFile('.prettierrc.copy', content))
  .then(() => console.log('Copy Async Done'))
  .catch((err) => console.log(err));

// // Synchrone
// try {
//   const content = fs.readFileSync('.prettierrc', { encoding: 'utf-8' });
//   fs.writeFileSync('.prettierrc.copy', content);
//   console.log('Copy Sync Done');
// } catch (err) {
//   console.log(err);
// }

// // Asynchrone
// // Callback Hell / Pyramid of Doom
// // Avantage : perf
// // Inconvénient : compliqué à écrire et à maintenir
// fs.readFile('.prettierrc', { encoding: 'utf-8' }, (err, content) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile('.prettierrc.copy', content, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('Copy Async Done');
//       }
//     });
//   }
// });
