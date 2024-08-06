import { useEffect, useState } from "react";

export default function FunctionalComponent() {
  const fruits = ["apple ", "orange", "mango", "paw-paw"];
  function add(num1, num2) {
    return num2 + num1;
  }
  const url = process.env.React_App_JSONPLACEHOLDER;
  const [toggle, setToggle] = useState(false);
  const [todos, setTodos] = useState(null);
  //mount life cycle
  useEffect(() => {
    async function getter() {
      const data = await getContent();
      setTodos(data);
      console.log(data);
    }

    getter();
  }, []);

  async function getContent() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/1`
      );
      const result = await response.json();
      return result;
      // console.log(result);
    } catch (error) {
      console.error("error log", error);
      return null;
    }
  }

  return (
    <>
      <div>
        This is a Functional component {add(45, 90)}
        <ul>
          {fruits.map((fruit, index) => {
            return <li key={index}>{fruit}</li>;
          })}
        </ul>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Submit" : "Update"}
        </button>
      </div>
      <div></div>
    </>
  );
}
