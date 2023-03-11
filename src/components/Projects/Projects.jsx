import React, { useState } from "react";
import "./Projects.scss";
import projects from "../../data/projects";

const projectsTitleOne =
  "We are a team of talented, hard working individuals. Our purpose is to help you achieve the success you deserve by bringing your business to the online world.".split(
    " "
  );

const projectsSubitleOne =
  "We are a team of talented, hard working individuals. Our purpose is to help you achieve the success you deserve by bringing your business to the online world.".split(
    " "
  );

const Projects = () => {
  const [projectToShow, setProjectToShow] = useState(1);

  const handleClick = (projectId) => {
    if (projectId === projectToShow) {
      setProjectToShow(0);
    } else {
      setProjectToShow(projectId);
    }
  };

  return (
    <div className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">
          <span>Projects</span>
          <span>02</span>
        </h2>
        <div className="projects__list">
          {projects.map((project) => {
            return (
              <div key={project.id}>
                <hr className="line" />
                <div
                  className="projects__dropdown"
                  onClick={() => handleClick(project.id)}
                >
                  <div className="projects__text">
                    <h2 className="projects__name overflow">
                      <span>{project.name}</span>
                    </h2>
                    <h2 className="projects__desc overflow">
                      <span>{project.type}</span>
                    </h2>
                  </div>
                  <div
                    className={`projects__info ${
                      project.id === projectToShow ? "show__project" : ""
                    }`}
                  >
                    <div className="projects__grid">
                      <div></div>
                      <div className="projects__info-inner">
                        <div className="projects__info-text">
                          <h2 className="projects__info-title overflow">
                            {projectsTitleOne.map((word, index) => {
                              return <span key={index}>{word}</span>;
                            })}
                          </h2>
                          <p className="projects__info-subtitle overflow">
                            {projectsSubitleOne.map((word, index) => {
                              return <span key={index}>{word}</span>;
                            })}
                          </p>
                        </div>
                        <div className="projects__info-images">
                          <img
                            src={project.img}
                            alt="Project Image"
                            className="projects__info-img"
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
