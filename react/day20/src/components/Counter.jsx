import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {
const {count, increase, decrease}=useCounter()
    const counterStyle={
        display: 'flex',
        gap: '10px',
    }
  return (
    <div >
        <div style={counterStyle}>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
        </div>
        <p>{count}</p>
    </div>
  )
}

export default Counter