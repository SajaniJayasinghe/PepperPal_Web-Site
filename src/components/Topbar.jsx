import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Topbar = () => {
  return (
    <div className="topbar-container fw-700">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary fixed-top"
        style={{
          padding: "1rem 0",
          background: "#fff",
        }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center justify-content-between"
          >
            <img
              src="https://res.cloudinary.com/desnqqj6a/image/upload/v1697772302/Pepper_Pal_ufaisn.png"
              alt="Pepper Pal Logo"
              className="d-inline-block align-top"
              style={{
                width: "50px",
                height: "50px",
                marginRight: "0.5rem",
              }}
            />

            <span className="text-body-primary">Pepper Pal</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav
              style={{
                gap: "2rem",
              }}
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Project Scope" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#project-scope">
                  Literature Review
                </NavDropdown.Item>
                <NavDropdown.Item href="#research-gap">
                  Research Gap
                </NavDropdown.Item>
                <NavDropdown.Item href="#research-problem">
                  Reseach Problem & Solution
                </NavDropdown.Item>
                <NavDropdown.Item href="#research-objectives">
                  Reseach Objectives
                </NavDropdown.Item>
                <NavDropdown.Item href="#methodology">
                  Methodology
                </NavDropdown.Item>
                <NavDropdown.Item href="#technologies">
                  Technologies
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#milestones">Milestones</Nav.Link>
              <NavDropdown title="Downloads" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#documents">Documents</NavDropdown.Item>
                <NavDropdown.Item href="#presentations">
                  Presentations
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
