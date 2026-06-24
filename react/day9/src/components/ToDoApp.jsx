import React, { useState } from 'react'

const ToDoApp = () => {
    const [employee,setEmployee]=useState({name:'', city:'', company:''})
    const [employeeList,setEmployeeList]=useState([])
    const[editIndex,setEditIndex]=useState(-1)
   function handleEdit(index,emp){
    setEmployee(emp)
    setEditIndex(index)
   }
function handleDelete(index){
    const updatedList = employeeList.filter((_, i) => i !== index);
    setEmployeeList(updatedList);}
    function handleChange(e){
        const {id,value}=e.target
        setEmployee({...employee,[id]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        if(employee.name && employee.city && employee.company){
            if(editIndex !== -1){
                const updatedList = [...employeeList]
                updatedList[editIndex] = employee
                setEmployeeList(updatedList)
                setEditIndex(-1)
            } else {
                setEmployeeList([...employeeList, employee])
               
            }
             setEmployee({name:'', city:'', company:''})
        }
    }
  return (
    <div className="p-5">

        <form className="flex flex-col gap-4-lg sha w-1/3 mx-auto  bg-gray-100 p-4 roundeddow-md" onSubmit={handleSubmit}>
            <h2 className="text-center font-bold mb-4">Employee Form</h2>
            <div className="label-input">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={employee.name} placeholder="Enter Name" onChange={handleChange} />
            </div>
             <div className="label-input">
             <label htmlFor="city">City:</label>
            <input type="text" id="city" value={employee.city} placeholder="Enter City" onChange={handleChange} /></div>
             <div className="label-input">
             <label htmlFor="company">Company:</label>
            <input type="text" id="company" value={employee.company} placeholder="Enter Company" onChange={handleChange} /></div>
           <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={handleSubmit}>{`${editIndex !== -1 ? 'Update' : 'Add'}`}</button> 
        </form>
        <div>
            {employeeList.map((emp, index) => (
                <div key={index} className="border p-2 mb-2">
                    <p><strong>Name:</strong> {emp.name}</p>
                    <p><strong>City:</strong> {emp.city}</p>
                    <p><strong>Company:</strong> {emp.company}</p>
                    <button onClick={() => handleEdit(index,emp)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ToDoApp