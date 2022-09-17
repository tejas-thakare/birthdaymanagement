import React from "react";

export default function Dashboard()
{
    return(
    < div className="carousel-item active" >
    <header id="header" className="fixed-top d-flex align-items-center header-transparent"> 
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <div className="logo me-auto">
                    <h1><a to="index.html" >Dashboard</a></h1>
                </div>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                    <li><a className="nav-a scrollto active" to="/hero">Dashboard</a></li>
                        <li><a className="nav-a scrollto active" to="/hero">Services</a></li>
                        <li><a className="nav-a scrollto " to="/about">Sign-out</a></li>
                    </ul>
                    
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                
            </div>
            </header>

        <body style={{backgroundImage: 'url("img/Dashboard.jpg")'}}>
    <div class="table-responsive">
    
        <table class="table table-striped table-sm"  >
            <thead>
                <tr>
                    <th scope="col">Event ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Client </th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Package</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1,001</td>
                    <td>1/05/2022</td>
                    <td>MR.tushar</td>
                    <td>987654321</td>
                    <td>platinum</td>
                    <td>800000</td>
                </tr>
                <tr>
                    <td>1,002</td>
                    <td>1/05/2022</td>
                    <td>MR.ram</td>
                    <td>987654321</td>
                    <td>silver</td>
                    <td>500000</td>
                </tr>
                <tr>
                    <td>1,003</td>
                    <td>1/05/2022</td>
                    <td>MR.rahul</td>
                    <td>987654321</td>
                    <td>gold</td>
                    <td>600000</td>
                </tr>
            </tbody>
        </table>
        <center> <a href="sidebar.html" ><button type="button" class="btn btn-secondary btn-lg">BACK</button></a></center>
    </div>
    </body>
    </div>

    )
}