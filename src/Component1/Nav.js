import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">one</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/two">Two</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="three">three</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/four">four</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/five">five</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
