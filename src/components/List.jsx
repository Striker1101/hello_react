import React from "react";

export default function List() {
  const arr = ["goat", "dog", "cat", "fish", "lion"];
  return (
    <ul>
      {arr.map((animal, index) => {
        return <li key={index}>{animal}</li>;
      })}
    </ul>
  );
}
