import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios, { Axios } from 'axios';
import { useDispatch, useSelector } from "react-redux"


export default function SignInVendor(){

  let navigate=useNavigate();
  let [uname,setUname] = useState("");
  let [password,setPassword] = useState("");
  
  const dispatch=useDispatch();

  function handlerCheck()
  {
    axios.post('http://localhost:8080/vendor/checkpassword',{
      vendorLoginId:uname,
      vendorPassword:password

    }).then((e)=>{
    
      console.log("Vendor ifnfo:",e.data)
      if(e.data.result==="correct")
      {
        dispatch({type:"save",load:{uname:uname,password:password,username:e.data.uname,userid:e.data.id}})
        navigate("/Dashboard")
      }
      else{
        navigate("/SignInVendor")
        alert("Invalid Username Or Password")
      }
    }
    )
  }
    return(
    <section id="book-a-table" class="book-a-table">
      <div class="container">

        <div class="section-title">
          <h2>Sign<span>In</span></h2>
          <p>“Wishing you health, love, wealth, happiness and just everything your heart desires”</p>
        </div>

        <div class="php-email-form" >
          <div class="row">
            <div class="col-lg-4 col-md-6 form-group">
            <label>Username</label>
              <input type="text" name="uname" class="form-control" id="name" placeholder="Your UserName" onBlur={(e)=>{setUname(e.target.value)}} />
              <div class="validate"></div>
            </div>
            <br/>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <label>Password</label>
              <input type="password" class="form-control" name="password" id="email" placeholder="Your Password"  onBlur={(e)=>{setPassword(e.target.value)}}  />
              <div class="validate"></div>
            </div>
          </div>
          <div class="text-center"> <button type="submit"  onClick={handlerCheck}>Sign In</button>&nbsp; <Link to="/signupvendor"><button type="submit">Sign Up</button></Link></div>
          <Link to="/Forget"><b><u>Forget Password</u></b></Link>
        </div>

      </div>
    </section>
    )
}