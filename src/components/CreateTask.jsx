import { useId, useRef } from "react";
import useTasks from "@/hooks/useTasks";
import { SubmitIcon } from "./Icons";

const CreateTask = () => {
  const createTaskInput = useId();
  const { handleCreateTask } = useTasks();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = inputRef.current;
    if (!task.value.trim()) return;
    handleCreateTask(task.value);
    task.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-1 px-2 border-b-2 border-b-gray-600"
    >
      <label htmlFor={createTaskInput} className="flex justify-between">
        <input
          ref={inputRef}
          id={createTaskInput}
          type="text"
          placeholder="Learn javascript"
          autoComplete="off"
          className="outline-none"
        />
        <button onClick={handleSubmit}>
          <SubmitIcon className="w-6 h-6" />
        </button>
      </label>
    </form>
  );
};

export default CreateTask;
