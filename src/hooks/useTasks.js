import { useContext } from "react";
import { TasksContext } from "@/context/TasksContext";

const useTasks = () => {
  const { tasks, handleCreateTask, handleDeleteTask, handleUpdateTask } =
    useContext(TasksContext);
  return { tasks, handleDeleteTask, handleCreateTask, handleUpdateTask };
};

export default useTasks;
