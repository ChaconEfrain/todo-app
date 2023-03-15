import { URL } from "@/constants";

const getTasks = async () => {
  try {
    const res = await fetch(`${URL}/tasks`);
    const tasks = await res.json();
    return tasks;
  } catch (error) {
    console.error(error.message);
  }
};

export default getTasks;
