import { createContext, useEffect, useState } from "react";
import createTask from "@/services/createTask";
import deleteTask from "@/services/deleteTask";
import getTasks from "@/services/getTasks";
import updateTask from "@/services/updateTask";

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
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const handleUpdateTask = async (id, task) => {
    const updatedTask = await updateTask(id, task);
    const newTasks = [...tasks];
    const taskToReplace = tasks.findIndex(({ _id }) => _id === id);
    newTasks.splice(taskToReplace, 1, updatedTask);
    setTasks(newTasks);
  };

  return (
    <TasksContext.Provider
      value={{ tasks, handleCreateTask, handleDeleteTask, handleUpdateTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
