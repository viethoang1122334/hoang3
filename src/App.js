import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, number1, number2 }),
    });

    if (response.ok) {
      alert('Data saved successfully!');
    } else {
      alert('Failed to save data.');
    }

    // Reset form
    setName('');
    setNumber1('');
    setNumber2('');
  };

  return (
    <div>
      <h1>Submit Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Number 1:</label>
          <input
            type="number"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Number 2:</label>
          <input
            type="number"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
