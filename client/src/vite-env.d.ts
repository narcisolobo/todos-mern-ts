/// <reference types="vite/client" />

interface ITodo {
  _id?: string;
  task: string;
  description: string;
  isComplete: boolean;
  createdAt?: string;
  updatedAt?: string;
}

type Action =
  | { type: 'ADD_TODO'; payload: { task: string; description: string } }
  | { type: 'TOGGLE_TODO'; payload: { targetId: string } }
  | { type: 'DELETE_TODO'; payload: { targetId: string } };
