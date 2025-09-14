import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

export default function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  let content;
  if (projectsState.selectedProjectId === null) content = <NewProject />;
  if (projectsState.selectedProjectId === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}
