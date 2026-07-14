import React, { useMemo, useState } from 'react'
import { products } from './data/data'
import './App.css'

const App = () => {
const [data,setData]=useState(products);
const [query,setQuery]=useState('');
const [theme,setTheme]=useState('light');
console.log("data",data)

const filteredData=useMemo(()=>{
  console.log("Filter runs")
  return data.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase()))}, [data, query])

const themeMode=theme==='light'?'light':'dark';

  return (
    <div className='app'>
      <input className='search' type="text" placeholder="search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{themeMode}</button>
      <div>
      {filteredData.map((item) => {
        return (
          <div key={item.id} className='card'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App