import React from "react";

const approachItems = [
  {
    title: "Forex Trading Course",
    content:
      "Understanding currency pairs, pips, and lots. Reading forex quotes and calculating profits/losses. Introduction to technical and fundamental analysis. Learning Risk Management, Psychology, Trading Strategies & Practical Trading.",
    delay: "0s",
  },
  {
    title: "Live mentorship",
  
    content:
      "Interactive Communication, Content Delivery, Hands-On Practice, Q&A Sessions, Feedback & Critique, Networking Opportunities, Motivation & Encouragement.",
    delay: "0.2s",
    active: true,
  },
  {
    title: "Funding Challenge",
   
    content:
      "Participate in a structured evaluation process to prove your trading skills and discipline.",
    delay: "0.4s",
  },
  {
    title: "Long Term Investment",
   
    content:
      "Get opportunities to grow your wealth over extended periods as we offer comprehensive investment advisory services for individuals across various sectors.",
    delay: "0.6s",
  },
  {
    title: "Forex Broker Setup",
   
    content:
      "We offer a wide range of services to support individuals and organizations in setting up their own brokerage firms.",
    delay: "0.8s",
  },
  {
    title: "Trading Hub",
   
    content:
      "We provide latest Technologies Computer & latest LED's to make you understand the ground realities.",
    delay: "0.10s",
  },
  {
    title: "Blockchain",
   
    content:
      "We provide extensive guidance. Discover how to purchase, sell, and handle digital assets such as Ethereum, Bitcoin, etc at Delta.",
    delay: "0.12s",
  },
];

const Services: React.FC = () => {
  return (
    <div className="our1-approach ">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="our1-approach-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">our services</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Our Services
                </h2>
              </div>

              <div className="our-approach-btn wow fadeInUp" data-wow-delay="0.2s">
                <a href="contact.html" className="btn-default">
                  explore more
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="mission-vision-list flex flex-col">
              {approachItems.map((item, index) => (
                <div
                  key={index}
                  className={`mission-vision-item w-full  wow fadeInUp`}
                  data-wow-delay={item.delay}
                >
                  <div className="mission-vision-header">

                    <div className="mission-vision-title">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <div className="mission-vision-content">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
