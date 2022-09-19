import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Services() {

  const [services, setservices] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/vendor/')
      .then(res => {
        console.log(res)
        setservices(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  return (
    < div >
      <section id="book-a-table" class="book-a-table">
        <div class="container">

          <div class="section-title">
            <h2>Event<span>Services</span></h2>
          </div>

          <form action="forms/book-a-table.php" method="post" role="form" class="php-email-form" >

            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Service Id</th>
                  <th scope="col">Service Name</th>
                  <th scope="col">Package</th>
                  <th scope="col">Service Cost</th>

                </tr>
              </thead>
              <tbody>
                  {
                    services.map(
                      service =>
                        <tr key={service.id}>
                          <th scope="row">{service.serviceId}</th>
                          <td>{service.serviceType}</td>
                          <td>{service.serviceDetails}</td>
                          <td>{service.serviceCost}</td>
                        </tr>
                    )
                  }
                </tbody>
            </table>
            <div class="text-center"><Link to="/Add"><button type="submit">Add Service</button></Link><Link to="/Dashboard"><button type="submit">Back</button></Link></div>
          </form>

        </div>
      </section>
    </div>
  )
}

