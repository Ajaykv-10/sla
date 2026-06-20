import { useState } from "react";


const ArrayObjectComponent = () => {
    const [employees, setEmployees] = useState([
  { id: 1, name: "Ajay", department: "HR", salary: 30000 },
  { id: 2, name: "Ravi", department: "IT", salary: 40000 },
  { id: 3, name: "Kumar", department: "Sales", salary: 35000 },
]);
  return (
    <div>{employees.map((employee) => (
      <div key={employee.id}>
        <p>Name: {employee.name}</p>
        <p>Department: {employee.department}</p>
        <p>Salary: {employee.salary}</p>
        <button onClick={() => setEmployees(employees.map(emp => emp.id === employee.id ? { ...emp, salary: emp.salary + 5000,name:"Kishore",department:"Marketing" } : emp))}>Edit</button>
      </div>
    ))}</div>
  )
}

export default ArrayObjectComponent