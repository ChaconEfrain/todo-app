import useTasks from "@/hooks/useTasks";
import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon, EditIcon } from "./Icons";

const Task = ({ task, id }) => {
  const taskId = useId();
  const taskRef = useRef(null);
  const [checked, setChecked] = useState(false);
  const [disableEdit, setDisableEdit] = useState(true);
  const [taskInput, setTaskInput] = useState(task);
  const { handleDeleteTask, handleUpdateTask } = useTasks();

  const handleChange = (e) => {
    const el = taskRef.current;
    setTaskInput(e.target.value);
    el.style.height = "0px";
    const scrollHeight = el.scrollHeight;
    el.style.height = scrollHeight + "px";
  };

  const updateTask = () => {
    setDisableEdit(false);
  };

  const handleKeyDown = (e) => {
    const key = e.key;
    if (key === "Enter") {
      setDisableEdit(true);
      handleUpdateTask(id, taskInput);
    }
  };

  useEffect(() => {
    if (!disableEdit) taskRef.current.focus();
    const el = taskRef.current;
    // el.style.height = "0px";
    const scrollHeight = el.scrollHeight;
    el.style.height = scrollHeight + "px";
  }, [disableEdit]);

  return (
    <div className="flex justify-between text-lg group border-b-2 border-gray-600">
      <div className="flex gap-2 w-full">
        <input
          onClick={() => setChecked((prev) => !prev)}
          id={taskId}
          type="radio"
          checked={checked}
          readOnly
        />
        <textarea
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={taskRef}
          value={taskInput}
          disabled={disableEdit}
          rows={1}
          className={`${checked ? "line-through" : ""} resize-none w-full`}
        />
      </div>
      <div className="opacity-0 transition group-hover:opacity-100 flex items-center">
        <button onClick={updateTask}>
          <EditIcon className="w-4 h-4" />
        </button>
        <button onClick={() => handleDeleteTask(id)}>
          <CloseIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Task;
