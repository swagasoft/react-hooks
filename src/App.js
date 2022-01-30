import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  const inputRef = useRef();


  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div >
      <input value={name} onChange={(e) => setName(e.target.value)} /> <b />
      <div>My name is {name} </div> <b />
      <div> I render {renderCount.current} times </div>


      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} /> <b />
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
