import React from "react";

const clientImages = [
  "/images/test/0.png",
  "/images/test/1.png",
  "/images/test/2.png",
  "/images/test/3.png",
  "/images/test/4.png",
  "/images/test/5.png",
];

const steps = [
  {
    step: "Step 01",
    title: "Lead Generation",
    description: (
      <>
        Fill the enquiry form / <a href="/contact">Contact Us</a>.
      </>
    ),
    delay: "0.4s",
  },
  {
    step: "Step 02",
    title: "Lead Consultants",
    description: "Our consultant calls to understand your goals.",
    delay: "0.6s",
  },
  {
    step: "Step 03",
    title: "Initial Meeting",
    description: "Online or offline meeting with mentors/sales manager.",
    delay: "0.8s",
  },
  {
    step: "Step 04",
    title: "Payment Procedure",
    description:
      "Accounts team confirms payment and issues an official bill.",
    delay: "1.4s",
  },
  {
    step: "Step 05",
    title: "Welcome & Access",
    description:
      "Receive greeting email, welcome kit, class schedule & community channel links.",
    delay: "1.6s",
  },
];

export default function HowItWork() {
  return (
    <div className="how-it-work">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="how-work-image-box">
              <div className="how-work-image image-anime">
                <figure>
                  <img src="/images/my/g3.jpg" alt="" />
                </figure>
              </div>

              <div style={{backdropFilter: "blur(25px)"}} className="satisfy-client-box">
                <div className="satisfy-client-images">
                  {clientImages.map((img, i) => (
                    <div key={i} className="satisfy-client-image">
                      <figure className="image-anime">
                        <img src={img} alt="" />
                      </figure>
                    </div>
                  ))}
                </div>

                <div className="satisfy-client-content">
                  <h3>7K+ Trained Students</h3>
                  <p>Trained students across multiple countries worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="how-work-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">How it work</h3>
                <h2   style={{ fontWeight: 600 }} className="text-anime-style-3" data-cursor="-opaque">
                  Process of Admission
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We make enrollment smooth and transparent.
                </p>
              </div>

              <div className="work-steps-list">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="work-steps-item wow fadeInUp"
                    data-wow-delay={step.delay}
                  >
                    <div className="work-step-no">
                      <h3>{step.step}</h3>
                    </div>
                    <div className="work-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
