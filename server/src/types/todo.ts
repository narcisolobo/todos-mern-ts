import { Document } from 'mongoose';

interface ITodo extends Document {
  task: string;
  description: string;
  isComplete: boolean;
}

export { ITodo };
