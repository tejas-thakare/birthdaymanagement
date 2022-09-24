import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <section id="hero">
            <div className="hero-container">
                <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active" style={{ backgroundImage: 'url("img/slide/slide-2.jpg")' }}>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown"><span>Fiesta </span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            </section>

    )
}

