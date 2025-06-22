export type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Social Media Manager",
    description: "This platform manages socials",
    link: "link for app",
    image: "/images/placeholder.jpg",
  },
  {
    id: 2,
    title: "Porject Management App",
    description: "This platform manages and handles project management, tasks handling, ticket request, and more.",
    link: "link for app",
    image: "/images/placeholder.jpg",
  },
];
