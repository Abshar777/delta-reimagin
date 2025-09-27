import React from "react";

const OurMission = () => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            {/* Why Choose Image Box Start */}
            <div className="why-choose-image-box">
              {/* Why Choose Image Start */}
              <div className="why-choose-image">
                <figure className="image-anime reveal">
                  <img src="/images/my/g2.jpg" alt="" />
                </figure>
              </div>
              {/* Why Choose Image End */}
            </div>
            {/* Why Choose Image Box End */}
          </div>

          <div className="col-lg-7">
            {/* Why Choose Content Start */}
            <div className="why-choose-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Our Mission</h3>
                <h2   style={{ fontWeight: 600 }} className="text-anime-style-3" data-cursor="-opaque">
                  Our Mission
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  To empower individuals to achieve financial freedom by
                  mastering world class trading strategies delivered by expert
                  mentors who trade the markets daily.
                  <br />
                  We believe anyone, regardless of background, can become a
                  confident trader with the right guidance. That’s why we’ve
                  built a complete learning ecosystem from beginner-friendly
                  sessions to advanced market theories so you grow step by step
                  with confidence.
                </p>
              </div>
              {/* Section Title End */}

              {/* Why Choose Body Start */}
              <div className="why-choose-body">
                {/* Why Choose Item Box Start */}
                <div className="why-choose-item-box">
                  {/* Why Choose Item List Start */}
                  <div className="why-choose-item-list">
                    {/* Why Choose Item Start */}
                    <div
                      className="why-choose-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="why-choose-item-header">
                        <div className="icon-box">
                          <img src="/images/icon-why-choose-1.svg" alt="" />
                        </div>
                        <div className="why-choose-item-title">
                          <h3>KHDA Approved</h3>
                        </div>
                      </div>
                      <div className="why-choose-item-content">
                        <p>
                          Delta International Institute is a KHDA Approved
                          Institution.
                        </p>
                      </div>
                    </div>
                    {/* Why Choose Item End */}

                    {/* Why Choose Item Start */}
                    <div
                      className="why-choose-item wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="why-choose-item-header">
                        <div className="icon-box">
                          <img src="/images/icon-why-choose-2.svg" alt="" />
                        </div>
                        <div className="why-choose-item-title">
                          <h3>Top Mentor Awards</h3>
                        </div>
                      </div>
                      <div className="why-choose-item-content">
                        <p>
                          Multiple Top Mentor Awards won by our faculty in
                          Blockchain, Forex, and Technical Analysis categories.
                        </p>
                      </div>
                    </div>
                    {/* Why Choose Item End */}
                  </div>
                  {/* Why Choose Item List End */}

                  {/* Why choose Button Start */}
                  <div
                    className="why-choose-btn wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <a href="contact.html" className="btn-default">
                      contact us
                    </a>
                  </div>
                  {/* Why choose Button End */}
                </div>
                {/* Why Choose Item Box End */}

                {/* Why Choose Body Image Start */}
                <div className="why-choose-body-image">
                  <figure className="image-anime reveal">
                    <img src="/images/my/g4.jpg" alt="" />
                  </figure>
                </div>
                {/* Why Choose Body Image End */}
              </div>
              {/* Why Choose Body End */}
            </div>
            {/* Why Choose Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
