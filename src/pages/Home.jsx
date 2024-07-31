import React from "react";
import Nav from "./utility/Nav";
import { useNavigate, Link } from "react-router-dom";
export default function Home() {
  // initialise useNavigate
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/rps");
  }, 2000);
  return (
    <div>
      <Nav />
      <button>
        <Link to="/rps">RPS Route</Link>
      </button>

      <button>
        <Link to="/td">Todo App Route</Link>
      </button>
    </div>
  );
}
