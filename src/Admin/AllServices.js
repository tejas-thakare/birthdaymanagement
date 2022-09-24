import axios,{ Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function AllServices()
{

  const [allusers, setAllusers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/booking/allbooking')
      .then(res => {
        console.log(res)
        setAllusers(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])
    return(

    
   <div class="php-email-form">
    <h1 class="text-center">Users</h1>
    <br/>
    <table class="table">
        <thead>
        <tr class="tablecolor">
          <th>Booking Id</th>
          <th>Booking Date</th>
          <th>Booking UserId</th>
          <th>Venue Cost</th>
          <th>Package Cost</th>
          <th>Total Cost</th>
          
          
        </tr>
        </thead>
        <tbody>
                  {
                    allusers.map(
                      allusers =>
                        <tr key={allusers.booking_number}>
                          <th>{allusers.booking_number}</th>
                          <th scope="row">{allusers.bookingDate}</th>
                          <td>{allusers.bookingUserId}</td>
                          <td>{allusers.venueCost}</td>
                          <td>{allusers.packageCost}</td>
                          <td>{allusers.bookingTotalAmount}</td>
                        </tr>
                    )
                  }
                </tbody>
    </table> 
        
        
            </div>
 )
}