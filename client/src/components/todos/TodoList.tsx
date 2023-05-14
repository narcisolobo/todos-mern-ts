import { Dispatch } from 'react';
import TodoItem from './TodoItem';

type Props = {
  todos: ITodo[];
  setIsCurrent: Dispatch<React.SetStateAction<boolean>>;
};

function TodoList({ todos, setIsCurrent }: Props) {
  return (
    <div className="bg-slate-700 px-4 pt-4 pb-1 rounded">
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} setIsCurrent={setIsCurrent} />
        ))}
    </div>
  );
}

export default TodoList;
