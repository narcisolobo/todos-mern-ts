import { Dispatch } from 'react';
import { deleteTodo, toggleTodo } from '../../http/todo-service';
import { FaTrash } from 'react-icons/fa';

type Props = {
  todo: ITodo;
  setIsCurrent: Dispatch<React.SetStateAction<boolean>>;
};

function TodoItem({ todo, setIsCurrent }: Props) {
  const handleToggle = () => {
    const id = todo._id ? todo._id : '';
    toggleTodo(id, !todo.isComplete)
      .then((todo) => {
        console.log(todo);
        setIsCurrent(false);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    const id = todo._id ? todo._id : '';
    deleteTodo(id)
      .then((todo) => {
        console.log(todo);
        setIsCurrent(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-between items-center mb-4 bg-slate-400 rounded py-2 px-3 text-gray-800 leading-tight">
      <div className="flex items-center">
        <input
          id="isComplete"
          type="checkbox"
          checked={todo.isComplete}
          className="rounded"
          onChange={handleToggle}
        />
        <label htmlFor="isComplete" className="ml-2 text-gray-800">
          {todo.task}
        </label>
      </div>
      <button
        className="bg-slate-600 hover:bg-slate-500 text-slate-200 p-2 rounded transition duration-150"
        onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  );
}

export default TodoItem;
