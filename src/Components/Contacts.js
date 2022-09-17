import React from "react";


function Contacts() {
  const mapstyle = {
    width: '100%',
    height: '350px',
};
return (


  <section id="contact" class="contact">
    <div class="container">

      <div class="section-title">
        <h2><span>Contact</span> Us</h2>
      </div>
    </div>

    <div class="map">
      <iframe style={mapstyle} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.992200938411!2d73.83140251436895!3d18.5292545737458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4a06f8ec33%3A0x8fbd07f290a4163a!2sIET%20C-DAC%20ACTS%20ATC%2C%20Pune!5e0!3m2!1sen!2sbg!4v1663266762349!5m2!1sen!2sbg" frameborder="0" allowfullscreen ></iframe>
    </div>
    <div class="container mt-5">

      <div class="info-wrap">
        <div class="row">
          <div class="col-lg-3 col-md-6 info">
            <i class="bi bi-geo-alt"></i>
            <h4>Location:</h4>
            <p>Office No. 401, A-Wing, Swastik Society Manikchand Galleria,<br />Pune</p>
          </div>

          <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
            <i class="bi bi-clock"></i>
            <h4>Open Hours:</h4>
            <p>Monday-Saturday:<br />11:00 AM - 23.00 PM</p>
          </div>

          <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
            <i class="bi bi-envelope"></i>
            <h4>Email:</h4>
            <p>info@ietpune.com<br />iet.cdac@gmail.com</p>
          </div>

          <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
            <i class="bi bi-phone"></i>
            <h4>Call:</h4>
            <p>+1 5589 55488 51<br />+1 5589 22475 14</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}


export default Contacts
