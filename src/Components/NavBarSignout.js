import React from "react";
import { Link } from "react-router-dom";

export default function NavBarSignout(){
    return(
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <div className="logo me-auto">
                        <h1><Link to="index.html" >Fiesta</Link></h1>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-a scrollto active" to="/Home">Home</Link></li>
                            <li><Link className="nav-a scrollto " to="/Home">Sign-out</Link></li>
                            <li><Link className="nav-a scrollto " to="/Gallery">Gallery</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
            )
}