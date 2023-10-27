import React from "react";
import Container from "react-bootstrap/esm/Container";

const Methodology = () => {
  return (
    <Container id="methodology" className="Methodology-container marginComp">
      <h2>
        <strong>Methodology</strong>
      </h2>
      <div className="row mt-3">
        <div id="project-scope-left" className="col-md-6 col-sm-12 pt-lg-5">
          <div className="section-left">
            <div className="section-figure">
              <img
                src="https://res.cloudinary.com/nibmsa/image/upload/v1698410615/MicrosoftTeams-image_qkslak.png"
                width="90%"
                alt="High Level Architecture of the system"
              />

              <p className="fs-12 mt-1">
                Figure 2. High Level Architecture of the system.
              </p>
            </div>
          </div>
        </div>
        <div
          id="project-scope-right"
          className="col-md-6 col-sm-12 pt-lg-5 text-justify"
        >
          <p>
            The High Level system diagram was divided into four main components.
          </p>
          <ol style={{ marginTop: 30 }}>
            <li>
              <strong>
                Identifying bell pepper leaves and whether the leaves are
                healthy or unhealthy.
              </strong>
            </li>
            <li>
              <strong>
                Identification of magnesium deficiency and powdery mildew in
                bell pepper leaves.
              </strong>
            </li>
            <li>
              <strong>
                Identifying progression levels of powdery mildew in bell pepper
                leaves.
              </strong>
            </li>
            <li>
              <strong>
                Identifying progression levels of magnesium deficiency in bell
                pepper leaves.
              </strong>
            </li>
          </ol>

          <p style={{ marginTop: 40 }}>
            The High level ystem diagram(F2) of the proposed solution, which
            aims to provide a smart approach for stakeholders, researchers, and
            Agriculture Development Officers (ADOs) to detect powdery mildew
            disease in bell pepper leaves, which may impact the bell pepper
            market. As depicted in the diagram, registered users of the system
            can capture or upload suspicious images. These images are then sent
            to the Amazon Web Services (AWS) backend server where the Flask
            server is deployed. The Flask server processes these images using
            the designed CNN models for disease progression level identification
            and classification. If the powdery mildew disease progression level
            in bell pepper leaves is identified, the symptom severity is
            determined using CNN models.
          </p>
          <p>
            In both the initial stage and the severity stage, the percentage of
            the infected disease is displayed. In the severity stage, users have
            the opportunity to contact an expert. Through Google Maps
            integration, nearby agriculture offices are displayed, and users can
            select a location to contact them. This feature enhances user
            engagement and ensures that users can seek expert advice when
            needed.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Methodology;
