import React from "react";
import Container from "react-bootstrap/esm/Container";

const Technologies = () => {
  const dummyData = [
    {
      id: 1,
      imageSrc:
        "https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png?w=750&h=750&q=100&fm=png",
      text: "Python",
    },
    {
      id: 2,
      imageSrc:
        "https://res.cloudinary.com/nibmsa/image/upload/v1698412255/google-tensor-flow-logo-black-S-removebg-preview_kadpja.png",
      text: "Tensorflow",
    },
    {
      id: 3,
      imageSrc:
        "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
      text: "Flutter",
    },
    {
      id: 4,
      imageSrc:
        "https://res.cloudinary.com/nibmsa/image/upload/v1698412884/e5908de7a7b0e69caae8a8ade5ae9a-1_kohfnv.jpg",
      text: "Keras",
    },
    {
      id: 5,
      imageSrc:
        "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png",
      text: "Firebase",
    },
    {
      id: 6,
      imageSrc:
        "data:image/png;base64,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",
      text: "Google Cloud",
    },
    {
      id: 7,
      imageSrc:
        "https://raw.githubusercontent.com/docker-library/docs/c350af05d3fac7b5c3f6327ac82fe4d990d8729c/docker/logo.png",
      text: "Doker",
    },
    {
      id: 8,
      imageSrc:
        "data:image/png;base64,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",
      text: "Google Colab",
    },
    {
      id: 9,
      imageSrc: "https://cdn.24net.cz/1/obrazek/ikonka-204235",
      text: "Google map API",
    },
    {
      id: 10,
      imageSrc:
        "https://res.cloudinary.com/nibmsa/image/upload/v1698413282/images-removebg-preview_nps0l2.png",
      text: "JWT",
    },
  ];

  return (
    <Container
      id="technologies"
      className="Technologies-container marginComp mt-5"
    >
      <h2>
        <strong>Technologies Used</strong>
      </h2>
      <div className="row technology mt-5">
        {dummyData.map((item) => (
          <div key={item.id} className="col-md-2 col-sm-4 col-6 mb-5">
            <div
              className="technologies-list"
              style={{ width: "150px", height: "150px" }}
            >
              <img src={item.imageSrc} alt={item.text} className="img-fluid" />
            </div>
            <p
              className="text-center fs-20 fw-400 mt-3"
              style={{
                color: "grey",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Technologies;
