import React from 'react'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-white py-3 border-bottom">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center fw-bold" href="#">
                    <span class="text-warning fs-4">1a</span
                    ><span class="text-dark fs-4">cre<span class="text-secondary">.in</span></span>
                </a>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">All Lands</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Developers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Lakes</a>
                        </li>
                        <li class="nav-item position-relative">
                            <a class="nav-link text-dark" href="#">Premium</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Services</a>
                        </li>
                    </ul>

                    <div class="d-flex gap-2">
                        <button
                            class="btn btn-outline-secondary rounded-pill px-3 fw-bold"
                            type="button"
                        >
                            Sell your Land
                        </button>
                        <button
                            class="btn btn-warning rounded-pill px-4 fw-bold"
                            type="button"
                        >
                            Login &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar