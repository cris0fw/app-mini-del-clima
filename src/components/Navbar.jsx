import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'> 
        <nav className='nav'>
            <div className='app_andlogo'>
                <Link className='logo'>
                    <img className='logo__img' src={require("../img/logo.jpg")} alt="app logo clima" />
                <p className='app__logo'>App weather</p>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar