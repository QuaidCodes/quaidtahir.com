import { TimelineEntry } from "@/lib/timeline";

export const projects: TimelineEntry[] = [
  {
    title: "2024",
    content: (
      <div>
        <p>Launched a SaaS tool using Next.js, Tailwind, and Supabase.</p>
        <a href="/projects/saas-tool" className="text-blue-500 underline">
          See project →
        </a>
      </div>
    ),
  },
  {
    title: "Portfolio v1",
    content: (
      <div>
        <h3 className="text-lg font-semibold">Calculator</h3>
        <p className="text-sm text-neutral-500">
          Built with HTML, CSS, and jQuery 😅
        </p>
      </div>
    ),
  },
  {
    title: "Big Launch",
    content: (
      <div>
        <p>Launched a SaaS tool using Next.js, Tailwind, and Supabase.</p>
        
        <a href="/projects/saas-tool" className="text-blue-500 underline">
          See project →
        </a>
      </div>
    ),
  },
];
