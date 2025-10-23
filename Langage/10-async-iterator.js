import readline from "node:readline/promises";
import fs from "node:fs";
import { setInterval } from 'node:timers/promises'

// function interval(delayMs) {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// interval(1000).then(() => console.log('1s'));

const rl = readline.createInterface({
  input: fs.createReadStream('.prettierrc'),
})

for await (const line of rl) {
  console.log('line', line);
}

for await (const _ of setInterval(1000)) {
  console.log('1s');
}



