import React from "react";

const PageHeader = ({title, breadcrumb}: {title: string, breadcrumb: string}) => {
  return (
    <div style={{
      backgroundImage: `url(${"/images/my/aboutus.png"})`,
    }} className="page-header parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Page Header Box Start */}
            <div className="page-header-box">
              <h1 className="text-anime-style-3" data-cursor="-opaque">
                {title}
              </h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    {breadcrumb}
                  </li>
                </ol>
              </nav>
            </div>
            {/* Page Header Box End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
