import React from 'react';

export default function MainFooter() {
  const quickLinks = [
    { name: 'home', href: 'index-2.html' },
    { name: 'about us', href: 'about.html' },
    { name: 'Services', href: 'services.html' },
    { name: 'Contact Us', href: 'contact.html' },
  ];

  const courses = [
    'Market Break Out',
    'Market Making Cycle',
    'WD Gann Astro',
    'HADC',
    'Gann Intermediate',
  ];

  const socialLinks = [
    {
      icon: 'fa-brands fa-linkedin',
      href: 'https://www.linkedin.com/company/delta-international-academy/mycompany/?viewAsMember=true',
    },
    {
      icon: 'fa-brands fa-facebook-f',
      href: 'https://www.facebook.com/profile.php?id=100084051907653',
    },
    {
      icon: 'fa-brands fa-instagram',
      href: 'https://instagram.com/delta_international_institute?igshid=YmMyMTA2M2Y=',
    },
    {
      icon: 'fa-brands fa-twitter',
      href: 'https://twitter.com/deltainternati3',
    },
    {
      icon: 'fa-brands fa-youtube',
      href: 'https://www.youtube.com/channel/UCrxRRxzEy84uX-MZqxFSy2g',
    },
  ];

  const contactItems = [
    {
      icon: 'images/icon-mail-white.svg',
      content: (
        <a href="mailto:info@deltainstitutions.com">info@deltainstitutions.com</a>
      ),
    },
    {
      icon: 'images/icon-phone-white.svg',
      content: <a href="tel:+97143999128">+971 4 399 9128</a>,
    },
    {
      icon: 'images/icon-location-white.svg',
      content: (
        <>
          metro station ,Corniche - One Deira, 4th floor - Office number 410 - Gold
          Souq - Deira - Dubai - United Arab Emirates
        </>
      ),
    },
  ];

  return (
    <footer className="main-footer bg-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            {/* About Footer Start */}
            <div className="about-footer">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <img src="/images/my/logo.webp" alt="" />
              </div>
              {/* Footer Logo End */}

              {/* About Footer Content Start */}
              <div className="about-footer-content">
                <p>
                  Delta International Institute offers expert-led Forex, Crypto
                  and Market courses with transparent fees and global mentors.
                  Start learning online or offline today.
                </p>
              </div>
              {/* About Footer Content End */}
            </div>
            {/* About Footer End */}
          </div>

          <div className="col-lg-2 col-md-3">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>quick links</h3>
              <ul>
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-3 col-md-4">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Courses</h3>
              <ul>
                {courses.map((course, i) => (
                  <li key={i}>
                    <a href="service-single.html">{course}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-3 col-md-5">
            {/* Footer Contact Box Start */}
            <div className="footer-contact-box footer-links">
              <h3>contact us</h3>

              {contactItems.map((item, i) => (
                <div className="footer-contact-item" key={i}>
                  <div className="icon-box">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="footer-contact-content">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Footer Contact Box End */}
          </div>

          <div className="col-lg-12">
            {/* Footer Social Links Start */}
            <div className="footer-social-link">
              <hr />
              <ul>
                {socialLinks.map((social, i) => (
                  <li key={i}>
                    <a href={social.href}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
              <hr />
            </div>
            {/* Footer Social Links End */}
          </div>
        </div>

        {/* Footer Copyright Section Start */}
        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* Footer Copyright Start */}
              <div className="footer-copyright-text">
                <p>Copyright © 2025 All Rights Reserved.</p>
              </div>
              {/* Footer Copyright End */}
            </div>

            <div className="col-md-6">
              {/* Footer Terms Condition Start */}
              <div className="footer-terms-condition">
                <ul>
                  <li><a href="#">privacy policy</a></li>
                  <li><a href="#">terms & conditions</a></li>
                </ul>
              </div>
              {/* Footer Terms Condition End */}
            </div>
          </div>
        </div>
        {/* Footer Copyright Section End */}
      </div>
    </footer>
  );
}
