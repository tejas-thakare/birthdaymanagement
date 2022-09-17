import axios from "axios";
import React, { Component, useEffect, useState } from "react";

export default class Packages extends Component{
  
 
  constructor()
    {
        super();
       
        this.state={data:[]}
    }

    componentDidMount()
    {
      fetch("http://localhost:8080/package/getPk",{"method":"GET"
    }).then((response)=>{return response.json()}).then((jsobj)=>{
          
        this.setState({data:jsobj.map((e)=>{
            return e.packageCost;

        })})
    })
    }

 

render()
{

    return(
        <section id="chefs" class="chefs">
        <div class="container">
  
          <div class="section-title">
            <h2>Our <span>Packages</span></h2>
            <p>Ut possimus qui ut temporibus culpa velit eve</p>
          </div>
  
          <div class="row">
  
            <div class="col-lg-4 col-md-6">
              <div class="member">
                <div class="pic"><img src="img/chefs/chefs-1.jpg" class="img-fluid" alt="" /></div>
                <div class="member-info">
                  <h4>Silver </h4>
                  <h4>Cost:{this.state.data[1]}</h4>
                  <div class="text-center"><button type="submit"className="aaa">ADD</button></div>
                  </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member">
              <div class="pic"><img src="img/chefs/chefs-2.jpg" class="img-fluid" alt="" /></div>
              <div class="member-info">
                <h4>Golden </h4>
                <h4>Cost:{this.state.data[0]}</h4>
                <div class="text-center"><button type="submit" className="aaa">ADD</button></div>

                </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member">
              <div class="pic"><img src="img/chefs/chefs-3.jpg" class="img-fluid" alt="" /></div>
              <div class="member-info">
                <h4>Platinum </h4>
                <h4>Cost:{this.state.data[2]}</h4>
                <div class="text-center"><button type="submit" className="aaa">ADD</button></div>

                </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}
}