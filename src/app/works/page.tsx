"use client";

import { Timeline } from "@/lib/timeline";
import { projects } from "@/data/projectList";

export default function Works() {
  return (
    <section className="mb-20">
      <Timeline data={projects} />
    </section>
  );
}