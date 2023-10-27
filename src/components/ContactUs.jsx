import React from "react";
import Container from "react-bootstrap/esm/Container";

const ContactUs = () => {
  return (
    <Container id="contact" className="contactus-container marginComp mt-5">
      <div className="container">
        <h5 className="section-title">Contact Us</h5>
        <div className="sub-section">
          <h2>
            <strong>Get in Touch</strong>
          </h2>
          <div className="row mt-sm-5">
            <div className="col-md-6 col-sm-12 contact-form">
              <form method="post" encType="text/plain">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Roshel Perera"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message or Query</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btncolorgradient"
                  style={{
                    backgroundColor: "#228b22",
                    color: "white",
                    width: "100%",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
            <div
              className="col-md-6 col-sm-12 contact-details"
              style={{
                textAlign: "center",
                marginTop: "-150px",
              }}
            >
              <div>
                <img
                  src="https://res.cloudinary.com/desnqqj6a/image/upload/v1698303467/contactUs_gje7wy.png"
                  alt=""
                  style={{ width: "70%" }}
                />

                <p>
                  <strong>Contact Details</strong>
                </p>
                <p>
                  For further queries please reach us at{" "}
                  <a href="test">pepperpalresearch2023@gmail.com</a>
                </p>
                <p>Hope this project helped you in some manner. Thank you!</p>
                <p>- Team Pepper Pal -</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
