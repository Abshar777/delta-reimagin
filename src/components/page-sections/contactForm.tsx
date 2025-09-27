"use client";
import React, { useState } from "react";
import { toast } from "sonner";

const ContactFormMap: React.FC = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const url =
    "https://script.google.com/macros/s/AKfycbzXEOUJkP-NDIvxze1zw1K2iP_sGmVxh2x0QyhgL0llOx1scj51t0zQHvt7oZHGZgMGUw/exec";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      await fetch(url, {
        method: "POST",

        body: JSON.stringify({
          Name: formData.fname,
          Email: formData.email,
          PhoneNumber: formData.phone,
          Message: formData.message,
        }),
      });
      toast.success("Message sent successfully");
      setFormData({
        ...formData,
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Message sent failed");
    } finally {
      setIsLoading(false);
    }
  };

  const [isValidPhone, setIsValidPhone] = useState(false);

  // Format input and validate
  const phoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (input.startsWith("91")) {
      input = input.substring(2); // remove extra 91 if typed
    }

    if (input.length > 10) input = input.substring(0, 10); // max 10 digits after +91

    let formatted = "+91";
    if (input.length > 0) formatted += "-" + input.substring(0, 5);
    if (input.length > 5) formatted += "-" + input.substring(5);

    setFormData({ ...formData, phone: formatted });

    // Validation: Ensure 10  digits are present

    setIsValidPhone(true);
  };

  return (
    <div className="contact-form-map">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-form-box">
              {/* Contact Form */}
              <div className="contact-us-form">
                <div className="section-title">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Get in touch with us
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    We're here to answer your questions & explore new
                    possibilities together.
                  </p>
                </div>

                <div
                  className="contact-form wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <form id="contactForm" onSubmit={handleSubmit} noValidate>
                    <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="fname"
                          className="form-control"
                          placeholder="First Name"
                          value={formData.fname}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="lname"
                          className="form-control"
                          placeholder="Last Name"
                          value={formData.lname}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={phoneNumberChange}
                          required
                        />
                      </div>

                      <div className="form-group col-md-12 mb-5">
                        <textarea
                          name="message"
                          className="form-control"
                          rows={4}
                          placeholder="Message..."
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-12">
                        <button
                          disabled={isLoading || !isValidPhone}
                          type="submit"
                          className="btn-default btn-highlighted"
                        >
                          {isLoading ? (
                            <span>
                              <i className="fa-solid fa-spinner fa-spin"></i>
                            </span>
                          ) : (
                            <span data-hover="Send Message">Send Message</span>
                          )}
                        </button>
                        <div id="msgSubmit" className="h3 hidden"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Google Map */}
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57725.2151359789!2d55.22574504863279!3d25.276439900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43ed32d6d1f5%3A0x30c3aca3a1569a9e!2sDelta%20Trading%20Hub!5e0!3m2!1sen!2sin!4v1758971647698!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                  style={{ width: "100%", height: "100%", border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormMap;
