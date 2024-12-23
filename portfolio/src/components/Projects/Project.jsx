import React, { useState } from "react";
import "./project.css";
import farm from "../../assets/projects/farm.png";
import movies from "../../assets/projects/movies.png";
import commerce from "../../assets/projects/e-commerce.png";
import crud from "../../assets/projects/CRUD.png";
import packing from "../../assets/projects/packing .png";
import recipe from "../../assets/projects/recipes.png";

// Modal component to display the image
const ImageModal = ({ isOpen, imageUrl, closeModal }) => {
  if (!isOpen) return null; // Don't render the modal if not open

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>X</button>
        <img src={imageUrl} alt="Project" className="modal-image" />
      </div>
    </div>
  );
};

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const projects = [
    {
      image: farm, // Replace with the actual image path
      name: "Aquaculture Water Monitoring",
      technologies: ["React", "Node.js", "CSS"],
      githubLink: "https://github.com/TokaMohsenSaad/fish_farm_system",
    },
    {
      image: movies,
      name: "Movies Website",
      technologies: ["HTML", "JavaScript", "Bootstrap"],
      githubLink: "https://github.com/TokaMohsenSaad/Movies-website",
    },
    {
      image: commerce,
      name: "E-commerce",
      technologies: ["Python", "Flask", "SQL"],
      githubLink: "https://github.com/TokaMohsenSaad/E-commerce-website-",
    },
    {
      image: crud, // Replace with the actual image path
      name: "CRUD Project",
      technologies: ["React", "Node.js", "CSS"],
      githubLink: "https://github.com/TokaMohsenSaad/CRUD",
    },
    {
      image: packing,
      name: "Packing List App",
      technologies: ["HTML", "JavaScript", "Bootstrap"],
      githubLink: "https://github.com/TokaMohsenSaad/packing-list-app",
    },
    {
      image: recipe,
      name: "Recipes Website",
      technologies: ["Python", "Flask", "SQL"],
      githubLink: "https://github.com/TokaMohsenSaad/recipes-website",
    },
  ];

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent modal from opening when link is clicked
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">My Projects</h2>
      <p className="section__subtitle">Some of the work I've done</p>
      <div className="projects__container">
        {projects.map((project, index) => (
          <div
            className="projects__card"
            key={index}
            onClick={() => openModal(project.image)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="projects__image"
            />
            <h3 className="projects__name">{project.name}</h3>
            <div className="projects__details">
              <p className="projects__technologies">
                {project.technologies.join(", ")}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                onClick={handleLinkClick} // Prevent modal opening when the link is clicked
              >
                <i className="bx bx-link link"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={modalImage}
        closeModal={closeModal}
      />
    </section>
  );
};

export default Projects;
