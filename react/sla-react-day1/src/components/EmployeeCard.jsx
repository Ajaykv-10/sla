function EmployeeCard() {
  const employee = {
    name: "Ajay",
    id: "EMP101",
    department: "Frontend Development",
    salary: 50000,
  };

  return (
    <div className="border p-3">
      <h2>Employee Details</h2>
      <hr></hr>
      <p><strong>Employee Name:</strong> {employee.name}</p>
      <p><strong>Employee ID:</strong> {employee.id}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Salary:</strong> ₹{employee.salary}</p>
    </div>
  );
}

export default EmployeeCard;