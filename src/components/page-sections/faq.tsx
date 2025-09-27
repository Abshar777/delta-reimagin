import React from 'react';

export default function OurFaqs() {
  const faqItems = [
    {
      q: 'Q1.Are the classes online or offline?',
      a: 'Both options are available for all courses.',
      delay: '',
      show: false,
    },
    {
      q: 'Q2. What documents are needed to join?',
      a: 'Emirates ID or Passport for verification.',
      delay: '0.2s',
      show: true, // default opened
    },
    {
      q: 'Q3.Is there any hidden charge?',
      a: 'No. All fees are transparent and mentioned clearly.',
      delay: '0.4s',
      show: false,
    },
    {
      q: 'Q4. Can I upgrade to higher courses later?',
      a: 'Yes, after completing the first course and passing the eligibility exam.',
      delay: '0.6s',
      show: false,
    },
    {
      q: 'Q5. Do you give certificates?',
      a: 'Yes, completion certificates are provided for every course.',
      delay: '0.8s',
      show: false,
    },
  ];

  return (
    <div className="our-faqs">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            {/* FAQs Content Start */}
            <div className="faqs-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Frequently Asked Questions</h3>
                <h2   style={{ fontWeight: 600 }} className="text-anime-style-3" data-cursor="-opaque">
                  Browse our most asked questions
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We've compiled answers to the most common questions about our
                  lab services, research process, and capabilities.
                </p>
              </div>
              {/* Section Title End */}

              {/* Our Faqs Button Start */}
              <div className="our-faqs-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="faqs.html" className="btn-default">View All Faqs</a>
              </div>
              {/* Our Faqs Button End */}
            </div>
            {/* FAQs Content End */}
          </div>

          <div className="col-lg-7">
            {/* FAQ Accordion Start */}
            <div className="faq-accordion" id="accordion">
              {faqItems.map((item, index) => {
                const id = index + 1;
                return (
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay={item.delay || undefined}
                    key={id}
                  >
                    <h2 className="accordion-header" id={`heading${id}`}>
                      <button
                        className={`accordion-button${item.show ? '' : ' collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${id}`}
                        aria-expanded={item.show ? 'true' : 'false'}
                        aria-controls={`collapse${id}`}
                      >
                        {item.q}
                      </button>
                    </h2>
                    <div
                      id={`collapse${id}`}
                      className={`accordion-collapse collapse${item.show ? ' show' : ''}`}
                      aria-labelledby={`heading${id}`}
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* FAQ Accordion End */}
          </div>
        </div>
      </div>
    </div>
  );
}
