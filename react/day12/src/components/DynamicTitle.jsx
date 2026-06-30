import React, { useEffect, useState } from 'react'

const DynamicTitle = () => {
    const [count,setCount]=useState(0)

    useEffect(()=>{
document.title=`count - ${count}`
    },[count])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  )
}

export default DynamicTitle