import React, { useEffect, useState } from 'react'

const CounterUpdate = () => {

    const [count,setCount]=useState(0);
 useEffect(()=>{
console.log("updated count",count)
 },[count])
 console.log("updated count outside effect",count)
  return (
    <div>
        <p>Count ={count}</p>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>
  )
}

export default CounterUpdate