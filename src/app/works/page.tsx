"use client";

import { Timeline } from "@/lib/timeline";
import { projects } from "@/data/projectList";

export default function Works() {
  return (
    <section className="mb-20">
      <Timeline data={projects} />

      <div className="mx-30 py-10">
        <h2 className="text-6xl mb-10 underline">In Depth analysis</h2>

        <h2 className="text-4xl mb-2 underline">Site Builder</h2>
        <p>
          This web-based site builder is a dynamic, user-friendly platform that
          enables users to create, customize, and deploy fully responsive
          websites without writing code. Designed for flexibility and
          scalability, it leverages a modern full-stack architecture optimized
          for performance, usability, and developer productivity.
        </p>

        <h3 className="font-bold underline mt-5">Frontend:</h3>
        <p>
          Built with Next.js and React using TypeScript to ensure type safety
          and maintainability across the codebase. The UI is styled with
          Tailwind CSS, providing a utility-first approach for rapid styling and
          responsive design. Smooth animations and transitions are powered by
          Framer Motion, enhancing user experience with intuitive drag-and-drop
          interactions, live previews, and real-time updates.
        </p>

        <h3 className="font-bold underline mt-5">Backened</h3>
        <p>
          The backend is implemented using Node.js with an API layer (REST or
          tRPC) to handle content management, user authentication, and site
          deployments. It integrates with a database (such as PostgreSQL or
          MongoDB) via an ORM like Prisma or Mongoose, managing user projects,
          templates, assets, and published site data.
        </p>

        <h3 className="font-bold underline mt-5">Features: </h3>
        <ul>
          <li>
            <strong>Drag-and-drop page builder:</strong> Users can visually
            design pages with pre-built components and customizable layouts.
          </li>
          <li>
            <strong>Template system:</strong> Provides starter templates that
            users can modify to speed up site creation.
          </li>
          <li>
            <strong>Real-time collaboration:</strong> Optional feature using
            WebSockets (Socket.IO) allowing multiple users to edit
            simultaneously.
          </li>
          <li>
            <strong>Authentication & Authorization:</strong> Managed securely
            with JWT or third-party providers via NextAuth or Clerk.js.
          </li>
          <li>
            <strong>Media management:</strong> Upload and organize images,
            videos, and other assets using services like UploadThing or
            Cloudinary.
          </li>
          <li>
            <strong>SEO &amp; Performance:</strong> Automatic generation of
            metadata, sitemap, and optimized loading strategies leveraging
            Next.js&rsquo;s SSR/SSG capabilities.
          </li>
          <li>
            <strong>Deployment:</strong> One-click publishing integrated with
            platforms like Vercel, enabling seamless live site updates.
          </li>
          <li>
            <strong>Extensibility:</strong> Plugin architecture for adding
            custom components and integrations.
          </li>
        </ul>
      </div>

      <div className="h-[400px]">123</div>
    </section>
  );
}
