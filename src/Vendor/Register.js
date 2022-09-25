import React,{ useState } from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";


export default function RegisterVendor(){

  let [name,setFname]=useState("");
  let [email,setEmail]=useState("");
  let [contact,setContact]=useState("");
  let [loginid,setUserId]=useState("");
  let [password,setPassword]=useState("");
  let [rpassword,setRpassword]=useState("");
  let navigate=useNavigate()

  function handlerSignUp()
  {
    if(password==rpassword)
    {
    axios.post("http://localhost:8080/vendor/addvendor",{
      vendorName: name,
      vendorContactNo: contact,
      vendorEmail: email,
      vendorLoginId: loginid,
      vendorPassword: password
    }).then((e)=>{
      console.log(e.data.result)
      if(e.data.result==="correct")
      {
        navigate("/SignInVendor")
        alert("Successfully Registered")
      }
      else{
        navigate("/Signupvendor")
        alert("Fill Data Properly")

      }
    })
  }
  else{
    navigate("/Register")
    alert("Password And Re-Password Shoud Be Same")
  }
}//End Of Function

    return(
    <section id="book-a-table" className="book-a-table">
      <div className="container">

        <div className="section-title">
          <h2>Vendor<span>Registration</span></h2>
          <p>“Wishing you health, love, wealth, happiness and just everything your heart desires”</p>
        </div>

        <div className="php-email-form" >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
                <label>Name</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <label>Email</label>
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <label>Contact No</label>
              <input type="text" className="form-control" name="contact" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
            <label>Login Id</label>
              <input type="text" name="loginid" className="form-control" id="date" placeholder="Login Id" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
            <label>Password</label>
              <input type="text" className="form-control" name="password" id="time" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
            <label>Re-Enter Password</label>
              <input type="number" className="form-control" name="rpassword" id="people" placeholder="Re-Enter Password" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
              <div className="validate"></div>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            {/* <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div> */}
          </div>
          <div className="text-center" ><button className="btn-menu animate__animated animate__fadeInUp scrollto" type="submit" onClick={handlerSignUp}>Sumbit</button></div>
        </div>

      </div>
    </section>
    )
}
