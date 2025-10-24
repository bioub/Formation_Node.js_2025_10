const config = {
  env: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 4000,
  mongodbUri: process.env.MONGODB_URI ?? 'mongodb://localhost:27017/test',
};

export default config;
