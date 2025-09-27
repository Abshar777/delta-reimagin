import React from "react";

const awards = [
  {
    img: "/images/my/gr.png",
    style: { height: "100%", width: "100%" },
    title: "Guines World Record Holder",
    desc: "Recognized for a record-breaking live session.",
    delay: "0s",
  },
  {
    img: "/images/my/ChatGPT Image Aug 3, 2025, 01_26_12 AM.png",
    style: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#10ccc6",
    },
    title: "Money Conclave Awards",
    desc: "Best Crypto & Blockchain educator of the year 2024",
    delay: "0.2s",
  },
  {
    img: "/images/my/iff.png",
    style: { },
    title: "International Finance Forum",
    desc: "Outstanding Forex Education Provider 2024",
    delay: "0.4s",
  },
  {
    img: "/images/my/profx.jpg",
    style: {},
    title: "PROFX AWARDS DUBAI",
    desc: "Best Forex Trading Academy 2024",
    delay: "0.6s",
  },
];

const Awards = () => {
  return (
    <div className="our-services">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">AWARDS</h3>
              <h2
                style={{ fontWeight: 600 }}
                className="text-anime-style-3"
                data-cursor="-opaque"
              >
                Our Awards
              </h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Section Title Content Start */}
            <div
              className="section-title-content wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <p>
                These honors reflect our students’ success stories and the trust
                placed in Delta as a leader in trading education.
              </p>
            </div>
            {/* Section Content Button End */}
          </div>
        </div>

        <div className="row service-list">
          {awards.map((award, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              {/* Service Item Start */}
              <div
                className="service-item active wow fadeInUp"
                data-wow-delay={award.delay}
              >
                {/* Service Image Start */}
                <div className="service-image" style={award.style}>
                  <img src={award.img} alt="" style={{ height: "100%", width: "100%" }} />
                </div>
                {/* Service Image End */}

                {/* Service Body Start */}
                <div className="service-body">
                  {/* Service Body Header Start */}
                  <div className="service-body-header">
                    {/* Service Readmore Button Start */}
                    <div className="service-readmore-btn">
                      <a href="service-single.html">
                        <img src="/images/arrow-white.svg" alt="" />
                      </a>
                    </div>
                    {/* Service Readmore Button End */}
                  </div>
                  {/* Service Body Header End */}

                  {/* Service Content Start */}
                  <div className="service-content">
                    <h3>
                      <a href="service-single.html">{award.title}</a>
                    </h3>
                    <p>{award.desc}</p>
                  </div>
                  {/* Service Content End */}
                </div>
                {/* Service Body End */}
              </div>
              {/* Service Item End */}
            </div>
          ))}

          <div className="col-lg-12">
            {/* Section Footer Text Start*/}
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
              <p>
                <span>Start</span> Your Financial Freedom Journey -{" "}
                <a href="contact.html">Start here!</a>
              </p>
            </div>
            {/* Section Footer Text End*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
