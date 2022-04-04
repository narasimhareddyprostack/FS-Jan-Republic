import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="/home" className="navbar-brand">React Rendering</a>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="/home" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="/about" className="nav-link">About Us</a></li>
                        <li className="nav-item"><a href="/service" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
