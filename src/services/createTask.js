import { URL } from "@/constants";

const createTask = async (task) => {
  try {
    const res = await fetch(`${URL}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });
    const newTask = await res.json();
    return newTask;
  } catch (error) {
    console.error(error.message);
  }
};

export default createTask;
