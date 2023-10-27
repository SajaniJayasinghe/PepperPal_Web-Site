import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Timeline, Event } from "react-timeline-scribble";
import "./Milestones.scss";
import DualColorProgressBar from "./ProgressBar";

const Milestones = () => {
  return (
    <div
      style={{
        backgroundColor: "#e9f7ef",
        padding: "10px 0",
      }}
    >
      <Container id="milestones" className="Milestones-container marginComp">
        <h5 className="section-title">Milestones</h5>
        <h2>
          <strong>Timeline in Brief</strong>
        </h2>
        <div
          style={{
            padding: "0 10%",
            marginTop: "75px",
          }}
        >
          <Timeline>
            <Event
              className="timeline-event"
              interval={"March 2023"}
              title={
                <div style={{ fontSize: "32px", fontWeight: "bold" }}>
                  Project Proposal
                </div>
              }
              subtitle={
                <div style={{ fontSize: "18px", fontWeight: "200" }}>
                  A Project Proposal is presented to potential sponsors or
                  clients to receive funding or get your project approved.
                </div>
              }
            >
              <strong className>Marks Allocated : 6</strong>
              <br />
              <DualColorProgressBar progress1={6} />
            </Event>

            <Event
              className="timeline-event"
              interval={"May 2023"}
              title={
                <div style={{ fontSize: "32px", fontWeight: "bold" }}>
                  Progress Presentation I
                </div>
              }
              subtitle={
                <div style={{ fontSize: "18px", fontWeight: "200" }}>
                  Progress Presentation I reviews the 50% completetion status of
                  the project. This reveals any gaps or inconsistencies in the
                  design/requirements.
                </div>
              }
            >
              <strong className>Marks Allocated : 15</strong>
              <br />
              <DualColorProgressBar progress1={6} progress2={8} />
            </Event>

            <Event
              className="timeline-event"
              interval={"June 2023"}
              title={
                <div style={{ fontSize: "32px", fontWeight: "bold" }}>
                  Research Paper
                </div>
              }
              subtitle={
                <div style={{ fontSize: "18px", fontWeight: "200" }}>
                  Describes what you contribute to existing knowledge, giving
                  due recognition to all work that you referred in making new
                  knowledge
                </div>
              }
            >
              <strong className>Marks Allocated : 10</strong>
              <br />
              <DualColorProgressBar progress1={15} progress2={10} />
            </Event>
            <Event
              className="timeline-event"
              interval={"September 2023"}
              title={
                <div style={{ fontSize: "32px", fontWeight: "bold" }}>
                  Progress Presentation II
                </div>
              }
              subtitle={
                <div style={{ fontSize: "18px", fontWeight: "200" }}>
                  Progress Presentation II reviews the 90% completetion status
                  demonstration of the project. Along with a Poster
                  presesntation which describes the project as a whole.
                </div>
              }
            >
              <strong className>Marks Allocated : 18</strong>
              <br />
              <DualColorProgressBar progress1={20} progress2={18} />
            </Event>
            <Event
              className="timeline-event"
              interval={"October 2023"}
              title={
                <div style={{ fontSize: "32px", fontWeight: "bold" }}>
                  Website Assessment
                </div>
              }
              subtitle={
                <div style={{ fontSize: "18px", fontWeight: "200" }}>
                  The Website helps to promote our research project and reveals
                  all details related to the project.
                </div>
              }
            >
              <strong className>Marks Allocated : 2</strong>
              <br />
              <DualColorProgressBar progress1={20} progress2={20} />
            </Event>
            <Event
              className="timeline-event"
              interval={"October 2023"}
              title={
                <div style={{ fontSize: "32px", fontWeight: "bold" }}>
                  Logbook
                </div>
              }
              subtitle={
                <div style={{ fontSize: "18px", fontWeight: "200" }}>
                  Status of the project is validated through the Logbook. This
                  also includes, Status documents 1 & 2.
                </div>
              }
            >
              <strong className>Marks Allocated : 2</strong>
              <br />
              <DualColorProgressBar progress1={22} progress2={26} />
            </Event>
            <Event
              className="timeline-event"
              interval={"October 2023"}
              title={
                <div style={{ fontSize: "32px", fontWeight: "bold" }}>
                  Final Report
                </div>
              }
              subtitle={
                <div style={{ fontSize: "18px", fontWeight: "200" }}>
                  Final Report evalutes the completed project done throughout
                  the year. Marks mentioned below includes marks for Individual
                  & group reports and also Final report.
                </div>
              }
            >
              <strong className>Marks Allocated : 15</strong>
              <br />
              <DualColorProgressBar progress1={40} progress2={30} />
            </Event>
            <Event
              className="timeline-event"
              interval={"November 2023"}
              title={
                <div style={{ fontSize: "32px", fontWeight: "bold" }}>
                  Final Presentation & Viva
                </div>
              }
              subtitle={
                <div style={{ fontSize: "18px", fontWeight: "200" }}>
                  Viva is held individually to assess each members contribution
                  to the project.
                </div>
              }
            >
              <strong className>Marks Allocated : 20</strong>
              <br />
              <DualColorProgressBar progress1={80} progress2={20} />
            </Event>
          </Timeline>
        </div>
      </Container>
    </div>
  );
};

export default Milestones;
