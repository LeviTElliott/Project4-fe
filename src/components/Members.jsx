import React from "react";

export default function Fur({ doggs }) {
  return (
    <ul>
      {doggs.map((dog, i) => (
        <li key={i}>{dog.breedName}</li>
      ))}
    </ul>
  );
}