import React from 'react';

export default function OurTestimonials() {
  const testimonials = [
    {
      text: `“There is a lot to say about delta. I came to know
        about delta international from my friend. good
        institute to learn trading for beginners. you can be a
        professional trader from a beginning stage.”`,
      name: 'Dhanyesh Das',
      email: 'dhanyeshdas@gmail.com',
      image: 'images/test/1.png',
    },
    {
      text: `“An excellent platform for learning about stock
        market. Proud to be a part of delta's trading
        community. All team members are very helpful. Awesome
        teachers are there for beginners .”`,
      name: 'Praveen m Nair',
      email: 'praveennair877@gmail.com',
      image: 'images/test/2.png',
    },
    {
      text: `“One of the best decisions i took that i joined here ,
        the trainers are great and the community is like a big
        lovely family. The doubts are cleared could be cleared
        at any time. The live and post market session helped
        me a lot as a trader.”`,
      name: 'Muhammed Thayyib',
      email: 'thayyib926@gmail.com',
      image: 'images/test/4.png',
    },
    {
      text: `“Whatever be your profession and if you don't know
        trading or stockmarket i highly recommend to join
        delta international. It is not just a trading coaching
        institute it makes you feel you are a member of the
        family.”`,
      name: 'Mufaddal Tariq',
      email: 'mufaddaltariq7@gmail.com',
      image: 'images/test/3.png',
    },
  ];

  return (
    <div className="our-testimonials bg-section dark-section">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">our testimonials</h3>
              <h2   style={{ fontWeight: 600 }} className="text-anime-style-3" data-cursor="-opaque">
                Our Students Say About Us
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Testimonial Slider Start */}
            <div className="testimonial-slider">
              <div className="swiper">
                <div className="swiper-wrapper" data-cursor-text="Drag">
                  {testimonials.map((t, i) => (
                    <div className="swiper-slide" key={i}>
                      <div className="testimonial-item">
                        <div className="testimonial-quote">
                          <img src="/images/testimonial-quote.svg" alt="" />
                        </div>
                        <div className="testimonial-content">
                          <p>{t.text}</p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src={t.image} alt="" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>{t.name}</h3>
                            <p>{t.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial Btn Start */}
                <div className="testimonial-btn">
                  <div className="testimonial-button-prev"></div>
                  <div className="testimonial-button-next"></div>
                </div>
                {/* Testimonial Btn End */}
              </div>
            </div>
            {/* Testimonial Slider End */}
          </div>
        </div>
      </div>
    </div>
  );
}
