import { ITodo } from '../types/todo.js';
import { model, Schema } from 'mongoose';

const todoSchema: Schema = new Schema(
  {
    task: {
      type: Schema.Types.String,
      required: [true, 'Please enter task.'],
    },
    description: {
      type: Schema.Types.String,
      required: [true, 'Please enter description.'],
    },
    isComplete: {
      type: Schema.Types.Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Todo = model<ITodo>('Todo', todoSchema);
export default Todo;
