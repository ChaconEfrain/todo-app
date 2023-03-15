import useTasks from "@/hooks/useTasks";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="flex justify-between text-lg group">
      <p>{task}</p>
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
