import React, { useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";

import { HomePage, ProjectDetailsPage } from "./pages";
import {
  NavBarContext,
  ProjectContext,
  SelectedProjectContext,
  SideBarContext,
} from "./contexts";

const App = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectState, setProjectState] = useState(null);

  const storedProject = window.localStorage.getItem("storedProject");

  useEffect(() => {
    if (storedProject) {
      setProjectState(storedProject);
    } else {
      setProjectState(selectedProject);
    }
  }, [projectState, storedProject, selectedProject]);
  return (
    <div className="App">
      <NavBarContext.Provider value={{ isHomePage, setIsHomePage }}>
        <ProjectContext.Provider
          value={{ selectedProject, setSelectedProject }}
        >
          <SelectedProjectContext.Provider
            value={{ projectState, setProjectState }}
          >
            <Switch>
              <Route exact path="/" component={HomePage} />
              <SideBarContext.Provider value={{ isVisible, setIsVisible }}>
                <Route path="/projects" component={ProjectDetailsPage} />
              </SideBarContext.Provider>
            </Switch>
          </SelectedProjectContext.Provider>
        </ProjectContext.Provider>
      </NavBarContext.Provider>
    </div>
  );
};

export default App;
