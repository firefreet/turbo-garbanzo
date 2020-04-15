import React from 'react'
import './style.css'

function Nav() {
    return (
        <div>
            <ul className="nav justify-content-center bg-secondary">
                <li className="nav-item">
                    <p className="nav-link mb-0">Sort by...</p>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Last Name</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">First Name</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cube Number</a>
                </li>
            </ul>
        </div>
    )
}
export default Nav;
