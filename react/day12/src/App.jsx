import React from 'react'
import CounterUpdate from './components/CounterUpdate'
import DynamicTitle from './components/DynamicTitle'
import Timer from './components/Timer'

const App = () => {
  return (
    <div>
      <CounterUpdate/>
      <DynamicTitle/>
      <Timer/>
    </div>
  )
}

export default App