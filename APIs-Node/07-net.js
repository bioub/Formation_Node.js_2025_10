import { createServer } from "node:net";

console.log('Démarrage du serveur TCP sur le port 8080...');

const server = createServer((socket) => {
  console.log('connection established');
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-Type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Hello World\n');
  socket.end();
});

// server.on('connection', (socket) => {
//   console.log('connection established');
//   socket.pipe(process.stdout);
//   socket.write('HTTP/1.1 200 OK\r\n');
//   socket.write('Content-Type: text/plain\r\n');
//   socket.write('\r\n');
//   socket.write('Hello World\n');
//   socket.end();
// });
server.on('error', (err) => {
  console.error('Server error:', err);
});
// server.on('listening', () => {
//   console.log('Server is listening on port 8080');
// });

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
