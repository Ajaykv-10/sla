import React from 'react'
import Login from '../components/Login'
import { Register } from '../components/Register'
import Home from '../components/Home'

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