import Link from "next/link";
import PropertyCard from "@/components/properties/property-card";
import { getProperties } from "@/core/lib/property";

export default async function FeaturedProperties() {
  const properties = await getProperties();
  const featured = properties.slice(0, 3);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
              Featured Collection
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Discover Premium Properties
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Explore our hand-picked properties designed to match every
              lifestyle, investment goal, and dream home.
            </p>
          </div>

          <Link
            href="/properties"
            className="inline-flex items-center gap-2 rounded-full border border-green-700 px-6 py-3 font-semibold text-green-700 transition-all duration-300 hover:bg-green-700 hover:text-white"
          >
            View All Properties →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}