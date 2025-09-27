"use client";
import Image from "next/image";
import React from "react";
import aboutusImage from "@/../public/images/my/aboutus.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Image Start */}
            <div className="about-us-image">
              <div className="about-img">
                <figure className="reveal relative overflow-hidden image-anime">
                  <Image width={500} height={500} className="w-full h-full object-cover" placeholder="blur" src=    {aboutusImage} alt=""  />
                </figure>

                {/* Company Experience Box Start */}
                <div className="company-experience">
                  <div className="icon-box">
                    <img src="/images/icon-experience.svg" alt="" />
                  </div>
                  <div className="company-experience-content">
                    <h3>
                      <span className="counter">8</span>+
                    </h3>
                    <p>years of experience</p>
                  </div>
                </div>
                {/* Company Experience Box End */}
              </div>
            </div>
            {/* About Image End */}
          </div>

          <div className="col-lg-6">
            {/* About Us Content Start */}
            <div className="about-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">about us</h3>
                <h2
                  style={{ fontWeight: 600 }}
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                >
                  Who We Are
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  At Delta International Institute, trading is more than numbers
                  on a screen it’s a life-changing skill. Founded by seasoned
                  traders and educators, Delta has become a global hub for
                  Forex, Crypto, and advanced market education
                </p>
              </div>
              {/* Section Title End */}

              {/* About Us Body Start */}
              <div className="about-us-body">
                {/* About List Item Start */}
                <div className="about-list-item wow fadeInUp" data-wow-delay="0.5s">
                  <div className="icon-box">
                    <img src="/images/my/fx.svg" alt="" />
                  </div>
                  <div className="about-list-content">
                    <h3>FOREX</h3>
                  </div>
                </div>
                {/* About List Item End */}

                {/* About List Item Start */}
                <div className="about-list-item wow fadeInUp" data-wow-delay="0.5s">
                  <div className="icon-box">
                    <img src="/images/my/bitcoin.svg" alt="" />
                  </div>
                  <div className="about-list-content">
                    <h3>BLOCKCHAIN</h3>
                  </div>
                </div>
                {/* About List Item End */}

                {/* About List Item Start */}
                <div className="about-list-item wow fadeInUp" data-wow-delay="0.75s">
                  <div className="icon-box">
                    <img src="/images/my/stocks.svg" alt="" />
                  </div>
                  <div className="about-list-content">
                    <h3>STOCKS</h3>
                  </div>
                </div>
                {/* About List Item End */}

                {/* About List Item Start */}
                <div className="about-list-item wow fadeInUp" data-wow-delay="0.75s">
                  <div className="icon-box">
                    <img src="/images/my/mutualFunds.svg" alt="" />
                  </div>
                  <div className="about-list-content">
                    <h3>MUTUAL FUNDS</h3>
                  </div>
                </div>
                {/* About List Item End */}
              </div>
              {/* About Us Body End */}

              {/* About Us Footer Start */}
              <div className="about-us-footer">
                {/* Appointment Button Start */}
                <div className="appointment-btn wow fadeInUp" data-wow-delay="1s">
                  <a href="about.html" className="btn-default">
                    more about us
                  </a>
                </div>
                {/* Appointment Button End */}
              </div>
              {/* About Us Footer End */}
            </div>
            {/* About Us Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
