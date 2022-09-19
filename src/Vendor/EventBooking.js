import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function EventBooking() {

  
  const [Bookings, setBookings] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/vendor/showbookings')
      .then(res => {
        console.log(res)
        setBookings(res.data)
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
          <h2>Event<span>Bookings</span></h2>
        </div>

        <form class="php-email-form" >
        
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Booking Id</th>
      <th scope="col">Client Id</th>
      <th scope="col">Booking Date</th>
      <th scope="col">Booking Amount</th>
    </tr>
    <tbody>
                  {
                    Bookings.map(
                      Booking =>
                        <tr key={Booking.id}>
                          <th scope="row">{Booking.booking_number}</th>
                          <td>{Booking.BookingUser}</td>
                          <td>{Booking.bookingDate}</td>
                          <td>{Booking.bookingAmount}</td>
                        </tr>
                    )
                  }
                </tbody>
  </thead>
  
</table>
        </form>

      </div>
    </section>
    </div>
    )
}

