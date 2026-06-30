import Link from "next/link";
import Image from "next/image";
import { MapPin, Building2, ArrowRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  location_text: string;
  total_units: number;
  available_units: number;
  image_url?: string;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={
              project.image_url ||
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0?q=80&w=1200&auto=format&fit=crop"
            }
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Availability Badge */}
          <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-green-700 shadow backdrop-blur-md">
            {project.available_units} Available
          </div>

          {/* Title */}
          <div className="absolute bottom-5 left-5 right-5">
            <h2 className="text-2xl font-bold text-white drop-shadow-lg">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 p-6">

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} className="text-green-600" />
            <span>{project.location_text}</span>
          </div>

          {/* Description */}
          <p className="line-clamp-3 leading-7 text-gray-600">
            {project.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-gray-50 p-4">

            <div className="text-center">
              <Building2 className="mx-auto mb-2 text-green-600" size={22} />
              <p className="text-2xl font-bold text-gray-900">
                {project.total_units}
              </p>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Total Units
              </p>
            </div>

            <div className="text-center">
              <Building2 className="mx-auto mb-2 text-green-600" size={22} />
              <p className="text-2xl font-bold text-green-700">
                {project.available_units}
              </p>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Available
              </p>
            </div>

          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">

            <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Premium Project
            </span>

            <span className="flex items-center gap-2 font-semibold text-gray-900 transition group-hover:translate-x-1">
              View Details
              <ArrowRight size={18} />
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}