import React, { useContext, useEffect } from "react";

import "./ProjectDetailsPage.style.scss";

import { useLocation } from "react-router-dom";
import LazyLoad from "react-lazy-load";

import { NavBar, SideBar } from "../../partials";

import ProjectDetails from "../../data/ProjectDetails.data";

import { ImageLoader } from "../../components";

import {
  NavBarContext,
  ProjectContext,
  SelectedProjectContext,
} from "../../contexts";

import {
  ContactSection,
  JustificationSection,
  LessonsSection,
  OtherProjectsSection,
  ProblemsSection,
  ProjectTitleSection,
  StackSection,
} from "../../sections";

const ProjectDetailsPage = () => {
  const { setIsHomePage } = useContext(NavBarContext);
  const { selectedProject } = useContext(ProjectContext);
  const { projectState, setProjectState } = useContext(SelectedProjectContext);

  const currentUrl = useLocation();
  let chosenProject = currentUrl.pathname.replace("/projects/", "");
  let filteredProject = ProjectDetails.filter(
    (project) => project.id === chosenProject
  );

  useEffect(() => {
    setIsHomePage(false);
  }, [setIsHomePage]);

  useEffect(() => {
    setProjectState(selectedProject);
  }, [projectState, selectedProject, setProjectState]);
  return (
    <div className="details__page">
      <NavBar />
      <SideBar />
      {/* TODO:   Implement OnBlur as shown below   

onClick={() => {
sideBarContext.setIsVisible(false);
      }} */}
      {projectState ? (
        <>
          <ProjectTitleSection project={filteredProject[0]} />
          <JustificationSection project={filteredProject[0]} />
          <StackSection project={filteredProject[0]} />
          <div className="image__container">
            <LazyLoad debounce={false} offsetVertical={500}>
              <ImageLoader
                className="browser__screenshot
      "
                src={filteredProject[0].homePagePic}
                alt="Single View pic"
              />
            </LazyLoad>
          </div>
          <ProblemsSection project={filteredProject[0]} />
          <LessonsSection project={filteredProject[0]} />
          <OtherProjectsSection filteredProject={filteredProject.id} />
          <ContactSection />{" "}
        </>
      ) : null}
    </div>
  );
};

export default ProjectDetailsPage;
