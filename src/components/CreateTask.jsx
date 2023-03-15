import useTasks from "@/hooks/useTasks";
import getTasks from "@/services/getTasks";
import { useRef } from "react";
import { SubmitIcon } from "./Icons";

const CreateTask = () => {
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
    <form onSubmit={handleSubmit} className=" py-1 px-2">
      <label htmlFor="task-input" className="flex justify-between">
        <input
          ref={inputRef}
          id="task-input"
          type="text"
          placeholder="Learn javascript"
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
