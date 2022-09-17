
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function VenueSelection() {

    let userId=useSelector((e)=>{
       return e.userId
    });
    let navigate=useNavigate();
    let [venueid,setVenueid]=useState();
    let [date,setDate]=useState();
    let [time,setTime]=useState();
    let [venuedata,setVenuedata]=useState([])
    let uname=useSelector((e)=>{
        return e.uname
    });
    let password=useSelector((e)=>{
        return e.password
    });
    let name=useSelector((e)=>{
        return e.username
    });


    console.log(uname)
    console.log(name);

    useEffect(()=>{
        if(uname==="")
        {
          
            navigate("/SignInUser")
            alert("User Should Login First")

        }
        else{
            fetch("http://localhost:8080/venue/showvenues",{"method":"GET"
        }).then((response)=>{return response.json()}).then((jsobj)=>{
            
            let str=" "
            setVenuedata([...venuedata,jsobj.map((e,key)=>{
                return <option key={key} value={e.venueId}>{e.venueName.toUpperCase()} &nbsp;  &nbsp; &nbsp;Cost:{e.venueCost}  &nbsp; &nbsp;Rating:{e.venueRating}</option>
    
            })]) 
            
        })
        }

    },[])

    function handlerVenue()
    {
        if(venueid===1)
        {
            axios.post("",{
                
            })

        }
    }




    return (
        <section id="book-a-table" class="book-a-table">
            <div class="container">

                <div class="section-title">
                    <h2>Book an<span>Venue..</span></h2>
                    <p>Exclusive events, priceless memories</p>
                </div>

                <div class="php-email-form" >
                    <div class="row">
                        <h4>Welcome {name}</h4>
                        <br/><hr color="black"/>
                    <label>Choose A Venue Date:</label>
                        <div class="col-lg-4 col-md-6 form-group mt-3">
                            <input type="date" name="date" class="form-control" id="date" placeholder="Date" onBlur={(e)=>{setDate(e.target.value)}} />
                            <div class="validate"></div>
                        </div><br/> <br/> <hr/>
                        <label>Choose A Venue Time:</label>
                        <div class="col-lg-4 col-md-6 form-group mt-3">
                            <input type="time" class="form-control" name="time" id="time" placeholder="Time" onBlur={(e)=>{setTime(e.target.value)}} />
                            <div class="validate"></div>
                        </div><br/> <br/> <hr/>


                        <label for="address">Choose A Venue:</label><br/>

                        <select name="address" id="addr" onChange={(e)=>{setVenueid(e.target.value)}}>{venuedata} </select>

                    </div><br/> <br/> <br/> <hr/>
                    <div class="mb-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                    </div>
                    <div class="text-center"><button type="submit" onClick={handlerVenue}>Next</button></div>
                </div>

            </div>
        </section>
    )
}
