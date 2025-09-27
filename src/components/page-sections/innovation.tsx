import React from "react";

const OurInnovation: React.FC = () => {
  return (
    <div className="our-innovation">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Our Innovation Content Start */}
            <div className="our-innovation-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Our innovation</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  What make our laboratory truly stand apart
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  we stand out through our dedication to excellence, innovation, and scientific integrity. Our lab brings together cutting-edge technology,
                </p>
              </div>
              {/* Section Title End */}

              {/* Innovation Skill List Start */}
              <div className="innovation-skill-list">
                {/* Skills Progress Bar Start */}
                <div className="skills-progress-bar">
                  {/* Skill Item Start */}
                  <div className="skillbar" data-percent="75%">
                    <div className="skill-data">
                      <div className="skill-title">Data Accuracy</div>
                      <div className="skill-no">75%</div>
                    </div>
                    <div className="skill-progress">
                      <div className="count-bar"></div>
                    </div>
                  </div>
                  {/* Skill Item End */}
                </div>
                {/* Skills Progress Bar End */}

                {/* Skills Progress Bar Start */}
                <div className="skills-progress-bar">
                  {/* Skill Item Start */}
                  <div className="skillbar" data-percent="85%">
                    <div className="skill-data">
                      <div className="skill-title">Experimental Reliability</div>
                      <div className="skill-no">85%</div>
                    </div>
                    <div className="skill-progress">
                      <div className="count-bar"></div>
                    </div>
                  </div>
                  {/* Skill Item End */}
                </div>
                {/* Skills Progress Bar End */}
              </div>
              {/* Innovation Skill List End */}
            </div>
            {/* Our Innovation Content End */}
          </div>

          <div className="col-lg-6">
            {/* Our Innovation Image Start */}
            <div className="our-innovation-image">
              {/* Our Innovation Image 1 Start */}
              <div className="our-innovation-img-1">
                <figure className="image-anime">
                  <img src="/images/our-innovation-image-1.jpg" alt="" />
                </figure>
              </div>
              {/* Our Innovation Image 1 End */}

              {/* Our Innovation Image 2 Start */}
              <div className="our-innovation-img-2">
                <figure className="image-anime">
                  <img src="/images/our-innovation-image-2.jpg" alt="" />
                </figure>
              </div>
              {/* Our Innovation Image 2 End */}

              {/* Customer Review Box Start */}
              <div className="customer-review-box">
                <div className="icon-box">
                  <i className="fa-solid fa-star"></i>
                </div>

                <div className="customer-review-box-content">
                  <h2><span className="counter">27</span>k</h2>
                  <p>customer reviewd</p>
                </div>
              </div>
              {/* Customer Review Box End */}
            </div>
            {/* Our Innovation Image End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInnovation;
