import request from 'supertest';
import { beforeAll, expect, test } from 'vitest';
import app from '../app';
import Todo from '../models/todo.js';
// import mongoose from 'mongoose';
// import config from '../config/index.js';

// beforeAll(async () => {
//   await mongoose.connect(config.mongodbUri);
// });

test('functional test GET /todos returns a list of todos', async () => {

  const originalFind = Todo.find;
  Todo.find = () => Promise.resolve([]); // Mocking the Todo.find method

  const res = await request(app)
    .get('/api/todos');

  expect(res.statusCode).toBe(200);

  expect(res.body).toEqual([]);

  Todo.find = originalFind; // Restore the original method

});
