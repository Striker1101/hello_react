import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/rps"> RPS Game</Link>
        </li>
        <li>
          <Link to="/td"> Todo App</Link>
        </li>
      </ul>
    </div>
  );
}
