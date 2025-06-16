import Image from "next/image";

import { Project } from "@/data/projectsList";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border-2 border-white p-2 m-h-[200px] w-[300px] rounded-2xl hover:scale-102 hover:bg-white hover:text-black transition-all duration-300 ">
      <Image
        src={project.image || "/placeholder.jpg"}
        alt={project.title}
        className="h-[100px] rounded-4xl p-4 object-contain"
        width={300}
        height={100}
      />

      <h4 className="font-bold mt-3 ">{project.title}</h4>
      <p className="italic">{project.description}</p>
    </div>
  );
}
