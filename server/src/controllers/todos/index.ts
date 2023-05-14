import { Request, Response } from 'express';
import { ITodo } from '../../types/todo.js';
import Todo from '../../models/todo.js';

async function getAllTodos(_: Request, res: Response) {
  try {
    const todos: ITodo[] = await Todo.find({});
    res.status(200).json(todos);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function createTodo(req: Request, res: Response) {
  try {
    const body: ITodo = req.body;
    const todo: ITodo = await Todo.create(body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getOneTodo(req: Request, res: Response) {
  try {
    const id: string = req.params.id;
    const todo: ITodo | null = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateOneTodo(req: Request, res: Response) {
  try {
    const id: string = req.params.id;
    const body: ITodo = req.body;
    const todo: ITodo | null = await Todo.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteOneTodo(req: Request, res: Response) {
  try {
    const id: string = req.params.id;
    const todo: ITodo | null = await Todo.findByIdAndDelete(id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
}

export { createTodo, getAllTodos, getOneTodo, updateOneTodo, deleteOneTodo };
