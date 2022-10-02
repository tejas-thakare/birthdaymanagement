import axios,{ Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function Users()
{

  const [allusers, setAllusers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/user/getallusers')
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
          <th>User Id</th>
          <th>User First name</th>
          <th>User Last name</th>
          <th>Email</th>
          <th>Contact</th>
          
          
        </tr>
        </thead>
        <tbody>
                  {
                    allusers.map(
                      allusers =>
                        <tr key={allusers.userId}>
                          <th scope="row">{allusers.userId}</th>
                          <td>{allusers.userFirstName}</td>
                          <td>{allusers.userLastName}</td>
                          <td>{allusers.userEmail}</td>
                          <td>{allusers.userContactNo}</td>
                        </tr>
                    )
                  }
                </tbody>
    </table> 
        
        
            </div>
 )
}