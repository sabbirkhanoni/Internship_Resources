import { useState } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center mb-5">
          To-Do App
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2 outline-none"
          />

          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <span>{item}</span>

              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No tasks available.
          </p>
        )}
      </div>
    </div>
  );
}

export default ToDo;