import { useState } from "react";


const withIteration = (Component) => {
    return (props)=>{
const[color,setColor]=useState("");
const [number,setNumber]=useState(0);

  return (
    <div>
        <div>
        <input type="text" value={color} placeholder="Enter Color" value={color} onChange={(e)=>setColor(e.target.value)} />
        </div>
         <div>
        <input type="number" value={number} placeholder="Enter Number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        </div>
        <Component {...props} numbers={number} color={color} />
    </div>
  )
    }}

export default withIteration