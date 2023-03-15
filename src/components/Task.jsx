import { useId, useState } from "react";

const Task = ({ task, deleteTask }) => {
  const taskId = useId();
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked((prev) => !prev)}
      className="flex justify-between text-lg group border-b-2 border-gray-600"
    >
      <label htmlFor={taskId} className={`${checked ? "line-through" : ""}`}>
        {task}
      </label>
      <input id={taskId} type="radio" checked={checked} hidden />
      <button
        onClick={deleteTask}
        className="opacity-0 transition group-hover:opacity-100"
      >
        ×
      </button>
    </div>
  );
};

export default Task;
