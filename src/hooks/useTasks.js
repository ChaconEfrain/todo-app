import { useContext } from "react";
import { TasksContext } from "@/context/TasksContext";

const useTasks = () => {
  const {
    tasks,
    handleCreateTask,
    handleDeleteTask,
    handleUpdateTask,
    filterTasks,
  } = useContext(TasksContext);
  return {
    tasks,
    handleDeleteTask,
    handleCreateTask,
    handleUpdateTask,
    filterTasks,
  };
};

export default useTasks;
