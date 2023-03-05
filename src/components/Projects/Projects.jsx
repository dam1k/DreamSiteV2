import React from "react";
import "./Projects.scss";
import placeholder from "../../assets/placeholder.png";

const projectsTitleOne =
  "We are a team of talented, hard working individuals. Our purpose is to help you achieve the success you deserve by bringing your business to the online world.".split(
    " "
  );

const projectsSubitleOne =
  "We are a team of talented, hard working individuals. Our purpose is to help you achieve the success you deserve by bringing your business to the online world.".split(
    " "
  );

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">
          <span>Projects</span>
          <span>02</span>
        </h2>
        <div className="projects__list">
          <hr className="line" />
          <div className="projects__dropdown">
            <div className="projects__text">
              <h2 className="projects__name overflow">
                <span>Euromobila</span>
              </h2>
              <h2 className="projects__desc overflow">
                <span>Live Site</span>
              </h2>
            </div>

            <div className="projects__info">
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
                    src={placeholder}
                    alt="Project Image"
                    className="projects__info-img"
                  />{" "}
                </div>
              </div>
            </div>
          </div>

          <hr className="line" />
          <div className="projects__dropdown">
            <div className="projects__text">
              <h2 className="projects__name overflow">
                <span>Euromobila</span>
              </h2>
              <h2 className="projects__desc overflow">
                <span>Live Site</span>
              </h2>
            </div>
          </div>

          <hr className="line" />
          <div className="projects__dropdown">
            <div className="projects__text">
              <h2 className="projects__name overflow">
                <span>Euromobila</span>
              </h2>
              <h2 className="projects__desc overflow">
                <span>Live Site</span>
              </h2>
            </div>
          </div>

          <hr className="line" />
          <div className="projects__dropdown">
            <div className="projects__text">
              <h2 className="projects__name overflow">
                <span>Euromobila</span>
              </h2>
              <h2 className="projects__desc overflow">
                <span>Live Site</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
