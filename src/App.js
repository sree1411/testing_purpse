import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [taskvalue, setTaskValue] = useState({ id: null, name: '' }); // Combined state

  const handleChange = (e) => {
    setTaskValue({ ...taskvalue, name: e.target.value }); // Update only the name
  };

  const handleReset = () => {
    setTaskValue({ id: null, name: '' }); // Reset both name and id
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskvalue.id) {
      // Edit the existing task
      setUsers(
        users.map((task) =>
          task.id === taskvalue.id ? { ...task, name: taskvalue.name } : task
        )
      );
    } else {
      // Add a new task
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        name: taskvalue.name,
        status: false, // Initialize the status as false
      };
      setUsers([...users, newTask]);
    }

    handleReset(); // Reset input after adding or editing
  };

  const deleteBtn = (id) => {
    setUsers(users.filter((task) => task.id !== id));
  };

  const editUserBtn = (id) => {
    const userToEdit = users.find((task) => task.id === id);
    if (userToEdit) {
      setTaskValue({ id: userToEdit.id, name: userToEdit.name }); // Set the task to edit
    }
  };

  const toggleBtn = (id) => {
    setUsers(
      users.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskvalue.name}
          onChange={handleChange}
        />
        <button type="submit">
          {taskvalue.id ? 'Update' : 'Add'} {/* Dynamic button label */}
        </button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name} - {user.status ? 'pending' : 'completed'}
            <button onClick={() => deleteBtn(user.id)}>Delete</button>
            <button onClick={() => editUserBtn(user.id)}>Edit</button>
            <button onClick={() => toggleBtn(user.id)}>
              {user.status ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
