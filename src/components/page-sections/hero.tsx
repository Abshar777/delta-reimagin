"use client";
import { useState, useEffect } from "react";

const Hero = () => {

  return (
    <div className="hero hero-video dark-section parallaxie">
      <div className="hero-bg-video parallaxie">
        <video autoPlay muted loop id="myvideo">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">UAE's Largest Trading Academy</h3>
                <h1
                  style={{ fontWeight: "600" }}
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                >
                  Learn Trade Succeed
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Master Forex, Crypto & Advanced Market Strategies with
                  globally experienced mentors.
                </p>
              </div>

              <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="contact.html" className="btn-default btn-highlighted">
                  Join Now
                </a>
              </div>

              <div className="hero-body wow fadeInUp" data-wow-delay="0.6s">
                <div className="hero-experience-box">
                  <h2>
                    <span className="counter">8</span>+
                  </h2>
                  <p>Years Of Experience</p>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="hero-experience-box"
                >
                  <h2>
                    <span className="counter">7</span>k+
                  </h2>
                  <p>happy Members</p>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="hero-experience-box"
                >
                  <h2>
                    <span className="counter">20</span>+
                  </h2>
                  <p>Skilled trainers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
