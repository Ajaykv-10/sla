import { useState } from "react"


const ObjectComponent = () => {
    const [student,setStudent]=useState({name:"Ajay",age:25,company:"TCS"})

  return (<>
    <div>
        <p>Name : {student.name}</p>
        <p>Age : {student.age}</p>
        <p>Company : {student.company}</p>
    </div>
    <button onClick={()=>setStudent({age:26,name:"Ravi",company:"Infosys"})}>Update Age</button>
  </>)
}

export default ObjectComponent