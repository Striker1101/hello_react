import "./App.css";
import Home from "./pages/Home";
import RPS from "./pages/RPS";
import TodoApp from "./pages/TodoApp";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rps" element={<RPS />} />
        <Route path="/td" element={<TodoApp />} />
      </Routes>
    </>
  );
}

export default App;
