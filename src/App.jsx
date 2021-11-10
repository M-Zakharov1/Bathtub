import React, { useState, useEffect } from 'react';

export default function App() {
  const [water, setWater] = useState(0);
  const [TIMER_ID, setTIMER_ID] = useState(0);

  const change = (isUp) => {
    clearTimeout(TIMER_ID);
    const id = setInterval(() => {
        setWater((prevState) => { return isUp ? prevState + 20 : prevState - 20 });
    }, 2000)
    setTIMER_ID(id);
  }

  useEffect(() => {
    if ((water >= 100) || (water <= 0))
      clearTimeout(TIMER_ID);
  }, [water])

  return (
    <div className="App">
      <div className="App-buttons">
        <button disabled={water === 100} onClick={() => change(true)}> increaseWaterLevel </button>
        <button disabled={water === 0} onClick={() => change(false)}> decreaseWaterLevel </button>
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
