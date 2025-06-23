import { TimelineEntry } from "@/lib/timeline";

export const projects: TimelineEntry[] = [
  {
    title: "June 2025",
    content: (
      <div>
        <h3 className="text-2xl font-semibold">Quaid Tahir Portfolio</h3>
        <p className="text-sm text-neutral-500">
          This portfolio is a fully modern, production-grade web application
          built with Next.js, React, and TypeScript. It's styled using Tailwind
          CSS for utility-first design, and enhanced with smooth, responsive
          animations powered by Framer Motion. Behind the scenes, the project is
          deployed on Vercel with a continuous integration and continuous
          deployment (CI/CD) pipeline, ensuring that every update is
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
        <p className="text-sm text-neutral-500">
          This project is a full-stack web-based project planner designed to
          help individuals and teams organize tasks, track progress, and manage
          workflows in a flexible and visually structured way — similar to tools
          like Monday.com and Trello. The frontend is developed using Next.js
          with React and TypeScript, following a modular, component-driven
          architecture. Styling is handled using Tailwind CSS for utility-first,
          responsive design, and enhanced with Framer Motion to create smooth
          transitions and interactive animations. The interface supports both
          light and dark modes, with layouts optimized for desktop and mobile
          use. The backend is powered by Node.js using Express.js (or a similar
          framework) to create a scalable RESTful API. The backend handles all
          business logic, including project and task management, user
          permissions, real-time updates, and notifications. It interacts with a
          PostgreSQL (or optionally MongoDB) database, using Prisma or Mongoose
          as the ORM/ODM layer for managing structured data like boards,
          columns, rows, status labels, deadlines, and user assignments.
          Authentication and authorization are implemented using JWT-based
          tokens or session-based auth (via express-session) to support secure
          user login, role-based access, and team management features.
          Optionally, OAuth 2.0 providers (e.g., Google, GitHub) are supported
          for social login. The app supports real-time collaboration features
          via WebSockets (using Socket.IO on top of Node.js) to broadcast
          updates like task edits, comments, and board changes across all
          connected clients without requiring manual refresh. The codebase is
          version-controlled with Git and hosted on GitHub, with CI/CD pipelines
          configured using GitHub Actions. This ensures that every commit is
          automatically linted, tested, and deployed. The production app is
          deployed on Vercel for the frontend and Render, Railway, or
          DigitalOcean App Platform for the Node.js backend — ensuring reliable,
          scalable performance with environment variable support and automated
          redeploys. Planned extensions include Gantt chart views, Slack/email
          integration, advanced filtering, team dashboards, and analytics to
          measure project velocity and performance.
        </p>
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
