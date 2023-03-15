import { createContext, useEffect, useState } from "react";
import createTask from "@/services/createTask";
import deleteTask from "@/services/deleteTask";
import getTasks from "@/services/getTasks";

export const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
  }, []);

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    const newTasks = tasks.filter((task) => task._id !== id);
    setTasks(newTasks);
  };

  const handleCreateTask = async (task) => {
    const newTask = await createTask(task);
    console.log(newTask);
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };
  return (
    <TasksContext.Provider
      value={{ tasks, handleCreateTask, handleDeleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
