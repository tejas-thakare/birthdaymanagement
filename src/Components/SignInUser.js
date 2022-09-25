import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios, { Axios } from 'axios';
import { useDispatch, useSelector } from "react-redux"

export default function SignInUser(){

  
  let navigate=useNavigate();
  let [uname,setUname] = useState("");
  let [password,setPassword] = useState("");
  
  const dispatch=useDispatch();

  function handlerCheck()
  {
    axios.post('http://localhost:8080/user/validation',{
      userLoginId:uname,
      userPassword:password

    }).then((e)=>{
      console.log(e.data.result)
      console.log(e.data.uname)
      if(e.data.result==="correct")
      {
       
       
 
        dispatch({type:"save",load:{uname:uname,password:password,username:e.data.uname,userId:e.data.id}})
        navigate("/addvenue")
      }
      else{
       
        navigate("/SignInUser")
        alert("Invalid Username Or Password")
      }
    }
    )
  

  }

    return(
    <section id="book-a-table" className="book-a-table">
      <div className="container">

        <div className="section-title">
          <h2>Sign<span>In</span></h2>
          <p>“Wishing you health, love, wealth, happiness and just everything your heart desires”</p>
        </div>

        <div className="php-email-form">
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
            <label>Username</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onBlur={(user)=>{setUname(user.target.value)}} required={true}/>
              <div className="validate"></div>
            </div>
            <br/>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <label>Password</label>
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Password" onBlur={(psw)=>{setPassword(psw.target.value)}} required={true}/>
              <div className="validate"></div>
            </div>
          </div>
          <div className="text-center"><button type="submit" onClick={handlerCheck}>Sign In</button> &nbsp;<Link to="/signupuser"><button type="submit" >Sign up</button></Link></div>
          <Link to="/Forget"><b><u>Forget Password</u></b></Link>
       

      </div>
      </div>
    </section>
    )
}
