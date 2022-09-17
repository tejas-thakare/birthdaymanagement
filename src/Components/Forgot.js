import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Forget()
{
  let navigate=useNavigate();

  let [contact,setContact]=useState("");
  let [userId,setUserId]=useState("");
  let [password,setPassword]=useState("");
  let [rpassword,setRpassword]=useState("");


   function handlerForget()
   {
    if(password===rpassword)
    {
      axios.post("http://localhost:8080/user/forget",{
        userContactNo:contact,
        userLoginId:userId,
        userPassword:password


      }).then((e)=>{
        console.log(e.data)
        if(e.data.result==="correct")
        {
          navigate("/SignInUser")
          alert("Password Updated Successfully!!!")

        }
        else{
          alert("Invalid Data")
        }
      });

    }
    else{
      alert("Password And Re-Enter Password Should Be Same")
    }

   }

    return(
        <section id="book-a-table" className="book-a-table">
        <div className="container d-flex justify-content-center ">
  
          
  
          <div className="php-email-form d-flex flex-column mt-5" >
          <div className="section-title">
            <h2>Change<span>Password</span></h2>
          </div>
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 form-group">
              <center><label><b>Username</b></label></center>
                <input type="text" name="uname" class="form-control" id="name" placeholder="Your Name" onBlur={(e)=>{setUserId(e.target.value)}} required/>
                <div class="validate"></div>
              </div>
              </div>
              
              <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <center><label><b>Contact</b></label></center>
                <input type="tel" class="form-control" name="phone" id="phone" placeholder="Phone Number" required pattern="[0-9]{10}" onBlur={(e)=>{setContact(e.target.value)}} />
                <div class="validate"></div>
              </div>

              <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <center><label><b>Password</b></label></center>
                <input type="tel" class="form-control" name="password" id="password" placeholder="Password" required onBlur={(e)=>{setPassword(e.target.value)}} />
                <div class="validate"></div>
              </div>

              <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <center><label><b>Re-Enter Password</b></label></center>
                <input type="tel" class="form-control" name="phone" id="phone" placeholder="Password" required  onBlur={(e)=>{setRpassword(e.target.value)}}/>
                <div class="validate"></div>
              </div>




            </div>
            <div class="text-center"><button type="submit" onClick={handlerForget}>Submit</button></div>
          </div>
  
        </div>
        </div>
        </div>
      </section>
      
    )

}