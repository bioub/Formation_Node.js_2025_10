const names = ['Romain', 'Jean', 'Eric'];

function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

names.forEach((n, i) => {
  // console.log(`callback called with element ${n}, with index ${i}`)
  console.log(hello(n));
});

console.log('FIN');

// pile d'appels
// ^
// |
// |[hello][lg][hello][lg][hello][lg]
// |[=>       ][=>       ][=>       ]
// |[forEach                        ][lg]
// +---------------------------------------> temps
