import React from 'react';
import './App.css';
import ImageChangeOnMouseOver from "./components/ImageChangeOnMouseOver";
import ImagesSource from "./components/ImagesSource";
import ToggleController from "./components/toggle/ToggleController";

const paths = [
  [require('./images/primary/1.jpg'), require('./images/secondary/1.jpg')],
  [require('./images/primary/2.jpg'), require('./images/secondary/2.jpg')],
  [require('./images/primary/3.jpg'), require('./images/secondary/3.jpg')],
  [require('./images/primary/4.jpg'), require('./images/secondary/4.jpg')],
  [require('./images/primary/5.jpg'), require('./images/secondary/5.jpg')],
  [require('./images/primary/6.jpg'), require('./images/secondary/6.jpg')],
];

const imagesSource = "https://pixabay.com/";

function App() {
  return (
    <div className="app">
      <ToggleController />
      <ImageChangeOnMouseOver paths={paths} />
      <ImagesSource source={imagesSource} />
    </div>
  );
}

export default App;
