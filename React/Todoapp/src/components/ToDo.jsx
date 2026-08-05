import { useState } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  const addOrUpdateTask = () => {
    if (!task.trim()) return;

    if (editId) {
      setTasks(
        tasks.map((item) =>
          item.id === editId ? { ...item, text: task } : item
        )
      );
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
      };

      setTasks([...tasks, newTask]);
    }

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const editTask = (task) => {
    setTask(task.text);
    setEditId(task.id);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const clearAll = () => {
    setTasks([]);
    setTask("");
    setEditId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-slate-100 to-indigo-100 flex items-center justify-center p-5">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-indigo-600">
          To-Do App
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Stay organized and complete your daily tasks.
        </p>

        {/* Input */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && addOrUpdateTask()
            }
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={addOrUpdateTask}
            className={`px-6 rounded-xl text-white transition ${
              editId
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-between text-sm text-gray-600 mb-5">
          <span>Total: {tasks.length}</span>

          <span>
            Completed:{" "}
            {tasks.filter((item) => item.completed).length}
          </span>
        </div>

        {/* Empty State */}
        {tasks.length === 0 ? (
          <div className="text-center py-12 border-2 rounded-xl">
            <p className="text-gray-500">
              No tasks yet. Add your first task!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 border rounded-xl p-4 flex justify-between items-center hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleComplete(item.id)}
                    className="w-5 h-5"
                  />

                  <span
                    className={`text-lg ${
                      item.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => editTask(item)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTask(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Buttons */}
        {tasks.length > 0 && (
          <button
            onClick={clearAll}
            className="w-full mt-6 bg-gray-800 hover:bg-black text-white py-3 rounded-xl transition"
          >
            Clear All Tasks
          </button>
        )}
      </div>
    </div>
  );
}

export default ToDo;