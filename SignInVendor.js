import React from "react";

export default function SignInVendor(){
    return(
    <section id="book-a-table" class="book-a-table">
      <div class="container">

        <div class="section-title">
          <h2>Sign<span>In</span></h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <form action="forms/book-a-table.php" method="post" role="form" class="php-email-form" >
          <div class="row">
            <div class="col-lg-4 col-md-6 form-group">
            <label>email/Username</label>
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div class="validate"></div>
            </div>
            <br/>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <label>Password</label>
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
              <div class="validate"></div>
            </div>
          </div>
          <div class="text-center"><button type="submit">Sign In</button></div>
        </form>

      </div>
    </section>
    )
}