import React from "react";
import Home from "./pages/Home";
import RPS from "./pages/RPS";
import TodoApp from "./pages/TodoApp";
import { Routes, Route } from "react-router-dom";

export default function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
