import React, { useContext } from "react";

import "./ProjectSection.style.scss";
import GitHubLogo from "../../../assets/PNG/github_Light.png";

import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

import { NavBarContext, ProjectContext } from "../../../contexts";
import { ImageLoader } from "../../../components";

import ProjectSummary from "../../../data/ProjectSummary.data";
import ProjectUpcoming from "../../../data/ProjectUpcoming.data";

import { TerminalIcon } from "../../../assets";

const ProjectSection = () => {
  const { setSelectedProject } = useContext(ProjectContext);
  const { setIsHomePage } = useContext(NavBarContext);
  const { upcomingImageUrl, upcomingDescription } = ProjectUpcoming;

  return (
    <section className="section__projects" id="projects">
      <div className="projects__container">
        <h1 className="section__header">What I've done so far</h1>
        <div className="projects__grid">
          {ProjectSummary.map((project) => (
            <div className="project__card" key={project.id}>
              <div className="project__header">
                <div className="project__title">{project.title}</div>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <img src={GitHubLogo} alt="" className="github__icon" />
                  </a>
                ) : null}
              </div>
              <LazyLoad debounce={false} offsetVertical={500}>
                <ImageLoader
                  src={project.imageUrl}
                  alt="Project Thumbnail"
                  className="project__image"
                />
              </LazyLoad>
              <div className="project__description">{project.description}</div>
              <div className="link__container">
                <Link
                  to={`/projects/${project.id}`}
                  className="project__link"
                  onClick={() => {
                    setSelectedProject(project.id);
                    window.scrollTo(0, 0);
                    setIsHomePage(false);
                    window.localStorage.setItem("storedProject", project.id);
                  }}
                >
                  View Details
                  <TerminalIcon className="link__icon" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* <UpcomingProject /> */}
        <h1 className="section__header">What I'm working on</h1>
        <div className="projects__upcoming">
          <div className="placeholder__project">
            <LazyLoad debounce={false} offsetVertical={500}>
              <ImageLoader
                className="browser__screenshot
      "
                src={upcomingImageUrl}
                alt="Upcoming Project thumbnail"
              />
            </LazyLoad>
            <div className="project__description">{upcomingDescription}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
