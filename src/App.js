import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
// import Button from "./Button.";

function Button({ text, m_unit, handleChange }) {
  return (
    <button onClick={handleChange} style={{ margin: m_unit }}>
      {text}
    </button>
  );
}

//react conditional
function FoodChoice({ choice }) {
  //using tertairy conditional
  // return choice ? <h3>"this is a apple "</h3> : <h4>"this is a pineapple"</h4>;

  if (choice) {
    return <h3>"this is a apple "</h3>;
  } else {
    <h4>"this is a pineapple"</h4>;
  }
}

//react list
function Foods({ foods }) {
  foods.map((food, index) => {
    return (
      <ul key={index}>
        <li>{food}</li>
      </ul>
    );
  });
}

function App() {
  let [count, setCount] = useState(1);
  const [value, changeFunction] = useState("boy");

  //when a component mounts or enters the dom
  useEffect(() => {
    console.log("component is mounted ");
  }, []);

  //when a state is mutated inside the dom
  useEffect(() => {
    console.log("component state(value) is updated ");
  }, [value]);

  //when the component leaves the dom
  useEffect(() => {
    return () => {
      //code
      console.log("component is unmounted ");
    };
  }, []);

  setInterval(() => {
    setCount(count++);
  }, 2000);
  function handleChange() {
    changeFunction("girl");
  }
  const foods = ["apple", "paw-paw", "coconut"];
  return (
    <div className="App">
      {/* <div>{count}</div> */}
      <div>{value}</div>
      <Button
        text="click me to change"
        m_unit="4px"
        handleChange={handleChange}
      ></Button>
      <p>
        For more info!!
        <Button text="click me 1" m_unit="10px"></Button>
        <Button text="click me 2" m_unit="20px"></Button>
        <Button text="click me 3" m_unit="5px"></Button>
        <Button text="click me 4" m_unit="3px"></Button>
      </p>

      <FoodChoice choice={false}></FoodChoice>

      <Foods foods={foods}></Foods>
    </div>
  );
}

export default App;
