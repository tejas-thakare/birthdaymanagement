import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
class Packages extends Component{
  
 
  constructor()
    {
        super();
       
 
        this.state={data:[]}
    }

    componentDidMount()
    {
      
     console.log(this.props.date)
      fetch("http://localhost:8080/package/getPk",{"method":"GET"
    }).then((response)=>{return response.json()}).then((jsobj)=>{
          
        this.setState({data:jsobj.map((e)=>{
            return e.packageCost;

        })})
    })
    }

    handlerPackage=(event)=>{
     
      if(this.props.username!=="" && event.target.id==="silver")
      {
        this.props.dispatch({type:"save",load:{uname:this.props.uname,password:this.props.password,username:this.props.username,userid:this.props.userid,venuecost:this.props.venuecost,packagecost:25000,date:this.props.date}})
       setTimeout(()=>{
        this.props.navigate("/Billing");
       },1000)
        
      }

      if(this.props.username!=="" && event.target.id==="gold")
      {
        this.props.dispatch({type:"save",load:{uname:this.props.uname,password:this.props.password,username:this.props.username,userid:this.props.userid,venuecost:this.props.venuecost,packagecost:35000,date:this.props.date}})
       setTimeout(()=>{
        this.props.navigate("/Billing");
       },1000)
        
      }
      if(this.props.username!=="" && event.target.id==="platinum")
      {
        this.props.dispatch({type:"save",load:{uname:this.props.uname,password:this.props.password,username:this.props.username,userid:this.props.userid,venuecost:this.props.venuecost,packagecost:45000,date:this.props.date}})
       setTimeout(()=>{
        this.props.navigate("/Billing");
       },1000)
        
      }
      if(this.props.username==="")
      {
        alert("User Should Login First To Select Package")
        this.props.navigate("/SignInUser")
      }
    }

 

render()
{

    return(
        <section id="chefs" class="chefs">
        <div class="container">
  
          <div class="section-title">
            <h2>Our <span>Themes</span></h2>
            <p>“Wishing you health, love, wealth, happiness and just everything your heart desires”</p>
          </div>
  
          <div class="row">
  
            <div class="col-lg-4 col-md-6">
              <div class="member">
                <div class="pic"><img src="img/chefs/chefs-1.jpg" class="img-fluid" alt="" /></div>
                <div class="member-info">
                  <h4>Silver </h4>
                  <h4>Cost:{this.state.data[0]}</h4>
                  <div class="text-center"><button type="submit"className="aaa" id="silver" onClick={this.handlerPackage}>ADD</button></div>
                  </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member">
              <div class="pic"><img src="img/chefs/chefs-2.jpg" class="img-fluid" alt="" /></div>
              <div class="member-info">
                <h4>Golden </h4>
                <h4>Cost:{this.state.data[2]}</h4>
                <div class="text-center"><button type="submit" className="aaa" id="gold" onClick={this.handlerPackage}>ADD</button></div>

                </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member">
              <div class="pic"><img src="img/chefs/chefs-3.jpg" class="img-fluid" alt="" /></div>
              <div class="member-info">
                <h4>Platinum </h4>
                <h4>Cost:{this.state.data[1]}</h4>
                <div class="text-center"><button type="submit" className="aaa" id="platinum" onClick={this.handlerPackage}>ADD</button></div>

                </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}
}
export function AppWithRouter(props)
{
  let navigate=useNavigate();
  let dispatch=useDispatch();
  let uname=useSelector((e)=>{
    return e.uname;
  })
  let password=useSelector((e)=>{
    return e.password
  })
  let username=useSelector((e)=>{
    return e.username
  })
  let userid=useSelector((e)=>{
    return e.userid
  })
  let venuecost=useSelector((e)=>{
    return e.venuecost;
  })

  let bookingdate=useSelector((e)=>{
    return e.date;
  })
  return(<Packages navigate={navigate}  dispatch={dispatch} uname={uname} password={password} username={username} userid={userid} venuecost={venuecost} date={bookingdate}></Packages>)
}


export default Packages;