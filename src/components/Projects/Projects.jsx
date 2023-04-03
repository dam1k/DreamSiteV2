import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import "./Projects.scss";
import projects from "../../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projectsTitleOne =
  "We are a team of talented, hard working individuals. Our purpose is to help you achieve the success you deserve by bringing your business to the online world.".split(
    " "
  );

const projectsSubitleOne =
  "We are a team of talented, hard working individuals. Our purpose is to help you achieve the success you deserve by bringing your business to the online world.".split(
    " "
  );

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [projectToShow, setProjectToShow] = useState(1);
  const comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".projects__title--span", {
        y: "100%",
        ease: "power4.out",
        duration: 1.2,
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: ".projects__title--span",
          // markers: true,
          start: "bottom 90%",
        },
      });

      gsap.from(".projects__name div, .projects__desc div", {
        y: "100%",
        ease: "power4.out",
        duration: 1.2,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: ".projects__title",
          // markers: true,
          start: "bottom 90%",
        },
      });

      gsap.from(".line--projects", {
        width: "0%",
        ease: "power4.out",
        // delay: -0.5,
        duration: 3,
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: ".line--projects",
          // markers: true,
          start: "bottom 90%",
        },
      });

      gsap.from(".line--first", {
        width: "0%",
        ease: "power4.out",
        // delay: -0.5,
        duration: 3,
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: ".line--first",
          // markers: true,
          start: "bottom 90%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const divVariants = {
    open: {
      opacity: 1,
      height: "auto",
      marginTop: "25px",
    },
    collapsed: {
      opacity: 0,
      height: 0,
      marginTop: 0,
    },
  };

  const handleClick = (projectId) => {
    if (projectId === projectToShow) {
      setProjectToShow(0);
    } else {
        setProjectToShow(projectId);
    }
  };

  return (
    <div ref={comp} className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title overflow">
          <span className="projects__title--span">Projects</span>
          <span className="projects__title--span">02</span>
        </h2>
        </div>
        <div className="projects__container">
        <div className="projects__list">
          {projects.map((project) => {
            return (
              <div key={project.id} id={`project-${project.id}`}>
                <hr className="line line--first" />
                <motion.div initial={false} 
                layout
                className="projects__dropdown"
                data-fx={project.id}>
                  <div
                    className="projects__text"
                    onClick={() => handleClick(project.id)}
                    data-img='../../assets/euromobila.png'
                    data-fx="2">
                    <h2 className="projects__name overflow">
                      <div>{project.name}</div>
                    </h2>
                    <h2 className="projects__desc overflow">
                      <div>{project.type}</div>
                    </h2>
                  </div>
                </motion.div>
                <AnimatePresence 
                mode="wait" 
                initial={false}>
                  {project.id === projectToShow ? (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={divVariants}
                      transition={{
                        duration: 0.7,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      layout
                      className="projects__info"
                    >
                      <div className="projects__grid">
                        <motion.div 
                        layout
                        initial="false">
                        </motion.div>
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
                          <div></div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;