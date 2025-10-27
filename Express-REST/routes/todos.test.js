import request from 'supertest';
import { expect, test, vi } from 'vitest';
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


test('functional test GET /todos/:id returns a todo', async () => {
  const originalFindById = Todo.findById;
  Todo.findById = vi.fn().mockResolvedValue({ _id: '1', title: 'Test Todo' }); // Mocking the Todo.findById method

  const res = await request(app)
    .get('/api/todos/1');

  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ _id: '1', title: 'Test Todo' });
  expect(Todo.findById).toHaveBeenCalledWith('1');

  Todo.findById = originalFindById; // Restore the original method
});
