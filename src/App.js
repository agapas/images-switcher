import React from 'react';
import './App.css';
import ImageChangeOnMouseOver from "./components/ImageChangeOnMouseOver";
import ToggleController from "./components/toggle/ToggleController";

const paths = [
  [require('./images/bw/1.jpg'), require('./images/color/1.jpg')],
  [require('./images/bw/2.jpg'), require('./images/color/2.jpg')],
  [require('./images/bw/3.jpg'), require('./images/color/3.jpg')],
];

function App() {
  return (
    <div className="App">
      <ToggleController />
      <ImageChangeOnMouseOver paths={paths} />
    </div>
  );
}

export default App;
