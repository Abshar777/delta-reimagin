import React from "react";

const contactInfo = [
  {
    type: "Contact",
    icon: "/images/icon-phone.svg",
    content: <a href="tel:+97143999128">+97143999128</a>,
    delay: "0.4s",
  },
  {
    type: "Email",
    icon: "/images/icon-mail.svg",
    content: <a href="mailto:info@deltainstitutions.com">info@deltainstitutions.com</a>,
    delay: "0.6s",
  },
  {
    type: "Address",
    icon: "/images/icon-location.svg",
    content: "metro station ,Corniche - One Deira, 4th floor - Office number 410 - Gold Souq - Deira - Dubai - United Arab Emirates",
    delay: "0.8s",
  },
];



const ContactUs: React.FC = () => {
  return (
    <div className="page-contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-us-box">
              {/* Contact Content */}
              <div className="contact-us-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Contact us</h3>
                  <h2 style={{fontWeight: 600}} className="text-anime-style-3" data-cursor="-opaque">
                    Have Questions? We're Ready to Help
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                  A leading Trading Institute since 2017 build with four smart working individuals gathered together to bring this world the idea of Trading, the importance of Trading in each ones life and to provide them a better tomorrow which is our main focusing aim.We are planning to provide this busy world a complete interactive and live sessions with all necessary presentations and requirements.
                  </p>
                </div>

                <div className="contact-info-list">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="contact-info-item wow fadeInUp"
                      data-wow-delay={item.delay}
                    >
                      <div className="icon-box">
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="contact-item-content">
                        <p>{item.type}</p>
                        <h3>{item.content}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Image */}
              {/* <div className="contact-us-image">
                <div className="contact-us-img">
                  <figure className="image-anime">
                    <img src="/images/contact-us-image.jpg" alt="" />
                  </figure>
                </div>

                <div className="working-hours-box">
                  <div className="working-hours-header">
                    <h3>Working Hours:</h3>
                  </div>
                  <div className="working-hours-body">
                    <ul>
                      {workingHours.map((item, index) => (
                        <li key={index}>
                          {item.day}: <span>{item.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* End Contact Image */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
