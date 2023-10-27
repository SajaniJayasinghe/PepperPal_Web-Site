import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FaSearch } from "react-icons/fa";
import { AiOutlineRise, AiFillMessage } from "react-icons/ai";
import "./ResearchGap.scss";

const ResearchGap = () => {
  return (
    <Container className="ResearchGap-container marginComp" id="research-gap">
      <div className="sub-section">
        <h2>
          <strong>Research Gap</strong>
        </h2>
        <p>
          Following areas are the research gaps found in most of the recent
          researches.
        </p>
        <div className="row mt-5 research-gap">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="fa-container text-center">
                  <FaSearch />
                </div>
                <div className="text-center" style={{ paddingTop: "20px" }}>
                  <h5 className="fw-700" style={{ color: "#056608" }}>
                    Identification & classification
                  </h5>
                </div>
                <div>
                  <p style={{ textAlign: "justify" }}>
                    In Sri Lanka, there is a lack of documented smart solutions
                    for the identification and classification of powdery mildew
                    disease and magnesium deficiency in bell pepper leaves. The
                    similarity in the characteristic appearance of symptoms
                    between powdery mildew disease and bell pepper disorders
                    poses a significant challenge in finding a solution.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fa-container text-center">
                  <AiOutlineRise />
                </div>
                <div className="text-center" style={{ paddingTop: "20px" }}>
                  <h5 className="fw-700" style={{ color: "#056608" }}>
                    Severity assessment
                  </h5>
                </div>
                <div>
                  <p style={{ textAlign: "justify" }}>
                    A smart solution for the identification and classification
                    of powdery mildew disease and magnesium deficiency in bell
                    pepper leaves has been reported in China and India. However,
                    no attempts have been made to assess the severity of the
                    disease condition and the progression level of damage caused
                    by powdery mildew disease.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fa-container text-center">
                  <AiFillMessage />
                </div>
                <div className="text-center" style={{ paddingTop: "20px" }}>
                  <h5 className="fw-700" style={{ color: "#056608" }}>
                    Information sharing
                  </h5>
                </div>
                <div>
                  <p style={{ textAlign: "justify" }}>
                    The identified priority need for effective control of
                    powdery mildew disease and magnesium deficiency in bell
                    pepper leaves is a real-time communication system that
                    accelerates information sharing among bell pepper growers,
                    extension personnel, and researchers. This system is
                    essential for streamlining the exchange of information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResearchGap;
