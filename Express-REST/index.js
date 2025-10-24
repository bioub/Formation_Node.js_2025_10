import http from 'node:http';
import mongoose from 'mongoose';

import config from './config/index.js';
import app from './app.js';

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

await mongoose.connect(config.mongodbUri);

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
});
