import React from 'react';

function App() {
  const handleClick = (event) => {
    console.log('Button clicked');
    console.log('Event type:', event.type);
    console.log('Event target:', event.target);
  };

  return (
    <div className="App">
      <h1>React Synthetic Event Example</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
