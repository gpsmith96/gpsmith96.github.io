import "./Projects.css";
import { useNavigate } from "react-router-dom";
import data from "./Data";
import WorkCard from "./WorkCard";

function Projects(props) {
  let navigate = useNavigate(); 
  return (
    <div
      className="projects-container">
      {data.projects.map((project, index) => (
        <WorkCard
          key={index}
          img={project.imageSrc}
          name={project.title}
          description={project.description}
          onClick={() => navigate("/Projects" + project.url)}
        />
      ))}
    </div>
  );
}

export default Projects;
