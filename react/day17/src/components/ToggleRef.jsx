import React, { useRef } from 'react'

const ToggleRef = () => {
    const buttonRef=useRef(true);
    const textRef=useRef(null);
    const handleClick=()=>{
         buttonRef.current=!buttonRef.current;
         if(buttonRef.current){
            textRef.current.style.display="block";
         }else{
            textRef.current.style.display="none";
         }
    }
  return (
    <div>
        <button className='bg-red-400 rounded px-3 py-2 border' ref={buttonRef} onClick={handleClick}>Toggle</button>
        <p ref={textRef}>Hi Ajay</p>
    </div>
  )
}

export default ToggleRef