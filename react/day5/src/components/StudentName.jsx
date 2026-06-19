import { useState } from "react";

function Student() {
  const [studentName, setStudentName] = useState("Sudhan");

  const changeName = () => {
    setStudentName("Ravi");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Name Update</h1>

      <h2>Student Name: {studentName}</h2>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}

export default Student;