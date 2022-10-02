import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

 
function NavBar() {

  let navigate=useNavigate();
  function handlerLogin()
  {
    navigate('/SignInUser')
  }


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
                       <Link to="/about">About</Link>
                     
                       
                       <Link className="nav-Link scrollto " to="/gallery">Gallery</Link>
                     

                      <Link to="/contacts">Contact</Link>

                      <li class="dropdown"><Link to="/"><span>Sign-in</span> <i class="bi bi-chevron-right"></i></Link>
                      <ul>
                    <li><Link to="/SignInUser">User</Link></li>
                    <li><Link to="/SignInVendor">Vendor</Link></li>
                    <li><Link to="/SignInAdmin">Admin</Link></li>
                  </ul>
                 </li>
                 </ul>
               
                <i className="bi bi-list mobile-nav-toggle"></i> 
                 </nav>
                 <a onClick={handlerLogin} className="book-a-table-btn scrollto" >Book an Event</a>
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

export default NavBar;
