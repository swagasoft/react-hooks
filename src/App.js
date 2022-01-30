
import { useState, useMemo, useEffect } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number])
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])



  useEffect(() => {
    console.log('theme style changed')
  }, [themeStyle])

  return (
    <div className="App">
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}></input>
      <button onClick={() => setDark(prev => !prev)}> change theme</button>
      <div style={themeStyle}> {doubleNumber} </div>

    </div>
  );
}


function slowFunction(num) {
  console.log('calling slow function');
  for (let i = 0; i <= 1000000000; i++) { }
  console.log('slow function done')
  return num * 2;

}

export default App;
