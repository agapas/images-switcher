import React, { useState } from 'react';
import './App.css';
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <ToggleSwitch
        isOn={value}
        handleToggle={() => setValue(!value)}
      />
    </div>
  );
}

export default App;
