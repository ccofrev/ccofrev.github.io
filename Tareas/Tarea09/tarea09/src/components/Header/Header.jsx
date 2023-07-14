import React from 'react'

export default function Header() {
  return (
        <>
        <header className="navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top navbar-light" style={{backgroundColor: "red"}}>
                <div className="container-fluid">

                    <a className="navbar-brand" href="../../#">
                        <i className="fa-solid fa-cat fa-2x" style={{color: "#000000"}}></i>
                    </a>
                    <a className="navbar-brand" href="#">Tarea 9</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Menu 1</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
        </>
  )
}
