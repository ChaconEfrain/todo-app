import { useContext } from "react";
import { TasksContext } from "@/context/TasksContext";

const useTasks = () => {
  const { tasks, handleCreateTask, handleDeleteTask } =
    useContext(TasksContext);
  return { tasks, handleDeleteTask, handleCreateTask };
};

export default useTasks;
