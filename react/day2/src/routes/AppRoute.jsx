import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import Login from "../pages/Login"
import Layout from "../components/Layout"
import Register from "../components/Register"


const AppRoute = () => {
  return (
    <>
    <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
    </>
  )
}

export default AppRoute