import  { useState } from "react";

function Fruits() {
  const [fruits] = useState([
    "Apple",
    "Banana",
    "Mango",
    "Orange",
  ]);

  return (
    <div>
      <h2>Fruits List</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;