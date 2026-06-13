import { NavLink, Outlet, useNavigate } from "react-router-dom"


const Layout = () => {
  const navigate = useNavigate()
  return (<>
    <nav className="flex justify-between items-center p-4 bg-gray-200">
        <div>Logo</div>
        <div className="flex gap-4">
            <NavLink className={({ isActive }) => `${isActive ? 'bg-amber-500 text-black ' : ''} px-3 py-2 rounded`} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => `${isActive ? 'bg-amber-500 text-black ' : ''} px-3 py-2 rounded`} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => `${isActive ? 'bg-amber-500 text-black ' : ''}px-3 py-2 rounded`} to="/contact">Contact</NavLink>
        </div>
        <div>
            <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded" onClick={() => navigate('/login')}>Login</button>
            <button className="bg-green-500 text-white px-4 py-2 cursor-pointer rounded ml-2" onClick={() => navigate('/register')}>Register</button>
        </div>
    </nav>
    <Outlet/>
</>
  )
}

export default Layout