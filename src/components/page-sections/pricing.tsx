import React from "react";

interface PricingItem {
  title: string;
  description: string;
  features: string[];
  delay?: string;
}

const pricingData: PricingItem[] = [
  {
    title: "Basic plan",
    description: "Entry level training, community access, recorded sessions",
    features: ["Live Sessions", "Recorded Sessions", "Community Access"],
  },
  {
    title: "Premium plan",
    description: "Includes Basic + live market trading sessions & mentor Q&A.",
    features: [
      "Live Sessions",
      "Mentor Q&A",
      "Recorded Sessions",
      "Community Access",
      "Live Market Trading",
    ],
  },
  {
    title: "Upgrade Plan",
    description: "Jump to advanced courses after eligibility exam.",
    features: [
      "Eligibility Exam",
      "Recorded Sessions",
      "Live Market Trading",
      "Private Telegram Group",
      "Community Access",
      "Mentor Q&A",
    ],
    delay: "0.2s",
  },
];

export default function OurPricing() {
  return (
    <div className="our-pricing bg-section">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="our-pricing-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Our Pricing Plans</h3>
                <h2   style={{ fontWeight: 600 }} className="text-anime-style-3" data-cursor="-opaque">
                  Choose a plan that fits you
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Whether you’re a beginner trader or managing an advanced
                  trading portfolio, we offer pricing plans designed to suit
                  your goals and investment resources. (Prices vary by course;
                  see tables above for exact fees.)
                </p>
              </div>

              <div className="our-pricing-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="pricing.html" className="btn-default">
                  View Pricing Plans
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="pricing-box">
              {pricingData.map((item, index) => (
                <div
                  key={index}
                  className="pricing-item wow fadeInUp"
                  data-wow-delay={item.delay || "0s"}
                >
                  <div className="pricing-header">
                    <h3>{item.title}</h3>
                  </div>

                  <div className="pricing-body">
                    <div className="pricing-content">
                      <div className="pricing-price">
                        <p>{item.description}</p>
                      </div>
                      <div className="pricing-btn">
                        <a href="contact.html" className="btn-default">
                          Get started
                        </a>
                      </div>
                    </div>

                    <div className="pricing-list">
                      <ul>
                        {item.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
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
