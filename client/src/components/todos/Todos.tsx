import { Fragment, useEffect, useState } from 'react';
import { getAllTodos } from '../../http/todo-service';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

type Props = {};

const initialTodos: ITodo[] = [];

function Todos({}: Props) {
  const [todos, setTodos] = useState(initialTodos);
  const [isCurrent, setIsCurrent] = useState(false);

  useEffect(() => {
    getAllTodos()
      .then((todos) => {
        setIsCurrent(true);
        setTodos(todos);
      })
      .catch((err) => console.log(err));
  }, [isCurrent]);

  return (
    <Fragment>
      <TodoForm setIsCurrent={setIsCurrent} />
      {isCurrent && <TodoList todos={todos} setIsCurrent={setIsCurrent} />}
    </Fragment>
  );
}

export default Todos;
