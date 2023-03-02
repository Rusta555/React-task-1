import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li>
                        
                        <Link to="/">HOME</Link>
                        
                        </li>
                    <li>
                        
                        <Link to="/form">Form</Link>

                        </li>
                    <li>
                        
                    <Link to="/about">About us</Link>
                        </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header