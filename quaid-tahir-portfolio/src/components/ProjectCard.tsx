import Link from "next/link";
import { Project } from "@/data/projectsList";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-emerald-700 p-5 h-[300px] w-[500px] rounded-2xl">
      <img
        src={project.image || "/placeholder.jpg"}
        alt={project.title}
        className="h-[200px] bg-white text-black rounded-4xl p-4"
      />

      <h4 className="font-bold mt-3">{project.title}</h4>
      <p className="italic">{project.description}</p>
    </div>
  );
}
