import React from "react";
import  { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SignInAdmin(){

  // hooks
 
  let [uname,setUname]=useState("");
  let [password,setPassword]=useState("");
  let [errorMessages,setErrorMessages]=useState("")

  let navigate=useNavigate();

  // User Login info
 

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };




  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    

    // Compare user info
    if(uname!=="iet")
    {
    setErrorMessages({ name: "uname", message: errors.uname });
     if(password!=="12345") {
        setErrorMessages({ name: "pass", message: errors.pass });
       
      }
    }
     else {
      navigate("/Users")
      
     
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );






    return(
      <section id="book-a-table" className="book-a-table">
      <div className="container d-flex justify-content-center ">

        

        <div className="php-email-form d-flex flex-column mt-5" >
        <div className="section-title">
          <h2>Sign<span>In</span></h2>
        </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 form-group">
            <center><label><b>Username</b></label></center>
              <input type="text" name="uname" class="form-control" id="name" placeholder="Your Name" onBlur={(e)=>{setUname(e.target.value)}} />
 {renderErrorMessage("uname")}
              <div class="validate"></div>
            </div>
            </div>
            
            <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <center><label><b>Password</b></label></center>
              <input type="password" class="form-control" name="pass" id="email" placeholder="Your password" onBlur={(e)=>{setPassword(e.target.value)}} />
 {renderErrorMessage("pass")}
              <div class="validate"></div>
            </div>
          </div>
          <div class="text-center"><button type="submit" onClick={handleSubmit}>Sign In</button></div>
        </div>

      </div>
    </section>

    
    )
}
