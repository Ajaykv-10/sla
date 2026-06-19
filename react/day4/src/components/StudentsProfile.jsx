import { useState } from "react";

function Students() {
  const [students] = useState([
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Peter",
      age: 22,
    },
    {
      id: 3,
      name: "Sam",
      age: 21,
    },
  ]);

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>ID: {student.id}</h3>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Students;