import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FaFileImage, FaFilePdf, FaFilePowerpoint } from "react-icons/fa";

const Documents = () => {
  return (
    <Container id="downloads" className="downloads-container marginComp mt-5">
      <div className="container">
        <h5 className="section-title">Downloads</h5>
        <div className="sub-section" id="documents">
          <h2>
            <strong>Documents</strong>
          </h2>
          <p>Please find all documents related to this project below.</p>
          <div className="row mt-sm-5 downloads-container">
            {/* ---------Card view for each document--------- */}
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    <b>Topic Assessment</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/01/20</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    <div>Group</div>
                    <a
                      href="https://drive.google.com/file/d/1NIBsib3PWP4Vz5jF3L1r5vne90naYq8V/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* ---------Card view for each document--------- */}
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    <b> Project Charter</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/01/30</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/file/d/1YMlU6Zx2mXQlMwId7ZkGrXCTVWr-yhtK/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    <b> Project Proposal</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/03/24</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Individual
                    <a
                      href="https://drive.google.com/drive/folders/1XU4cwXUsAY-wVDQfsaiutPtD9ybJIPGU?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    <b> Status Documents I</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/05/21</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Individual
                    <a
                      href="https://drive.google.com/drive/folders/1duKrs4Ea8q3Mz7VFYIbXh_3i6Jztxyxy?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    <b> Status Documents II</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/09/06</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Individual
                    <a
                      href="https://drive.google.com/drive/folders/1qn-CXjVkRwHl68WNIoigqt4UViFqoFxc?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    <b> Research Paper</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/06/20</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/file/d/1kGifINZT-bmkVN6e5TYI1YX-zZEYoyYw/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    <b> Final Report</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/09/10</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/file/d/1dE2xlztjb6P9asMuSJmuejmh2tFfv5zt/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                  <li className="list-group-item">
                    Individual
                    <a
                      href="https://drive.google.com/drive/folders/1cfqalo7tnFix77-3l27Ox4XnUVjsou4h?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFileImage
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    <b> Poster</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/09/10</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/file/d/13KI-Qz1GA4-Qhxb3HPl-fXQSqrz7O57K/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ----------Presentations---------- */}
        <div id="presentations" className="sub-section marginComp mt-5">
          <h2>
            <strong>Presentations</strong>
          </h2>
          <p>Please find all presentations related this project below.</p>
          <div className="row mt-sm-5 downloads-container">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePowerpoint
                      style={{
                        marginRight: "10px",
                        color: "#fd7e29",
                      }}
                    />
                    <b> Project Proposal</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/03/27</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/file/d/1q-FclgCqAu5etA2ezGYxbFy8gC8TEho9/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePowerpoint
                      style={{
                        marginRight: "10px",
                        color: "#fd7e29",
                      }}
                    />
                    <b> Progress Presentation I</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/06/26</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/drive/folders/1WOTrOox5dzCuRRDnjwyyKfZXyUEs3N4j?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePowerpoint
                      style={{
                        marginRight: "10px",
                        color: "#fd7e29",
                      }}
                    />
                    <b> Progress Presentation II</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/09/07</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/drive/folders/1dMw7mBS9--eaF0LqxW7KzrcgqqdpLZVC?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePowerpoint
                      style={{
                        marginRight: "10px",
                        color: "#fd7e29",
                      }}
                    />
                    <b> Final Presentation</b>
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/11/02</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/drive/folders/1To13D0kfPnbeiHq5QRLpobCUhGhsGSrt?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
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

export default Documents;
