import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([
    "Wake up at 6 'O' Clock",
    "Having breakFast",
    "Watching Movies",
  ]);
  const [newTasks, setNewTasks] = useState("");

  function inputHandle(e) {
    setNewTasks(e.target.value);
  }
  function newTask() {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  }
  function removeTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }
  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="container">
      <div className="head">
        <h1>T O - D O</h1>
      </div>
      <div className="Content-Field">
        <input
          type="text"
          id="addTask"
          placeholder="Enter Your Task"
          onChange={inputHandle}
          value={newTasks}
        />
        <button onClick={newTask} className="button1">Add Task</button>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button onClick={() => removeTask(index)} className="button">
                Delete
              </button>
              <button onClick={() => moveUp(index)} className="button">
                👆
              </button>
              <button onClick={() => moveDown(index)} className="button">
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default Todo;
