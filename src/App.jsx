import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (!taskInput.trim()) return;
    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex] = taskInput;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, taskInput]);
    }
    setTaskInput('');
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const editTask = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h2>📝 Haritha's Task Manager App</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>{editIndex !== null ? 'Update' : 'Add'}</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <p className="empty">No tasks yet — add one above!</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <div className="actions">
                <button className="edit" onClick={() => editTask(index)}>Edit</button>
                <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
