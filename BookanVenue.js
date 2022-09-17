import React from "react";

export default function Packages() {
    return (
        <section id="book-a-table" class="book-a-table">
            <div class="container">

                <div class="section-title">
                    <h2>Book an<span>Venue..</span></h2>
                    <p>Exclusive events, priceless memories</p>
                </div>

                <form action="forms/book-a-table.php" method="post" role="form" class="php-email-form" >
                    <div class="row"> 
                    <label>Choose A Venue Date:</label>
                        <div class="col-lg-4 col-md-6 form-group mt-3">
                            <input type="date" name="date" class="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div class="validate"></div>
                        </div><br/> <br/> <hr/>
                        <label>Choose A Venue Time:</label>
                        <div class="col-lg-4 col-md-6 form-group mt-3">
                            <input type="time" class="form-control" name="time" id="time" placeholder="" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div class="validate"></div>
                        </div><br/> <br/> <hr/>


                        <label for="address">Choose A Venue Address:</label><br/>

                        <select name="address" id="addr">
                            <option value="addr1"> IET Swastik Society Manikchand Galleria, Model Colony, Shivajinagar, Pune</option>
                        </select>

                    </div><br/> <br/> <br/> <hr/>
                    <div class="mb-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                    </div>
                    <div class="text-center"><button type="submit">Next</button></div>
                </form>

            </div>
        </section>
    )
}