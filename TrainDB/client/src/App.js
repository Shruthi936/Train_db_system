import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [trains, setTrains] = useState([]);
  const [newTrain, setNewTrain] = useState("");

  const fetchTrains = async () => {
    const res = await axios.get("http://localhost:5000/api/trains");
    setTrains(res.data);
  };

  const addTrain = async () => {
    if (!newTrain.trim()) return;
    await axios.post("http://localhost:5000/api/trains", { name: newTrain });
    setNewTrain("");
    fetchTrains();
  };

  useEffect(() => { fetchTrains(); }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Train Schedule Management</h1>
      <input
        placeholder="Train Name"
        value={newTrain}
        onChange={(e) => setNewTrain(e.target.value)}
      />
      <button onClick={addTrain}>Add Train</button>
      <ul>
        {trains.map(train => (
          <li key={train._id}>{train.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;