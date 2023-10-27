import React from "react";
import LiteratureSurvey from "../components/LiteratureSurvey";
import ResearchGap from "../components/ResearchGap";
import ResearchProblem from "../components/ResearchProblem";
import ResearchTimeline from "../components/ResearchTimeline";
import Methodology from "../components/Methodology";
import Technologies from "../components/Technologies";
import Milestones from "../components/Milestones";
import Documents from "../components/Documents";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

const BodyLayout = () => {
  return (
    <div className="marginContainer">
      <LiteratureSurvey />
      <ResearchGap />
      <ResearchProblem />
      <ResearchTimeline />
      <Methodology />
      <Technologies />
      <Milestones />
      <Documents />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default BodyLayout;
