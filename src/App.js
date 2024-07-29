import { useState } from "react";
import DisplayCount from "./DisplayCount";
import LifeCycle from "./LifeCycle";
import List from "./List";
import "./App.css";
import Button from "react-bootstrap/Button";
function App() {
  let [count, setCount] = useState(0);
  function handleCount() {
    setCount(++count);
    console.log(count);
  }

  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
    setColor("red");
  }

  const [color, setColor] = useState("white");

  const buttonStyle = { color: color, backgroundColor: "blue" };
  return (
    <>
      <button onClick={handleCount}>Increment Count</button>
      <DisplayCount count={count}></DisplayCount>

      <div>{toggle ? <LifeCycle></LifeCycle> : "unmounted"}</div>
      <button style={buttonStyle} onClick={handleToggle}>
        {" "}
        Click to Toggle
      </button>
      <List></List>
      <Button>Click Me</Button>
    </>
  );
}

export default App;
