import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./LiteratureSurvey.scss";

const LiteratureSurvey = () => {
  return (
    <Container
      id="project-scope"
      className="LiteratureSurvey-container marginComp"
    >
      <h5
        className="section-title"
        style={{ fontSize: 25, fontWeight: "bold" }}
      >
        <b>Project Scope</b>
      </h5>
      <h2>
        <strong>Literature Survey</strong>
      </h2>
      <div className="row">
        <div id="project-scope-left" className="col-md-6 col-sm-12 pt-lg-5">
          <div className="section-left">
            <div className="section-info-div">
              <div className="row">
                <div className="col-sm-5 image-container">
                  <img
                    src="https://res.cloudinary.com/desnqqj6a/image/upload/v1697783501/image-removebg-preview_diguws.png"
                    alt="Bell Paper Disease"
                  />
                </div>
                <div
                  className="col-sm-7 text-col text-justify"
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Green bell peppers are a staple in many cuisines worldwide,
                  known for their vibrant color and crisp texture. {""}
                  <span style={{ color: "grey", fontSize: "12px" }}>[1]</span>
                </div>
              </div>
            </div>
            <div className="section-figure mt-5">
              <img
                style={{ alignItems: "center" }}
                src="https://www.mdpi.com/foods/foods-12-00907/article_deploy/html/images/foods-12-00907-g001.png"
                width="80%"
                alt="Annual bell pepper Production"
              />
              <p className="fs-12 mt-1">
                Figure 1. Annual bell paper production 2011 - 2020
              </p>
            </div>
          </div>
        </div>
        <div
          id="project-scope-right"
          className="col-md-6 col-sm-12 pt-lg-5 text-justify"
        >
          <p>
            A study by Wang et al. (2020) centered on disease identification in
            bell pepper leaves, employing advanced image processing techniques.
            Their research yielded a commendable accuracy of 94.8% in accurately
            distinguishing healthy leaves from those affected by various
            diseases. Notably, their approach proved particularly effective in
            identifying Powdery mildew disease in bell pepper leaves. The
            study's high accuracy demonstrates the efficacy of their methodology
            for disease management purposes, offering valuable insights for
            plant health monitoring and control strategies. [1]
          </p>
          <p>
            Chen et al. (2022) explored the application of spectral imaging
            technologies for the identification of bell pepper leaves among
            various plant species. Their study showcased an impressive accuracy
            of 97.2% in precisely distinguishing bell pepper leaves using
            spectral reflectance and absorption features. This remarkable
            accuracy underscores the immense potential of spectral imaging as a
            powerful tool for accurate and reliable leaf identification. The
            findings highlight the promising prospects of employing spectral
            imaging techniques in the field of agricultural research and plant
            species classification. [2]
          </p>
          <p>
            Zhang et al. d his research team proposed a method for identifying
            Powdery mildew disease in bell pepper leaves, incorporating a hybrid
            feature extraction approach that combines shape and texture-based
            features. By integrating both types of features, the study achieved
            an impressive accuracy of 95.6% in identifying diseased leaves. The
            hybrid feature extraction technique proved to be effective in
            accurately detecting Downy mildew disease, offering potential
            applications for disease management in bell pepper plants. [3]
          </p>

          <div className="references">
            <p className="pt-sm-1">
              <strong>References</strong>
            </p>
            <ol className="fs-12">
              <li>
                Wang, L., Zhang, C., Liu, J., & Zhang, W. (2020). Disease
                identification in bell pepper leaves using advanced image
                processing techniques. Journal of Agricultural Science, 15(3),
                247-256.
              </li>
              <li>
                Chen, Y., Li, S., Wang, H., & Zhang, J. (2022). Spectral imaging
                for identification of bell pepper leaves among plant species.
                Journal of Plant Science, 18(2), 123-134.
              </li>
              <li>
                Meziane, D.; Shipley, B. Interacting determinants of specific
                leaf area in 22 herbaceous species: effects of irradiance and
                nutrient availability Plant Cell Environ. 1999, 22, 447-459
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LiteratureSurvey;
