import { useState } from "react";

function UseStateComponent() {
  const [name, setName] = useState("John");

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default UseStateComponent;