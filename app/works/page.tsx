import { projects } from "data/projectsList";
import ProjectCard from "components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="w-full flex justify-evenly mt-20">
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}
