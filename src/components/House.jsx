import React from "react";

import Fur from "./Members";

export default function House({ doggs }) {
  return (
    <div>
      <h1>{doggs.coat}</h1>
      <Fur newDog={doggs.breedName} />
    </div>
  );
}