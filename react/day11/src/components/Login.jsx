import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = props => {
  const [loginData,setLoginData]=useState({email:'',password:''})
  const navigate=useNavigate()
const handleOnChange=(e)=>{
    setLoginData((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()

    const userData=JSON.parse(localStorage.getItem("userDatabase")) ||[]
    const user=userData.find((user)=>(user.email===loginData.email && user.password===loginData.password))
    if(!user){
      alert("No user found")
    }
    localStorage.setItem("auth",JSON.stringify(user))
    navigate("/")
    // Handle login logic here
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 min-w-md max-w-xl mx-auto'>
        <div className="flex flex-col gap-2">
           <label htmlFor="email" className='label'>Email</label>
                <input type="email" name="email" id="email" value={loginData.email} onChange={handleOnChange}/>
                <label htmlFor="password" className='label'>Password</label>
                <input type="password" name="password" id="password" value={loginData.password} onChange={handleOnChange}/>
                </div>
                <button type='submit' className='bg-amber-400 text-black font-semibold rounded-md px-4 py-2 cursor-pointer'>Login</button>
      </form>
    </div>
  )
}

export default Login