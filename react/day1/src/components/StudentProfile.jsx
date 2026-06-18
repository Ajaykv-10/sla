function StudentProfile() {
  const student = {
    name: "Ajay",
    course: "React Development",
    city: "Puducherry",
    institute: "SLA Institute",
  };

  return (
    <div className="border p-3">
      <h2>Student Profile</h2>
      <hr></hr>
      <p>
        <strong>Student Name:</strong> {student.name}
      </p>
      <p>
        <strong>Course:</strong> {student.course}
      </p>
      <p>
        <strong>City:</strong> {student.city}
      </p>
      <p>
        <strong>Institute:</strong> {student.institute}
      </p>
    </div>
  );
}

export default StudentProfile;
