import { Router } from 'express';
import {
  createTodo,
  getAllTodos,
  getOneTodo,
  updateOneTodo,
  deleteOneTodo,
} from '../../controllers/todos/index.js';

const router: Router = Router();

// prettier-ignore
router
  .route('/')
  .get(getAllTodos)
  .post(createTodo);

// prettier-ignore
router
  .route('/:id')
  .get(getOneTodo)
  .patch(updateOneTodo)
  .put(updateOneTodo)
  .delete(deleteOneTodo);

export default router;
