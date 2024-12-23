import React from 'react';
import "./skills.css"
import express from "../../assets/express.webp";
import api from "../../assets/api.webp";
const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skilss__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <div className="skills__circle">
            <i class='bx bxl-git git'></i>
              <div className="skills__overlay">
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <h3 className="skills__name">Git</h3>
          </div>

          <div className="skills__data">
            <div className="skills__circle">
            <i class='bx bxl-nodejs nodejs' ></i>
              <div className="skills__overlay">
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <h3 className="skills__name">Node.JS</h3>
          </div>

          <div className="skills__data">
            <div className="skills__circle">
         <img src={express} alt="" />
              <div className="skills__overlay">
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <h3 className="skills__name">Express.JS</h3>
          </div>

          <div className="skills__data">
            <div className="skills__circle">
         <img src={api} alt="" />
              <div className="skills__overlay">
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <h3 className="skills__name">RESTful API</h3>
          </div>


          <div className="skills__data">
            <div className="skills__circle">
            <i class='bx bxl-spring-boot spring' ></i>
              <div className="skills__overlay">
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <h3 className="skills__name">Spring Boot</h3>
          </div>

          <div className="skills__data">
            <div className="skills__circle">
            <i class='bx bxs-data sql' ></i>
              <div className="skills__overlay">
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <h3 className="skills__name">SQL database</h3>
          </div>

         
         


        </div>
      </div>
    </div>
  );
};

export default Backend;



