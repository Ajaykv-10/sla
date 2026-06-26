import React from 'react'
import Login from '../components/Login'
import { Register } from '../components/Register'
import Home from '../components/Home'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  )
}

export default AppRoutes