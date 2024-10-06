import { useState } from 'react'
import Para from './Components/Para'
import './App.css'
import Button from './Components/Button';
import Background from './Components/Background';

function App() {
  const [count, setCount] = useState(0);

  const [change, setChange] = useState("white");
  let changesButton = () => {
    if (change === 'white') {
      let changes = 'dark';
      setChange(changes);
      // console.log("Background is changed to black");
    }

    else {
      setChange('white');
      // console.log("Background is changed to white");
    }

  }


  let increButton = () => {
    let counts = count + 1;
    setCount(counts);
    console.log("Button is clicked" + counts);
  }
  let decreButton = () => {
    let deCoutns = count - 1;
    setCount(deCoutns);
    console.log("Button is clickend" + deCoutns);
  }

  return (
    <>
      <div className={change === "white" ? "white-background" : "dark-background"}>
        <Para count={count} />
        <Button handle={increButton} deHandle={decreButton} />

        <Background changesButton={changesButton} />
      </div>


    </>

  )
}

export default App
