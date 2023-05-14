import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: { 'Content-type': 'application/json' },
});

async function getAllTodos() {
  try {
    const response = await http.get<ITodo[]>('/todos');
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error(error.message);
    }
  }
}

async function getTodo(id: string) {
  try {
    const response = await http.get(`/todos/${id}`);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error(error.message);
    }
  }
}

async function createTodo(todo: ITodo) {
  try {
    const response = await http.post<ITodo>('/todos', todo);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error(error.message);
    }
  }
}

async function toggleTodo(id: string, isComplete: boolean) {
  try {
    const response = await http.patch<ITodo>(`/todos/${id}`, { isComplete });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error(error.message);
    }
  }
}

async function deleteTodo(id: string) {
  try {
    const response = await http.delete(`/todos/${id}`);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error(error.message);
    }
  }
}

export { getAllTodos, getTodo, createTodo, toggleTodo, deleteTodo };
