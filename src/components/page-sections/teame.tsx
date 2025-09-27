import React from 'react';

export default function OurTeam() {
  const teamMembers = [
    {
      name: 'Praveen',
      image: 'https://deltatradinghub.com/assets/images/DSC05102%20(1).jpg',
      desc: `Mr. Praveen Pathiyil is a mentor at Delta Institution. He is a
            SEBI registered Research Analyst from India`,
      delay: '',
    },
    {
      name: 'Raghav Selvaraj',
      image: 'https://deltatradinghub.com/assets/images/DSC05306%20(22).jpg',
      desc: `He is a long-term Stock Analyst, expert in Derivatives,
            Portfolio Manager, Strategist, and a Bot Developer`,
      delay: '0.2s',
    },
    {
      name: 'Midlaj',
      image: 'https://deltatradinghub.com/assets/images/DSC05446%20(1).jpg',
      desc: `Midlaj is an accomplished Forex Currency Trader, Strategic
            Developer, Chartered Financial Analyst, and Strategic Manager`,
      delay: '0.4s',
    },
    {
      name: 'M J Rahman',
      image: 'https://deltatradinghub.com/assets/images/DSC05220%20(1).jpg',
      desc: `He is 5 years experience in both cryptocurrency and forex
            trading, He works as a Blockchain Developer, Web3 Analyst,
            Consultant, and Trader`,
      delay: '0.6s',
    },
  ];

  return (
    <div className="our-team">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our team</h3>
              <h2   style={{ fontWeight: 600 }} className="text-anime-style-3" data-cursor="-opaque">
                Collaboration at the core of innovation
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              {/* Team Member Item Start */}
              <div
                className="team-item wow fadeInUp"
                data-wow-delay={member.delay || undefined}
              >
                {/* Team Image Start */}
                <div className="team-image">
                  <a href="team-single.html">
                    <figure className='reveal relative overflow-hidden image-anime'>
                      <img src={member.image} alt="" />
                    </figure>
                  </a>

                  {/* Team Social Icon Start (kept commented as in original) */}
                  {/* <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  {/* Team Social Icon End */}
                </div>
                {/* Team Image End */}

                {/* Team Content Start */}
                <div className="team-content">
                  <h3>
                    <a href="team-single.html">{member.name}</a>
                  </h3>
                  <p>{member.desc}</p>
                </div>
                {/* Team Content End */}
              </div>
              {/* Team Member Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
