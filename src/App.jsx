import { useState } from 'react';
import './App.css';

const colors = ['#009B72', '#6761A8', '#347E8D', '#AD636C', '#798186'];

const App = () => {
  let [number, setNumber] = useState(0);
  let [colorIndex, setColorIndex] = useState(0);
  const incrementNumberClicks = () => {
    setNumber(number + 1);
  };

  const switchBackgroundColor = () => {
    if (colorIndex === 4) {
      setColorIndex(0);
    } else {
      setColorIndex(colorIndex + 1);
    }
  };

  const functionsClickMeButton = () => {
    incrementNumberClicks();
    switchBackgroundColor();
  };

  const resetColorAndClicks = () => {
    setColorIndex(0);
    setNumber(0);
  };

  return (
  <div>
    <div style={{backgroundColor: colors[colorIndex]}} className="container">
    <div className="text-container">
        <p className="container-title">Background Color:</p>
        <p style={{color: colors[colorIndex]}} className="container-title-color">{colors[colorIndex]}</p>
    </div>
    <button onClick={functionsClickMeButton} className="clickMe-button">Click me</button>
    <button onClick={resetColorAndClicks} className="reset-button">Reset</button>
</div>

<div className="number-clicks">{number}</div>
</div>
  )
}

export default App
