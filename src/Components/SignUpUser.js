import React, { useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
export default function Register(){

  let [fname,setFname]=useState("");
  let [email,setEmail]=useState("");
  let [contact,setContact]=useState("");
  let [lname,setLname]=useState("");
  let [userId,setUserId]=useState("");
  let [password,setPassword]=useState("");
  let [rpassword,setRpassword]=useState("");
  let navigate=useNavigate()

  function handlerSignUp()
  {
    if(password==rpassword)
    {
    axios.post("http://localhost:8080/user/signup",{
      userFirstName: fname,
        userLastName: lname,
        userContactNo: contact,
        userEmail: email,
        userLoginId: userId,
        userPassword: password

    }).then((e)=>{
      console.log(e.data.result)
      if(e.data.result==="correct")
      {
        navigate("/SignInUser")
        alert("Successfully Registered")
      }
      else{
        navigate("/signupuser")
        alert("Fill Data Properly")

      }
    })
  }
  else{

    navigate("/signupuser")
    alert("Password And Re-Password Shoud Be Same")
 



  }





  }//End Of Function



    return(
    <section id="book-a-table" class="book-a-table">
      <div class="container">

        <div class="section-title">
          <h2>User<span>Registration</span></h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div class="php-email-form" >
          <div class="row">
            <div class="col-lg-4 col-md-6 form-group">
                <label>First Name</label>
              <input type="text" name="fname" class="form-control" id="fname" placeholder="Your First Name" onBlur={(e)=>{setFname(e.target.value)}} />
              <div class="validate"></div>
            </div>

            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <label>Last Name</label>
            <input type="text" name="lname" class="form-control" id="lname" placeholder="Your Last Name" onBlur={(e)=>{setLname(e.target.value)}} />
              <div class="validate"></div>
            </div>







            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <label>Email</label>
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" onBlur={(e)=>{setEmail(e.target.value)}} />
              <div class="validate">
            </div><br/><br/></div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <label>Contact No</label>
              <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone"  onBlur={(e)=>{setContact(e.target.value)}} />
              </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
            <label>Login Id</label>
              <input type="text" name="date" class="form-control" id="date" placeholder="Login Id" onBlur={(e)=>{setUserId(e.target.value)}} />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
            <label>Password</label>
              <input type="text" class="form-control" name="time" id="time" placeholder="Password" onBlur={(e)=>{setPassword(e.target.value)}}/>
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
            <label>Re-Enter Password</label>
              <input type="text" class="form-control" name="people" id="people" placeholder="Re-Enter Password" onBlur={(e)=>{setRpassword(e.target.value)}}  />
              <div class="validate"></div>
            </div>
          </div>
          
          <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
          </div>
          <div class="text-center"><button type="submit" onClick={handlerSignUp}>Submit</button></div>
        </div>

      </div>
    </section>
    )
}