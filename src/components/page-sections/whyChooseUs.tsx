export default function WhyChooseDelta() {
    const items = [
      {
        img: "/images/icon-what-we-item-1.svg",
        title: "Proven Track Record",
        desc: "Thousands of students trained, many now full-time traders.",
        delay: "",
      },
      {
        img: "/images/icon-what-we-item-2.svg",
        title: "Global Mentors",
        desc: "Learn from recognized experts in Forex, Crypto, and Market Analysis.",
        delay: "0.2s",
      },
      {
        img: "/images/icon-what-we-item-3.svg",
        title: "Transparent Pricing",
        desc: "Every fee is listed upfront—no hidden charges",
        delay: "0.4s",
      },
      {
        img: "/images/icon-what-we-item-4.svg",
        title: "Flexible Learning",
        desc: "Attend classes online or offline, wherever you are",
        delay: "0.6s",
      },
      {
        img: "/images/icon-what-we-item-4.svg",
        title: "Community Support",
        desc: "Join a thriving global network of traders and investors.",
        delay: "0.6s",
      },
    ];
  
    return (
      <div className="what-we-do bg-section dark-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="what-we-contant">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Why Choose Delta</h3>
                  <h2   style={{ fontWeight: 600 }} className="text-anime-style-3" data-cursor="-opaque">
                    Why Delta International Institute Stands Out
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Delta International Institute builds careers, not just
                    knowledge. Our profit-driven, skill-focused courses train you
                    to think and act like a professional trader, with personal
                    guidance until you’re confident.
                  </p>
                </div>
  
                <div className="what-we-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="contact.html" className="btn-default btn-highlighted">
                    contact us
                  </a>
                </div>
  
                <div className="what-we-counter-box">
                  <h2>
                    <span className="counter">7000</span>+
                  </h2>
                  <h3>Happy Members</h3>
                  <p>
                    We are proud to have helped thousands of students achieve
                    their financial goals.
                  </p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-6">
              <div className="what-we-item-list">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="what-we-item wow fadeInUp"
                    data-wow-delay={item.delay}
                  >
                    <div className="icon-box">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="what-we-content">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  