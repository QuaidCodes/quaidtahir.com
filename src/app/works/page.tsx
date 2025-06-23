"use client";

import { Timeline } from "@/lib/timeline";
import { projects } from "@/data/projectList";

export default function Works() {
  return (
    <section>
      <Timeline data={projects} />
      <div className="h-[200vh] bg-transparent" /> {/* test scroll */}
    </section>
  );
}
