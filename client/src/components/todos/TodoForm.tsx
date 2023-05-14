import { Dispatch, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { createTodo } from '../../http/todo-service';
import { isAxiosError } from 'axios';

type Props = {
  setIsCurrent: Dispatch<React.SetStateAction<boolean>>;
};

type ValidationError = {
  task: {
    message: string;
  } | null;
  description: {
    message: string;
  } | null;
};

function TodoForm({ setIsCurrent }: Props) {
  const taskInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [errors, setErrors] = useState<ValidationError | null>(null);

  useEffect(() => {
    taskInputRef.current?.focus();
  }, []);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const todo: ITodo = {
      task: taskInputRef.current !== null ? taskInputRef.current.value : '',
      description:
        descriptionInputRef.current !== null
          ? descriptionInputRef.current.value
          : '',
      isComplete: false,
    };

    createTodo(todo)
      .then((todo) => {
        console.log(todo);

        if (taskInputRef.current !== null) {
          taskInputRef.current.value = '';
        }
        if (descriptionInputRef.current !== null) {
          descriptionInputRef.current.value = '';
        }
        setIsCurrent(false);
      })
      .catch((err) => {
        if (isAxiosError(err)) {
          setErrors(err.response?.data?.errors);
        } else {
          console.log(err);
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-700 px-4 py-4 rounded mb-6">
      <div className="mb-4">
        <label htmlFor="task" className="block mb-2 text-slate-200">
          Add a New Todo:
        </label>
        <input
          type="text"
          name="task"
          id="task"
          ref={taskInputRef}
          className="appearance-none bg-slate-400 border-0 rounded w-full py-2 px-3 text-gray-800 leading-tight mb-1"
          placeholder="What needs to get done?"
        />
        {errors?.task && (
          <span className="text-orange-400 text-sm">{errors.task.message}</span>
        )}
      </div>
      <div className="mb-2">
        <label htmlFor="task" className="block mb-2 text-slate-200">
          Description:
        </label>
        <textarea
          id="message"
          rows={4}
          ref={descriptionInputRef}
          className="appearance-none bg-slate-400 border-0 rounded w-full py-2 px-3 text-gray-800 leading-tight"
          placeholder="Why do you need to do it?"></textarea>
        {errors?.description && (
          <span className="text-orange-400 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-emerald-700 hover:bg-emerald-600 text-slate-200 py-2 px-4 rounded transition duration-150">
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
