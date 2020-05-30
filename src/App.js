import React from 'react';
import './App.css';
import ImagesController from "./components/ImagesController";
import ImagesSource from "./components/ImagesSource";

export const paths = [
  [require('./images/primary/1.jpg'), require('./images/secondary/1.jpg')],
  [require('./images/primary/2.jpg'), require('./images/secondary/2.jpg')],
  [require('./images/primary/3.jpg'), require('./images/secondary/3.jpg')],
  [require('./images/primary/4.jpg'), require('./images/secondary/4.jpg')],
  [require('./images/primary/5.jpg'), require('./images/secondary/5.jpg')],
  [require('./images/primary/6.jpg'), require('./images/secondary/6.jpg')],
];

export const imagesSource = "https://pixabay.com/";

function App() {
  return (
    <div className="app">
      <ImagesController paths={paths} />
      <ImagesSource source={imagesSource} />
    </div>
  );
}

export default App;
