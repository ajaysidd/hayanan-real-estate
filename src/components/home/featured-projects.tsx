import Link from "next/link";
import ProjectCard from "@/components/projects/project-card";
import { getProjects } from "@/core/lib/project";

export default async function FeaturedProjects() {
  const projects = await getProjects();
  const featured = projects?.slice(0, 3) ?? [];

  return (
    <section className="relative bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">

            <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
              Our Developments
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Featured Projects
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Discover our ongoing and completed residential, commercial, and
              investment developments built with quality and trust.
            </p>

          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-green-700 px-6 py-3 font-semibold text-green-700 transition-all duration-300 hover:bg-green-700 hover:text-white"
          >
            View All Projects →
          </Link>

        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}