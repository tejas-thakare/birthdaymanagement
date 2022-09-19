import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

export default function Add(){
 
  let [type,settype]=useState("");
  let [packages,setpackage]=useState("");
  let [cost,setcost]=useState("");
  let navigate=useNavigate()

  function handlerSignUp()
  {
    axios.post("http://localhost:8080/vendor/addvendor",{
      serviceType: type,
      serviceDetails: packages,
      serviceCost: cost,
    }).then((e)=>{
        navigate("/Service")
        alert("Service is Added Successfully")
    })
  }

return(       
  <div>      
    <section id="book-a-table" class="book-a-table">
      <div class="container">
      
        <div class="section-title">
          <h2>Add<span>Service</span></h2>
       </div>

        <div class="php-email-form" >
        <div class="row">
            <div class="col-lg-4 col-md-6 form-group">
            <label>Service Name</label>
              <input type="text" name="type" class="form-control" id="name" placeholder="Service Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <label>Package</label>
              <input type="email" class="form-control" name="packages" id="email" placeholder="Package" data-rule="email" data-msg="Please enter a valid email" />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <label>Service Cost</label>
              <input type="text" class="form-control" name="cost" id="phone" placeholder="Service Cost" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div class="validate"></div>
            </div>
          
          <div class="text-center"><button type="submit" onClick={handlerSignUp}>Add Service</button></div>
        
        </div>
        </div>

      </div>
    </section>
    </div>
    )
}