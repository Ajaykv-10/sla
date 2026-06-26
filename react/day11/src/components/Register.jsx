import React, { useState } from 'react'

export const Register = () => {
    const [resiterData,setRegisterData]=useState({name:'',mobile:"",email:'',password:''})

    const handleOnChange=(e)=>{
        setRegisterData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!resiterData.name || !resiterData.mobile || !resiterData.email || !resiterData.password){
            console.log("registereddata",resiterData)
            alert("Please fill all the fields")
            return
        }
       const userDatabase=JSON.parse(localStorage.getItem("userDatabase")) || []
       console.log("userDatabase",userDatabase)
    const isUserExist=userDatabase.find((user)=>user.email===resiterData.email || user.mobile===resiterData.mobile)
    if(isUserExist){
        alert("User already exists")
        return
    }
    userDatabase.push(resiterData)
    localStorage.setItem("userDatabase", JSON.stringify(userDatabase))
setRegisterData({name:'',mobile:"",email:'',password:''})
alert("User registered successfully")
}

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className=" bg-gray-200 min-w-md max-w-4xl p-4 rounded-md shadow-md ">
            <h1 className='text-xl font-bold mb-4'>Register User</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className="flex flex-col gap-2">
                <label htmlFor="name" className='label'>Name</label>
                <input type="text" name="name" id="name" value={resiterData.name} onChange={handleOnChange}/>
                <label htmlFor="mobile" className='label'>Mobile</label>
                <input type="text" name="mobile" id="mobile" value={resiterData.mobile} onChange={handleOnChange}/>
                <label htmlFor="email" className='label'>Email</label>
                <input type="email" name="email" id="email" value={resiterData.email} onChange={handleOnChange}/>
                <label htmlFor="password" className='label'>Password</label>
                <input type="password" name="password" id="password" value={resiterData.password} onChange={handleOnChange}/>
                </div>
                <button type='submit' className='bg-amber-400 text-black font-semibold rounded-md px-4 py-2 cursor-pointer'>Sign In</button>
            </form>
        </div>
    </div>
  )
}
