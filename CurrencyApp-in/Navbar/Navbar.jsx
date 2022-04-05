import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/home" className="navbar-brand">React Rendering</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/myapp" className="nav-link">MyWork</Link></li>
                        <li className="nav-item"><Link to="/capp" className="nav-link">CAPP</Link></li>
                        <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
                        <li className="nav-item"><Link to="/service" className="nav-link">Services</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
