
import React from 'react';
import "./skills.css"
const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skilss__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <div className="skills__circle">
            <i className="uil uil-html5 html5"></i>
              <div className="skills__overlay">
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <h3 className="skills__name">HTML</h3>
          </div>

          <div className="skills__data">
            <div className="skills__circle">
            <i className='bx bxl-css3 css3'></i>
              <div className="skills__overlay">
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <h3 className="skills__name">CSS</h3>
          </div>

          <div className="skills__data">
            <div className="skills__circle">
            <i className='bx bxl-javascript javascript' ></i>
              <div className="skills__overlay">
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <h3 className="skills__name">JavaScript</h3>
          </div>

          <div className="skills__data">
            <div className="skills__circle">
            <i class='bx bxl-react react' ></i>
              <div className="skills__overlay">
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <h3 className="skills__name">ReactJS</h3>
          </div>

          <div className="skills__data">
            <div className="skills__circle">
            <i class='bx bxl-typescript typescript'></i>
              <div className="skills__overlay">
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <h3 className="skills__name">Typescript</h3>
          </div>

          <div className="skills__data">
            <div className="skills__circle">
            <i class='bx bxl-redux redux' ></i>
              <div className="skills__overlay">
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <h3 className="skills__name">Redux</h3>
          </div>

          <div className="skills__data">
            <div className="skills__circle">
            <i class='bx bxl-bootstrap bootstrap'></i>
              <div className="skills__overlay">
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <h3 className="skills__name">Bootstrap</h3>
          </div>



        </div>

       
      </div>
    </div>
  );
};

export default Frontend;



