// export type Project = {
//   id: number;
//   title: string;
//   description: string;
//   link: string;
//   image: string;
// };

// export const projects: Project[] = [
//   {
//     id: 1,
//     title: "Social Media Manager",
//     description: "This platform manages socials",
//     link: "link for app",
//     image: "/images/placeholder.jpg",
//   },
//   {
//     id: 2,
//     title: "Porject Management App",
//     description: "This platform manages and handles project management, tasks handling, ticket request, and more.",
//     link: "link for app",
//     image: "/images/placeholder.jpg",
//   },
// ];


// "use client";

// import { projects } from "@/data/projectList";
// import ProjectCard from "@/components/ProjectCard";
// import { motion } from "framer-motion";

// export default function ProjectsPage() {
//   return (
//     <main className="max-w-6xl mx-auto px-4 py-12">
//       <motion.h1
//         className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         Projects
//       </motion.h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, i) => (
//           <ProjectCard key={project.id} project={project} index={i} />
//         ))}
//       </div>
//     </main>
//   );
// }
