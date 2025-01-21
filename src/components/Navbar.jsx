import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>medicare</h1>
      </div>
      <div >
        <ul className="links">
            <li><Link to = '/' className='link'>Home</Link></li>
            <li><Link to = '/About' className='link'>About</Link></li>
            <li><Link to = '/Contact' className='link'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
