const config = {
  env: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 4000,
  mongodbUri: process.env.MONGODB_URI ?? 'mongodb://localhost:27017/test',
  jwtSecret: process.env.JWT_SECRET ?? 'your_jwt_secret',
};

export default config;
