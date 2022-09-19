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
      console.log(e.data.result)
      console.log(e.data.uname)
      if(e.data.result==="correct")
      {
        dispatch({type:"save",load:{uname:uname,password:password,uname:e.data.uname,password:e.data.id}})
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
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div class="php-email-form" >
          <div class="row">
            <div class="col-lg-4 col-md-6 form-group">
            <label>Username</label>
              <input type="text" name="uname" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div class="validate"></div>
            </div>
            <br/>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <label>Password</label>
              <input type="email" class="form-control" name="password" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
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