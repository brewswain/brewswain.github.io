import React, { useContext, useEffect } from "react";

import "./OtherProjectsSection.style.scss";

import { Link } from "react-router-dom";

import { ProjectContext, SelectedProjectContext } from "../../../contexts";
import { ImageLoader } from "../../../components";

import ProjectSummary from "../../../data/ProjectSummary.data";

const OtherProjectsSection = () => {
  const { selectedProject, setSelectedProject } = useContext(ProjectContext);
  const { projectState } = useContext(SelectedProjectContext);

  let availableProjects = ProjectSummary.filter(
    (project) => project.id !== projectState
  );

  useEffect(() => {
    const storedProject = window.localStorage.getItem("storedProject");

    if (!storedProject) {
      window.localStorage.setItem("storedProject", selectedProject);
    }
  }, [selectedProject]);

  return (
    <section className="projects__feed" id="projects">
      {availableProjects.map((project) => (
        <div className="project__card" key={project.id}>
          <div className="project__header">
            <div className="project__title">{project.title}</div>
          </div>
          <ImageLoader
            src={project.imageUrl}
            alt="Project Thumbnail"
            className="project__image"
          />{" "}
          <div className="project__description">{project.description}</div>
          <div className="link__container">
            <Link
              to={`/projects/${project.id}`}
              className="project__link"
              onClick={() => {
                setSelectedProject(project.title);
                window.localStorage.setItem("storedProject", project.id);
                window.scrollTo(0, 0);
              }}
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OtherProjectsSection;
