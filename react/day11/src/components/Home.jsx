import React, { useEffect, useState } from 'react'

const Home = () => {
const [CurrentUser,setCurrentUser]=useState({name:""})

useEffect(()=>{
  const userData=JSON.parse(localStorage.getItem("auth"))
  setCurrentUser(userData)


},[])

  return (
    <div>Welcome {CurrentUser.name}</div>
  )
}

export default Home