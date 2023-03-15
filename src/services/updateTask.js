const { URL } = require("@/constants");

const updateTask = async (id, task) => {
  try {
    const res = await fetch(`${URL}/task`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, task }),
    });
    const updatedTask = await res.json();
    return updatedTask;
  } catch (error) {
    console.error(error.message);
  }
};

export default updateTask;
