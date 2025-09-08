import React from 'react'

function Navbar() {
    return (
        <nav
            class="navbar navbar-expand-lg border-bottom fixed-top"
            style={{ backgroundColor: "#FFF" }}
        >
            <div class="container p-2">
                <a class="navbar-brand" href="/">
                    <img
                        src="media/images/logo1.png"
                        style={{ width: "25%" }}
                        alt="Logo"
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="signup">
                                    Signup
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="about">
                                    About
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="products">
                                    Product
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="pricing">
                                    Pricing
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="support">
                                    Support
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href={process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001"} target="_blank" rel="noopener noreferrer">
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;