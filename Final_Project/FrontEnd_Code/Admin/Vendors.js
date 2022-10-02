import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios,{ Axios } from "axios";

export default function Vendors()
{

  const [allvendors, setAllvendors] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/vendor/showall')
      .then(res => {
        console.log(res)
        setAllvendors(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])
    return(
<body>
    
    
    <h1 class="text-center"> Vendors</h1>
    <br/>
    <table class="table">
        <thead>
        <tr class="tablecolor">
          <th>Vendor Id</th>
          <th>Vendor name</th>
          <th>Contact</th>
          <th>Email</th>
          
          <th>Booking Id</th>
         
          
        </tr>
        </thead>
        <tbody>
                  {
                   allvendors.map(
                     allvendors =>
                        <tr key={allvendors.venodrId}>
                          <td>{allvendors.vendorId}</td>
            
                          <th scope="row">{allvendors.vendorName}</th>
                          
                          <td>{allvendors.vendorContactNo}</td>
                         
                          <td>{allvendors.vendorEmail}</td>
                         
                          <td>{allvendors.vendorBookingId}</td>
                          
                        </tr>
                    )
                  }
                </tbody>
    </table> 
   
  </body>)
}