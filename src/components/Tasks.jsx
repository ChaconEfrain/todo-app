import useTasks from "@/hooks/useTasks";
import React from "react";
import CreateTask from "./CreateTask";
import Task from "./Task";

const Tasks = () => {
  const { tasks, handleDeleteTask } = useTasks();
  return (
    <article className="w-full border-2 border-gray-600">
      <CreateTask />
      {!!tasks &&
        tasks.map(({ task, _id }) => (
          <Task
            key={_id}
            task={task}
            deleteTask={() => handleDeleteTask(_id)}
          />
        ))}
    </article>
  );
};

export default Tasks;
