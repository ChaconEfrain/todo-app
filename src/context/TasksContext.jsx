import { createContext, useEffect, useRef, useState } from "react";
import createTask from "@/services/createTask";
import deleteTask from "@/services/deleteTask";
import getTasks from "@/services/getTasks";
import updateTask from "@/services/updateTask";
import { FILTERS } from "@/constants";

export const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const allTasks = useRef(null);

  const filterTasks = (filter = FILTERS.all) => {
    let newTasks = [];
    if (filter === FILTERS.completed) {
      newTasks = allTasks.current.filter(({ completed }) => completed);
    } else if (filter === FILTERS.notCompleted) {
      newTasks = allTasks.current.filter(({ completed }) => !completed);
    } else {
      newTasks = allTasks.current;
    }

    setTasks([...newTasks]);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    const newTasks = tasks.filter(({ _id }) => _id !== id);
    allTasks.current = newTasks;
    setTasks(newTasks);
  };

  const handleCreateTask = async (task) => {
    const newTask = await createTask(task);
    const newTasks = [...tasks, newTask];
    allTasks.current = newTasks;
    setTasks(newTasks);
  };

  const handleUpdateTask = async (id, task, completed = false) => {
    const updatedTask = await updateTask(id, task, completed);
    const newTasks = [...allTasks.current];
    const taskToReplace = allTasks.current.findIndex(({ _id }) => _id === id);
    newTasks.splice(taskToReplace, 1, updatedTask);
    allTasks.current = newTasks;
    setTasks(newTasks);
  };

  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data);
      allTasks.current = data;
    });
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleCreateTask,
        handleDeleteTask,
        handleUpdateTask,
        filterTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
