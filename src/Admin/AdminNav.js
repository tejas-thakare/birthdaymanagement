import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";


 
function AdminNav() {
    return (
        <>
          <header id="header" className="fixed-top d-flex align-items-center header-transparent">
              <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
     
                 <div className="logo me-auto">
                      <h1><Link to="/Home" >Fiesta</Link></h1>
               </div>
                 <nav id="navbar" className="navbar order-last order-lg-0">

             <ul>
     
                      <Link  to="/Home">Home</Link>
                       <Link to="/Requests">Requests</Link>
                       
                     

                      <Link to="/Users">Users</Link>

                      <Link to="/Vendors">Vendors</Link>
              </ul>
                <i className="bi bi-list mobile-nav-toggle"></i> 
                 </nav>
                
                 </div>
         </header>  
                     

</>)
}

export default AdminNav;
