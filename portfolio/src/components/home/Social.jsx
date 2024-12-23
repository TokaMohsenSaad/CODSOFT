import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      {/* <a href="" className="home__social-icon" target="_blank">
        <i class="uil uil-instagram"></i>
      </a> 
      I'm not gonna add an instagram
      */}
      <a
        href="https://www.linkedin.com/in/toka-mohsen-84613a24b/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/TokaMohsenSaad"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
