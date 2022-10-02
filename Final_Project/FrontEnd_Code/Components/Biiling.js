import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";



export default function Billing()
{
    let navigate=useNavigate();

    let [bookPassword,setBookPassword]=useState("");
    let [bill,setBill]=useState();
    let userid=useSelector((e)=>{
        return e.userid;
    })

    let venuecost=useSelector((e)=>{
        return e.venuecost;
    })
    let packagecost=useSelector((e)=>{
        return e.packagecost;
    })

    let username=useSelector((e)=>{
        return e.username
    })

    let password=useSelector((e)=>{
        return e.password;
    })

    let bookingdate=useSelector((e)=>{
        return e.date;
    })


    function handlerBilling()
    {
        
      
       let str=<><tr><th>User Id</th><th>User Name</th><th>Date Of Event</th><th>Venue Cost</th><th>Package Cost</th><th>Total Cost</th></tr>
       <tr><td>{userid}</td><td>{username}</td><td>{bookingdate}</td><td>{venuecost}</td><td>{packagecost}</td><td>{venuecost+packagecost}</td></tr>
       </>

       setBill(str)
    
    }

useEffect(()=>{
   
    handlerBilling();
    
},[])


function handlerBooking()
{
    if(password==="")
    {
        alert("Mandatory To Enter Password To Confirm Booking")
    }
    if(password===bookPassword)
    {
        alert("done")
        axios.post("http://localhost:8080/booking/addbooking",{
            bookingUserId:userid,
            bookingDate:bookingdate,
            venueCost:venuecost,
            packageCost:packagecost,
            bookingTotalAmount:venuecost+packagecost
           
    
         
        }).then((e)=>{
            if(e.data.result==="correct")
            {
                navigate("/Final")
            }
            else{
                alert("Service Is Temporarily Unavailble")
            }
        })
       
    }
    else{
        alert("Incorrect Password")
    }
    
}






    return(
        <>
     
        <section id="book-a-table" class="book-a-table">
            <div class="container">

                <div class="section-title">
                    <h2>Billing<span>Information..</span></h2>
                    <p>Exclusive events, priceless memories</p>
                    <table align="center" className="table">{bill}</table>

              <center><div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <label>Enter Password To Confirm Booking</label>
              <input type="password" className="form-control" name="email" id="email" placeholder="Your Password" onBlur={(e)=>{setBookPassword(e.target.value)}} required={true} />
              <div className="validate"></div>
            </div></center>

                    <div class="text-center"><button type="submit"className="aaa" onClick={handlerBooking}>Confirm</button></div>
                    
                </div></div></section></>
      
      

       
 

    )
}