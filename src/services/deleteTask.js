const { URL } = require("@/constants");

const deleteTask = async (id) => {
  try {
    const res = await fetch(`${URL}/task?id=${id}`, {
      method: "DELETE",
    });
    const newTasks = await res.json();
    return newTasks;
  } catch (error) {
    console.error(error.message);
  }
};

export default deleteTask;
