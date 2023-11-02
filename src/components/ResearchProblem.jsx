import React from "react";
import Container from "react-bootstrap/esm/Container";

const ResearchProblem = () => {
  return (
    <Container
      id="research-problem"
      className="ResearchProblem-container marginComp"
    >
      <h2>
        <strong>Research Problem & Solution</strong>
      </h2>
      <div className="row">
        <div
          className="col-md-6 col-sm-12 pt-lg-5 justify-text"
          id="project-scope-left"
        >
          <h5 style={{ color: "#006400", fontSize: 20, fontWeight: "bold" }}>
            <strong>Proposed Problem</strong>
          </h5>
          <br />
          <p style={{ textAlign: "justify" }}>
            The growth and yield of bell pepper plants are vulnerable to
            diseases and nutrient deficiencies in Sri Lanka. Powdery mildew and
            downy mildew can cause significant yield losses, while nutrient
            deficiencies, including nitrogen, phosphorus, potassium, calcium,
            magnesium, and iron, impact plant development. To address these
            issues, image processing techniques such as color segmentation and
            texture analysis are proposed, which face challenges in variable
            lighting conditions. Machine learning algorithms like support vector
            machines and convolutional neural networks are suggested for
            automating the identification of healthy and unhealthy bell pepper
            leaves. Successfully addressing this challenge is crucial for
            improving crop production and quality, reducing disease spread, and
            promoting sustainable agriculture, with implications for food
            security and sustainability.
          </p>
          <br />
        </div>
        <div className="col-md-6 col-sm-12 pt-lg-5" id="project-scope-right">
          <div className="section-left">
            <div className="section-figure">
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/KEMm_jbemcA?si=s33tg4wdya3MB4qK"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>Product Demonstration - Solution</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 style={{ color: "#006400", fontSize: 20, fontWeight: "bold" }}>
          <strong>Proposed Solution</strong>
        </h5>
        <br />
        <p style={{ textAlign: "justify" }}>
          Preventing and controlling diseases in bell pepper plants is critical
          to avoid substantial yield losses and maintain produce quality. In Sri
          Lanka, powdery mildew is a significant threat, causing yield losses of
          10-50% or more, especially if the infection is severe or occurs early
          in the growing season. Detecting diseases early is essential, and an
          intelligent detection and recognition system is proposed to assist
          farmers in identifying bell pepper plant diseases promptly. This
          system aims to prevent disease spread and its associated losses.
        </p>
        <p style={{ textAlign: "justify" }}>
          The proposed system focuses on four main diseases and four key
          components of bell pepper plants. It includes powdery mildew
          classification, tracking the progression of powdery mildew,
          identifying nutrient deficiencies in bell pepper plants by analyzing
          their leaves, specifically magnesium deficiency, and assessing overall
          nutrition deficiencies in the plants. The research project aims to
          develop a mobile app that utilizes image processing for disease and
          deficiency identification. Users can input images, and the app
          provides solutions for the detected disease and nutrient deficiencies.
        </p>
        <p style={{ textAlign: "justify" }}>
          In summary, the proposed intelligent system offers an efficient means
          to detect and classify bell pepper plant diseases and nutrient
          deficiencies. It can serve as a proactive strategy for farmers to
          mitigate losses by catching issues early and implementing appropriate
          measures. This approach is particularly relevant in the context of Sri
          Lanka's bell pepper farming, where powdery mildew poses a significant
          threat to crop yield and quality, potentially leading to rejection by
          buyers.
        </p>
      </div>
    </Container>
  );
};

export default ResearchProblem;
