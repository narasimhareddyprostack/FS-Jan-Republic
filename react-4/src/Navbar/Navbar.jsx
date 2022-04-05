import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/home" class="navbar-brand">React Hook Example</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list"><Link className="nav-link" to="/message">Message</Link> </li>
                    <li className="nav-list"><Link className="nav-link" to="/order">Order</Link> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
