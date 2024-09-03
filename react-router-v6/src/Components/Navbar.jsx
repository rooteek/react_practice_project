import React from 'react'
import { Link , NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className='flex justify-center items-center gap-12 h-10 font-bold text-2xl'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/users/rut'>rut</NavLink>
        <NavLink to='/users/set'>set</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
