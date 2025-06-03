import Link from "next/link";
import { Project } from "@/data/projectsList";

export default function ProjectCard({project}: {project: Project}) {
  return <div>
    <img src="" alt="" />
    <h5>{project.title}</h5>
    <p>{project.description}</p>
  </div>
}
