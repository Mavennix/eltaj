import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light pt-3">
            <Link class="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Solutions</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Products</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Industries</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Blog</Link>
                    </li>

                    <li className="ml-md-4 ml-0">
                        <button className="btn btn-outline-primary rounded-0 text-center px-4">
                            Book a free demo
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Menu
