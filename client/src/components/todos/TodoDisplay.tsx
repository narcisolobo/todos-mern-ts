import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTodo } from '../../http/todo-service';

function TodoDisplay() {
  const { id } = useParams();
  const [todo, setTodo] = useState<ITodo | null>(null);

  useEffect(() => {
    const todoId = id !== undefined ? id : '';
    getTodo(todoId)
      .then((todo) => setTodo(todo))
      .catch((err) => console.log(err));
  }, [id]);

  return todo && <div>{todo.task}</div>;
}
export default TodoDisplay;
