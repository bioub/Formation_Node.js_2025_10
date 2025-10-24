import Todo from '../models/todo.js';
import { ObjectId } from 'mongodb';

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 */
export async function listTodos(req, res) {
  const todos = await Todo.find();
  res.json(todos);
}

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function showTodo(req, res, next) {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    req.notFoundReason = `Todo ${req.params.id} not found`;
    return next();
  }

  res.json(todo);
}

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function addTodo(req, res, next) {
  const todo = await Todo.create(req.body);
  res.statusCode = 201;
  res.json(todo);
}

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function deleteTodo(req, res, next) {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo) {
    req.notFoundReason = `Todo ${req.params.id} not found`;
    return next();
  }

  res.json(todo);
}

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function replaceTodo(req, res, next) {
  const todo = await Todo.findOneAndReplace({ _id: ObjectId(req.params.id) }, req.body);

  if (!todo) {
    req.notFoundReason = `Todo ${req.params.id} not found`;
    return next();
  }

  res.json(todo);
}

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function updateTodo(req, res, next) {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

  if (!todo) {
    req.notFoundReason = `Todo ${req.params.id} not found`;
    return next();
  }

  res.json(todo);
}
