import React, { useState } from "react";
import Groupie from "./subpages/Groupie";
import Crypt from "./subpages/Crypt";
import Blog from "./subpages/Blog";

export default function Portfolio() {
  const [project, setProject] = useState("Groupie");

  const renderProject = () => {
    if (project === "Groupie") {
      return <Groupie project={project} handleProjectChange={handleProjectChange}/>;
    }
    if (project === "Crypt") {
      return <Crypt project={project} handleProjectChange={handleProjectChange}/>;
    }
    return <Blog project={project} handleProjectChange={handleProjectChange}/>;
  };

  const handleProjectChange = (next) => setProject(next);

  return (
    <div>
      {renderProject()}
    </div>
  );
}
