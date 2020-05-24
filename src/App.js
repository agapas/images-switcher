import React, { useState } from 'react';
import './App.css';
import ToggleSwitch from "./components/ToggleSwitch";
import ImageChangeOnMouseOver from "./components/ImageChangeOnMouseOver";

const paths = [
  [require('./images/bw/1.jpg'), require('./images/color/1.jpg')],
  [require('./images/bw/2.jpg'), require('./images/color/2.jpg')],
  [require('./images/bw/3.jpg'), require('./images/color/3.jpg')],
];

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <ToggleSwitch
        isOn={value}
        handleToggle={() => setValue(!value)}
      />
      <ImageChangeOnMouseOver paths={paths} />
    </div>
  );
}

export default App;
