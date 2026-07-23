import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const Headermy = () => {
    const navigate = useNavigate()
    const goToSign = () => {
        navigate("/sign-up")
    }

    const goToLogin = () => {
        navigate("/login")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
            <div className="container">

                {/* Logo */}
                <a className="navbar-brand fw-bold fs-3" href="/">
                    <span className="text-info">BBD</span>BLOGPOST
                </a>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="about-us">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="add-blog">Add Blog</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Categories
                            </a>

                            <ul className="dropdown-menu shadow border-0 rounded-3">
                                <li><a className="dropdown-item" href="/">JavaScript</a></li>
                                <li><a className="dropdown-item" href="/">React JS</a></li>
                                <li><a className="dropdown-item" href="/">Node JS</a></li>
                                <li><a className="dropdown-item" href="/">Python</a></li>
                                <li><a className="dropdown-item" href="/">Java</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="contact-us">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact-list">Contact List</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="try">Try</Link>
                        </li> */}

                    </ul>

                    {/* Right Side */}
                    <div className="d-flex align-items-center">

                        {/* <input
                            className="form-control search-box me-3"
                            type="search"
                            placeholder="Search..."
                        /> */}

                        <button className="btn btn-info text-white px-4" onClick={goToLogin}>
                            Login
                        </button>
                        &nbsp;
                        <button className="btn btn-info text-white px-4" onClick={goToSign}>
                            Sign Up
                        </button>

                    </div>

                </div>

            </div>
        </nav>

    )
}