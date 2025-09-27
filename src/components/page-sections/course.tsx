export default function CoursesSection() {
    return (
      <div className="we-choose-us">
        <div className="container">
          <div className="row section-row">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our Courses</h3>
              <h2 className="text-anime-style-3"   style={{ fontWeight: 600 }} data-cursor="-opaque">
                Forex Market Courses
              </h2>
            </div>
            {/* Section Title End */}
          </div>
  
          {/* We Choose Us Box Start */}
          <div className="we-choose-us-box">
            <div className="row no-gutters align-items-center">
              <div className="col-lg-6">
                {/* We Choose Box Start */}
                <div className="we-choose-box-1">
                  {/* We Choose Item Start */}
                  <div className="we-choose-item wow fadeInUp">
                    <div className="icon-box">
                      <img src="/images/icon-why-us-1.svg" alt="" />
                    </div>
                    <div className="we-choose-content">
                      <h3>
                        Market Break Out / <span>2204 AED </span>
                      </h3>
                    </div>
                  </div>
                  {/* We Choose Item End */}
  
                  <div
                    className="we-choose-item wow fadeInUp"
                    data-wow-delay="0.25s"
                  >
                    <div className="icon-box">
                      <img src="/images/icon-why-us-2.svg" alt="" />
                    </div>
                    <div className="we-choose-content">
                      <h3>
                        Delta Wave Theory / <span>7348 AED </span>
                      </h3>
                    </div>
                  </div>
  
                  <div
                    className="we-choose-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon-box">
                      <img src="/images/icon-why-us-3.svg" alt="" />
                    </div>
                    <div className="we-choose-content">
                      <h3>
                        Market Making Cycle / <span>12859 AED </span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* We Choose Box End */}
              </div>
  
              <div className="col-lg-6">
                <div className="we-choose-box-2 bg-section dark-section">
                  <div className="we-choose-item wow fadeInUp">
                    <div className="icon-box">
                      <img src="/images/icon-why-us-4.svg" alt="" />
                    </div>
                    <div className="we-choose-content">
                      <h3>
                        WD Gann Astro / <span>36740 AED </span>
                      </h3>
                    </div>
                  </div>
  
                  <div
                    className="we-choose-item wow fadeInUp"
                    data-wow-delay="0.25s"
                  >
                    <div className="icon-box">
                      <img src="/images/icon-why-us-5.svg" alt="" />
                    </div>
                    <div className="we-choose-content">
                      <h3>
                        HADC / <span>2500 AED </span>
                      </h3>
                    </div>
                  </div>
  
                  <div
                    className="we-choose-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon-box">
                      <img src="/images/icon-why-us-6.svg" alt="" />
                    </div>
                    <div className="we-choose-content">
                      <h3>
                        Gann Intermediate / <span>12859 AED </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col-lg-12">
                <div className="we-choose-image">
                  <img
                    src="/images/my/DELTA_wAqfolkA_20240701052511-removebg-preview (1).png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* We Choose Us Box End */}
        </div>
      </div>
    );
  }
  