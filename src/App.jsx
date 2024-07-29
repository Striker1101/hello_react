import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import FormTodo from "./components/FormTodo";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
function App() {
  const [toggleForm, setToggleForm] = useState(true);
  const [todos, setTodos] = useState([
    { title: "lorem title", desc: "lorem desc", pior: "lorem priority" },
  ]);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    pior: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, formData]); // Create a new array with the existing todos and the new todo
    setFormData({ title: "", desc: "", pior: "" }); // Reset the form data
    console.log(todos);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
    <Container>
      <div style={{ display: "flex", gap: "10px" }} className="row ">
        <h1 className="col">Todo List </h1>
        <Button
          onClick={() => {
            setToggleForm(!toggleForm);
          }}
        >
          {toggleForm ? "Hide Form" : "Show Form"}{" "}
        </Button>
      </div>
      <Todos todos={todos} />
      {toggleForm ? (
        <FormTodo
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
    </Container>
  );
}

export default App;
