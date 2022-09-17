import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        // <!-- ======= Hero Section ======= -->
        <section id="hero">
            <div className="hero-container">
                <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div className="carousel-inner" role="listbox">

                        {/* <!-- Slide 1 --> */}
                        <div className="carousel-item active" style={{backgroundImage: 'url("img/slide/slide-1.jpg")'}}>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown"><span>Fiesta </span></h2>
                                    <p className="animate__animated animate__fadeInUp">Birthday Party planner for low cost and memorable adult and kids birthday party with unique and new ideas, and reliable too</p>
                                    <div>
                                         <Link to="/packages" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Packages</Link>
                                        <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book an Event</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slide 2 --> */}
                        <div className="carousel-item" style={{backgroundImage: 'url("img/slide/slide-2.jpg")'}}>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown"><span>Birhday Planner </span></h2>
                                    <p className="animate__animated animate__fadeInUp">In the busiest days of every day routine we understand the toughness of organizing grand party on your kid’s birthday occasions. Here, we set to bring up our multi-talents on the ground to celebrate the occasion in lively grand manner.</p>
                                    <div>
                                        <Link to="/packages" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Packages</Link>
                                        <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book an Event</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slide 3 --> */}
                        <div className="carousel-item" style={{backgroundImage: 'url("img/slide/slide-3.jpg")'}}>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown">celebrate</h2>
                                    <p className="animate__animated animate__fadeInUp">Our experts in the team with their premium years of experience in the stream takes the entire responsibility for organizing up a best event with best of their knowledge and expertise.</p>
                                    <div>
                                        <Link to="/packages" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Packages</Link>
                                        <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book an Event</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>

                </div>
            </div>
        </section>
        //   <!-- End Hero -->
    )
}
