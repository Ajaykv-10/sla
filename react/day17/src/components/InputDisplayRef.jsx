import React, { useRef } from 'react'

const InputDisplayRef = () => {
    const inputRef=useRef(null);
    const displayRef=useRef(null);

    function handleChange(){
        displayRef.current.innerText=inputRef.current.value;
    }
  return (
    <div>
        <input  type="text" ref={inputRef} placeholder="Enter text" onChange={handleChange}/>
        <p ref={displayRef}></p>
    </div>
  )
}

export default InputDisplayRef