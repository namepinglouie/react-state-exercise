import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function handleIncrease5Click() {
    setCounter(counter + 5);
  }
  function handleDecrease2Click() {
    setCounter(counter - 2);
  }

  return (
    <div className='App'>
      <div>{counter}</div>
      <button onClick = {handleIncrease5Click}>+5</button>
      <button onClick = {handleDecrease2Click}>-2</button>
    </div>
  )
}

export default App
