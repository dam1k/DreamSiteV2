import React from 'react'

const Project = ({project}) => {
     const projectsTitleOne =
  "We are a team of talented, hard working individuals. Our purpose is to help you achieve the success you deserve by bringing your business to the online world.".split(
    " "
  );

const projectsSubitleOne =
  "We are a team of talented, hard working individuals. Our purpose is to help you achieve the success you deserve by bringing your business to the online world.".split(
    " "
  );

  return (
     <div key={project.id} id={`project-${project.id}`}>
                <hr className="line line--first" />
                <motion.div initial={false} 
                layout
                className="projects__dropdown">
                  <div
                    className="projects__text"
                    // ref={projectRef}
                    onClick={() => handleClick(project.id)}
                    onMouseOver={(e) => {
                      setShowImage(project.id);
                      // projectRef.current = e.target;
                      console.log(e.target)
                      // const cursorX = e.pageX;
                      // const cursorY = e.pageY;
                      //
                      // const itemLeft = projectRef.current.getBoundingClientRect().left;
                      // const itemTop = projectRef.current.getBoundingClientRect().top;
                      //
                      // const imagePositionX = cursorX - itemLeft;
                      // const imagePositionY = cursorY - itemTop - window.scrollY;

                      // imageRef.current.style.top = `${imagePositionY + 20}px`;
                      // imageRef.current.style.left = `${imagePositionX + 20}px`;

                    }
                    }
                    onMouseLeave={() =>  setShowImage(0)}>
                    <h2 className="projects__name overflow">
                      <div>{project.name}</div>
                    </h2>
                    <h2 className="projects__desc overflow">
                      <div>{project.type}</div>
                    </h2>
                    <div className={`projects-image ${showImage === project.id ? "active" :  ""}`}>
                      <img
                          src={project.img}
                          // ref={imageRef.cu}
                          alt="Project Image"
                          className={`projects__info-img`}
                      />{" "}
                    </div>
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
                          <div></div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
  )
}

export default Project