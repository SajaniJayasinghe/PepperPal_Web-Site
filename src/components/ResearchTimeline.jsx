import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ResearchTimeline.scss";

const ResearchTimeline = () => {
  // Dummy data array
  const researchData = [
    {
      id: 1,
      title:
        "🎯   	Identifying bell pepper leaves and whether the leaves are healthy or unhealthy",
      description:
        "In the pursuit of implementing the first component, the core focus lies in the seamless recognition of bell pepper leaves within uploaded images. This algorithm stands out in its precision to distinctly identify bell pepper leaves, even in the presence of other plant species. Following the successful identification, the crucial next step is to categorize these leaves as either healthy or unhealthy. The primary goal here is to effectively distinguish leaves that show signs of diseases or nutrient deficiencies from those that are flourishing in a state of optimal health. This precision-driven process paves the way for informed and timely interventions, ensuring the well-being and productivity of bell pepper crops.",
    },
    {
      id: 2,
      title:
        "🎯  	Identification of magnesium deficiency and powdery mildew in bell pepper leaves",
      description:
        "Identifying magnesium deficiency and powdery mildew in bell pepper leaves is crucial for modern agriculture. Magnesium deficiency can cause subtle discolorations and leaf damage, while powdery mildew exhibits hard-to-detect white spots on leaves. Using advanced technologies like Convolutional Neural Networks (CNNs), automated diagnosis becomes possible. CNNs excel at feature extraction and pattern recognition, making them highly effective for this task. This approach, based on deep learning and computer vision, enables accurate and timely detection of crop issues, empowering farmers to take proactive measures to ensure the health and productivity of bell pepper crops.",
    },
    {
      id: 3,
      title:
        "🎯 	Identifying progression levels of powdery mildew in bell pepper leaves.",
      description:
        "The third objective of this study is to develop a comprehensive solution for addressing identifying progression levels powdery mildew in bell pepper leaves. This solution involves not only identifying the disease's progression levels and distinguishing its symptoms from other conditions but also determining the severity stage and providing accurate severity percentage data. Additionally, the system will have the capability to notify the appropriate authorities promptly. This integrated approach is designed to expedite the implementation of effective control measures, ultimately preventing the potential outbreak of powdery mildew disease.",
    },
    {
      id: 4,
      title:
        "🎯  	Identifying progression levels of magnesium deficiency in bell pepper leaves.",
      description:
        "Detecting and managing magnesium deficiency in bell pepper plants is crucial for optimal crop yield. Recent research focuses on precise and early identification, offering a comprehensive approach that not only assesses deficiency progression and distinguishes it from other leaf issues but also provides information on severity levels and precise severity percentage data. This holistic system not only pinpoints magnesium deficiency but also offers tailored remedies for each stage, empowering farmers to understand its development and impact. This enables timely intervention with effective measures to ensure healthy crop growth and fruit quality.",
    },
  ];

  return (
    <Container
      id="research-objectives"
      className="ResearchTimeline-container marginComp"
    >
      <h2 className="pb-5 pt-5 text-center display-5">
        <strong>Research Objectives</strong>
      </h2>

      <Row className="align-items-stretch d-flex">
        {researchData.map((item) => (
          <Col key={item.id} sm={6} className="mb-4">
            <Card className="d-flex flex-column h-100 p-5">
              <Card.Body>
                <div className="circle font-weight-bold"></div>
                <Card.Title>
                  <strong>{item.title}</strong>
                </Card.Title>
                <Card.Text style={{ textAlign: "justify", marginTop: "20px" }}>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResearchTimeline;
