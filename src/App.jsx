import React, { useState, useEffect } from 'react';

export default function App() {
  const [water, setWater] = useState(0);
  const [isUp, setIsUp] = useState();

  useEffect(() => {
   const interval = setInterval(() => {
      if (isUp === 'increase' && water < 100) {
        setWater((prevState) => prevState + 20);
      }
      if (isUp === 'decrease' && water > 0) {
        setWater((prevState) => prevState - 20);
      }}, 2000)
      return () => clearInterval(interval); 
  }, [water, isUp])

  return (
    <div className="App">
      <div className="App-buttons">
        <button disabled={water === 100} onClick={() => {setIsUp('increase')}}> increaseWaterLevel </button>
        <button disabled={water === 0} onClick={() => {setIsUp('decrease')}}> decreaseWaterLevel </button>
      </div>
      <span className='bathtub-description'>Water Level: {water}%</span>
      <div className='bathtub'>
        <div className='bathtub__body'>
          <div style={{ background:'aqua', height:`${water}%`, width:'100%'}} ></div>
        </div>
      </div>
    </div>
  );
}
