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
     

                     
                      
                      <Link to="/Home">Sign Out</Link>
                      <Link  to="/Allbookings">Bookings</Link>
                     
                      
                      <Link to="/Users">Users</Link>

                      <Link to="/Vendors">Vendors</Link>
                      
               </ul>
                <i className="bi bi-list mobile-nav-toggle"></i> 
                 </nav>
                
                 </div>
         </header>  
                     

</>

   
   


      




                                      
        //                 <li><Link className="nav-Link scrollto " to="/chefs">Packages</Link></li> 
        //                <li><Link className="nav-Link scrollto " to="/gallery">Gallery</Link></li>
        //               <li><Link className="nav-Link scrollto " to="/contact">Contact</Link></li>
        //                  <li class="dropdown"><Link href="#"><span>Sign-in</span> <i class="bi bi-chevron-right"></i></Link>
        //          <ul>
        //            <li><Link href="#">User</Link></li>
        //            <li><Link href="#">Vender</Link></li>
        //            <li><Link href="#">Admin</Link></li>
        //          </ul>
        //        </li> 
        //              </ul>
   
                   
        //            <i className="bi bi-list mobile-nav-toggle"></i> */}
        //          </nav>
        //          <Link to="/book-a-table" className="book-a-table-btn scrollto">Book an Event</Link>
        //      </div>
        //  </header>
    )
}

export default AdminNav;
