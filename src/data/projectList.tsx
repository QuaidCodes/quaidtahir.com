import { TimelineEntry } from "@/lib/timeline";

export const projects: TimelineEntry[] = [
  {
    title: "June 2025",
    content: (
      <div>
        <h3 className="text-2xl font-semibold py-1">Quaid Tahir Portfolio</h3>
        <p className="text-sm text-neutral-500">
          This portfolio is a fully modern, production-grade web application
          built with Next.js, React, and TypeScript. It&rsquo;s styled using
          Tailwind CSS for utility-first design, and enhanced with smooth,
          responsive animations powered by Framer Motion. Behind the scenes, the
          project is deployed on Vercel with a continuous integration and
          continuous deployment (CI/CD) pipeline, ensuring that every update is
          automatically tested and delivered with speed and reliability. From
          performance optimization to component-based architecture, every detail
          reflects my focus on building scalable, maintainable, and user-centric
          web experiences.
        </p>
      </div>
    ),
  },
  {
    title: "August 2025",
    content: (
      <div>
        <h3 className="text-2xl font-semibold">Web Site Builder</h3>
        <div className="py-1">
          <p className="text-sm text-neutral-500">
            This web-based site builder is a dynamic, user-friendly platform
            that enables users to create, customize, and deploy fully responsive
            websites without writing code. Designed for flexibility and
            scalability, it leverages a modern full-stack architecture optimized
            for performance, usability, and developer productivity.
          </p>

          <h3 className="font-bold underline mt-5">Frontend:</h3>
          <p className="text-sm text-neutral-500">
            Built with Next.js and React using TypeScript to ensure type safety
            and maintainability across the codebase. The UI is styled with
            Tailwind CSS, providing a utility-first approach for rapid styling
            and responsive design. Smooth animations and transitions are powered
            by Framer Motion, enhancing user experience with intuitive
            drag-and-drop interactions, live previews, and real-time updates.
          </p>

          <h3 className="font-bold underline mt-5">Backened</h3>
          <p className="text-sm text-neutral-500">
            The backend is implemented using Node.js with an API layer (REST or
            tRPC) to handle content management, user authentication, and site
            deployments. It integrates with a database (such as PostgreSQL or
            MongoDB) via an ORM like Prisma or Mongoose, managing user projects,
            templates, assets, and published site data.
          </p>

          <h3 className="font-bold underline mt-5">Features: </h3>
          <ul>
            <li className="text-sm text-neutral-500">
              <strong>Drag-and-drop page builder:</strong> Users can visually
              design pages with pre-built components and customizable layouts.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Template system:</strong> Provides starter templates that
              users can modify to speed up site creation.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Real-time collaboration:</strong> Optional feature using
              WebSockets (Socket.IO) allowing multiple users to edit
              simultaneously.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Authentication & Authorization:</strong> Managed securely
              with JWT or third-party providers via NextAuth or Clerk.js.
            </li>
            <li className="text-sm text-neutral-500">
              <strong>Media management:</strong> Upload and organize images,
              videos, and other assets using services like UploadThing or
              Cloudinary.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>SEO &amp; Performance:</strong> Automatic generation of
              metadata, sitemap, and optimized loading strategies leveraging
              Next.js&rsquo;s SSR/SSG capabilities.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Deployment:</strong> One-click publishing integrated with
              platforms like Vercel, enabling seamless live site updates.
            </li>

            <li className="text-sm text-neutral-500">
              <strong>Extensibility:</strong> Plugin architecture for adding
              custom components and integrations.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Big Launch",
    content: (
      <div>
        <p>Lauch for Site builder</p>

        <a href="/portfolio" className="text-blue-500 hover:underline">
          See updates →
        </a>
      </div>
    ),
  },
];
