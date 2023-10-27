import React, { useEffect, useState } from "react";

const DualColorProgressBar = ({ progress1, progress2 }) => {
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("progress-bar");
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        fillProgress(progress1, setWidth1);
        if (progress2 !== undefined) {
          fillProgress(progress2, setWidth2);
        }
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [progress1, progress2]);

  const fillProgress = (targetWidth, setWidthFunc) => {
    let currentWidth = 0;
    const interval = setInterval(() => {
      currentWidth++;
      setWidthFunc(currentWidth);

      if (currentWidth >= targetWidth) {
        clearInterval(interval);
      }
    }, 10);
  };

  return (
    <div id="progress-bar" className="progress mt-1 mb-5">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${width1}%`, background: "#00b8a5", height: "25px" }}
      ></div>
      {progress2 !== undefined && (
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${width2}%`, background: "#228b22", height: "25px" }}
        ></div>
      )}
    </div>
  );
};

export default DualColorProgressBar;
