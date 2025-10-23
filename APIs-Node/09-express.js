import express from 'express';

const app = express();

// Middleware to parse JSON bodies
// will populate req.body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home!\n');
});

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]);
});

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name.toUpperCase()}!\n`);
});

app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search results for: ${query}\n`);
});

app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received!\n');
});

app.put('/data', (req, res) => {
  res.send('Data updated!\n');
});

app.delete('/data', (req, res) => {
  res.send('Data deleted!\n');
});

app.get('/about', (req, res) => {
  res.send('About us!\n');
});

// app.use((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Home!\n');
//   } else if (req.method === 'GET' && req.url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('About us!\n');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found\n');
//   }
// });

app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
