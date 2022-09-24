import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Services() {

 
  let uname=useSelector((e)=>{
    return e.uname;
  })


  let password=useSelector((e)=>{
    return e.password;
  });

  let navigate=useNavigate();
  const [services, setServices] = useState([])
  const [alldetails, setAlldetails] = useState([])
  let [result,SetResult]=useState([])

  useEffect(() => {
    if(uname==="")
    {
    navigate("/SignInVendor")
    alert("Vendor Should Login First")
    }
    
    axios.post("http://localhost:8080/vendor/getdetails",{
      vendorLoginId:uname,
      vendorPassword:password


    }).then((e)=>{
     
      setServices([...services,e.data]);
    });
  

  }, [])

  function handlerBookingDetails()
  {
    let a=services.at(0)
    let bookingId=a.vendorBookingId;
    console.log(bookingId)
    
    axios.post("http://localhost:8080/vendor/getresult",{

    vendorBookingId:bookingId
     
    }).then((e)=>{
      console.log(e.data)

      setAlldetails([...alldetails,e.data])

     SetResult([...result,alldetails.map((e,key)=>{
        return <ul key={key}><li><b>User Id:</b>{e.userId}</li>
        <li><b>User Name:</b>{e.userName}</li>
        <li><b>User Contact:</b>{e.contact}</li>
        <li><b>User Email:</b>{e.email}</li>
        <li><b>Event Date:</b>{e.date}</li>
        <li><b>Amount To Be Received:</b>{e.amount}</li>
        </ul>


        
      })])//End Of Map
      console.log(result)

    })//End Of Then



  
  }

  return (
    < div >
      <section id="book-a-table" class="book-a-table">
        <div class="container">

          <div class="section-title">
            <h2>Event<span>Services</span></h2>
          </div>

          <div class="php-email-form" >

            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Your Id</th>
                  <th scope="col">Your Name</th>
                  <th scope="col">Your Contact</th>
                  <th scope="col">Your Email</th>
                  <th scope="col">Current Booking</th>


                </tr>
              </thead>
              <tbody>
                  {
                    services.map(
                      service =>
                        <tr key={service.id}>
                          <th scope="row">{service.vendorId}</th>
                          <td>{service.vendorName}</td>
                          <td>{service.vendorContactNo}</td>
                          <td>{service.vendorEmail}</td>
                          <td><b>BOOKING ID:</b>{service.vendorBookingId}<br/><p><button type="submit" onClick={handlerBookingDetails}>More Details</button></p>
                          <div>{result}</div>
                          
                          </td>
                        </tr>
                    )
                  }
                </tbody>
            </table>
            <div class="text-center"><Link to="/Dashboard"><button type="submit">Back</button></Link></div>
          </div>

        </div>
      </section>
    </div>
  )
}

