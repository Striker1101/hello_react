import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import { Routes, Route } from "react-router-dom";
import Nav from "./pages/utility/Nav";
import Footer from "./pages/utility/Footer";
import RPS from "./pages/RPS";
import TodoApp from "./pages/TodoApp";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" index element={<p>this is the homepage</p>} />
        <Route path="/function" element={<FunctionalComponent />} />
        <Route path="/class" element={<ClassComponent />} />
        <Route path="/rps" element={<RPS />} />
        <Route path="/td" element={<TodoApp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
