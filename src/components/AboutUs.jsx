import React from "react";
import Container from "react-bootstrap/esm/Container";

const AboutUs = () => {
  return (
    <Container id="about" className="about-container marginComp mt-5">
      <div className="container">
        <h5 className="section-title">About Us</h5>
        <div className="sub-section">
          <h2>
            <strong>Meet Our Team !</strong>
          </h2>
          <div className="row mt-sm-5">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card about-us-card">
                <img
                  src={process.env.PUBLIC_URL + "/images/hansi.jpg"}
                  className="about-us-image supervisor"
                  alt="Ms. Hansi De Silva"
                  height="20%"
                />
                <div className="card-body">
                  <h5 className="card-title">Ms. Hansi De Silva</h5>
                  <br />
                  <span className="badge badge-secondary">Supervisor</span>
                  <div className="text-group">
                    <p>Sri Lanka Institute of Information Technology</p>
                  </div>
                  <div className="text-group">
                    <p>
                      <strong>Department</strong>
                    </p>
                    <p>Computer Science & Software Engineering</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      className="card-text mr-4"
                      style={{ cursor: "pointer" }}
                      href="https://scholar.google.com/citations?user=iwbzstMAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      G-Scholar
                    </a>
                    <a
                      className="card-text"
                      style={{ cursor: "pointer" }}
                      href="hansi.d@sliit.lk"
                    >
                      E-Mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card about-us-card">
                <img
                  src={process.env.PUBLIC_URL + "/images/sathira.jpg"}
                  className="about-us-image cosupervisor"
                  alt="Mr. Sathira Hettiarachchi"
                  height="20%"
                />
                <div className="card-body">
                  <h5 className="card-title">Mr. Sathira Hettiarachchi</h5>
                  <br />
                  <span className="badge badge-secondary">Co-Supervisor</span>
                  <div className="text-group">
                    <p>Sri Lanka Institute of Information Technology</p>
                  </div>
                  <div className="text-group">
                    <p>
                      <strong>Department</strong>
                    </p>
                    <p>Computer Science & Software Engineering</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      className="card-text mr-4"
                      style={{ cursor: "pointer" }}
                      href="https://scholar.google.com/citations?user=_baL5EsAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      G-Scholar
                    </a>
                    <a
                      className="card-text"
                      style={{ cursor: "pointer" }}
                      href="sathira.h@sliit.lk"
                    >
                      E-Mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-sm-5" style={{ justifyContent: "center" }}>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card about-us-card">
                <img
                  src={process.env.PUBLIC_URL + "/images/aroshini.jpeg"}
                  className="about-us-image"
                  alt="Dissanayake D.M.A.A"
                  height="20%"
                />
                <div className="card-body">
                  <h5 className="card-title">Dissanayake D.M.A.A</h5>
                  <br />
                  <span className="badge badge-secondary">Group Leader</span>
                  <div className="text-group">
                    <p>
                      <strong>Undergraduate</strong>
                    </p>
                    <p>Sri Lanka Institute of Information Technology</p>
                  </div>
                  <div className="text-group">
                    <p>
                      <strong>Department</strong>
                    </p>
                    <p>Software Engineering</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      className="card-text mr-4"
                      style={{ cursor: "pointer" }}
                      href="https://www.linkedin.com/in/aroshinidissanayake/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="card-text"
                      style={{ cursor: "pointer" }}
                      href="arodissanayake8@gmail.com"
                    >
                      E-Mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card about-us-card">
                <img
                  src={process.env.PUBLIC_URL + "/images/imaya.jpeg"}
                  className="about-us-image"
                  alt="Rajapaksha I.S"
                  height="20%"
                />
                <div className="card-body">
                  <h5 className="card-title">Rajapaksha I.S</h5>
                  <br />
                  <span className="badge badge-secondary">Group Member</span>
                  <div className="text-group">
                    <p>
                      <strong>Undergraduate</strong>
                    </p>
                    <p>Sri Lanka Institute of Information Technology</p>
                  </div>
                  <div className="text-group">
                    <p>
                      <strong>Department</strong>
                    </p>
                    <p>Software Engineering</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      className="card-text mr-4"
                      style={{ cursor: "pointer" }}
                      href="https://www.linkedin.com/in/imaya-rajapaksha-55741a1b6/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="card-text"
                      style={{ cursor: "pointer" }}
                      href="imarajapaksha99@gmail.com"
                    >
                      E-Mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card about-us-card">
                <img
                  src={process.env.PUBLIC_URL + "/images/randima.jpeg"}
                  className="about-us-image"
                  alt="Gunarathna W.R.D"
                  height="20%"
                />
                <div className="card-body">
                  <h5 className="card-title">Gunarathna W.R.D</h5>
                  <br />
                  <span className="badge badge-secondary">Group Member</span>
                  <div className="text-group">
                    <p>
                      <strong>Undergraduate</strong>
                    </p>
                    <p>Sri Lanka Institute of Information Technology</p>
                  </div>
                  <div className="text-group">
                    <p>
                      <strong>Department</strong>
                    </p>
                    <p>Software Engineering</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      className="card-text mr-4"
                      style={{ cursor: "pointer" }}
                      href="https://www.linkedin.com/in/randima-dilshani/"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="card-text"
                      style={{ cursor: "pointer" }}
                      href="randimadilshani98@gmail.com"
                    >
                      E-Mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card about-us-card">
                <img
                  src={process.env.PUBLIC_URL + "/images/sajani.jpeg"}
                  className="about-us-image"
                  alt="Jayasinghe S.S"
                  height="20%"
                />
                <div className="card-body">
                  <h5 className="card-title">Jayasinghe S.S</h5>
                  <br />
                  <span className="badge badge-secondary">Group Member</span>
                  <div className="text-group">
                    <p>
                      <strong>Undergraduate</strong>
                    </p>
                    <p>Sri Lanka Institute of Information Technology</p>
                  </div>
                  <div className="text-group">
                    <p>
                      <strong>Department</strong>
                    </p>
                    <p>Software Engineering</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      className="card-text mr-4"
                      style={{ cursor: "pointer" }}
                      href="https://www.linkedin.com/in/sajani-jayasinghe/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="card-text"
                      style={{ cursor: "pointer" }}
                      href="jayasinghesajani98@gmail.com"
                    >
                      E-Mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
