import PropertyCard from "@/components/properties/property-card";
import { getProperties } from "@/core/lib/property";
import { Search, MapPin, IndianRupee, Building2 } from "lucide-react";

interface Props {
  searchParams: Promise<{
    search?: string;
    city?: string;
    propertyType?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}

export default async function PropertiesPage({
  searchParams,
}: Props) {
  const filters = await searchParams;
  const properties = await getProperties(filters);

  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-6 text-center text-white">

          <span className="rounded-full bg-green-600/20 border border-green-500/30 px-5 py-2 text-sm font-semibold text-green-300">
            Premium Properties
          </span>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Discover Your Next Investment
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Browse premium residential plots, villas, apartments,
            farm lands and commercial properties carefully selected
            for long-term value.
          </p>

        </div>
      </section>

      {/* Search Section */}

      <section className="-mt-12 relative z-20 mx-auto max-w-7xl px-6">

        <form className="rounded-3xl bg-white p-8 shadow-xl border border-gray-200">

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">

            <div className="relative xl:col-span-2">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                name="search"
                defaultValue={filters.search}
                placeholder="Search Properties..."
                className="w-full rounded-xl border pl-11 pr-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                name="city"
                defaultValue={filters.city}
                placeholder="City"
                className="w-full rounded-xl border pl-11 pr-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="relative">
              <Building2
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                name="propertyType"
                defaultValue={filters.propertyType}
                className="w-full rounded-xl border pl-11 pr-4 py-3 outline-none focus:border-green-600"
              >
                <option value="">All Types</option>
                <option value="RESIDENTIAL_PLOT">Residential Plot</option>
                <option value="FARM_LAND">Farm Land</option>
                <option value="VILLA">Villa</option>
                <option value="APARTMENT">Apartment</option>
                <option value="COMMERCIAL">Commercial</option>
              </select>
            </div>

            <div className="relative">
              <IndianRupee
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="number"
                name="minPrice"
                defaultValue={filters.minPrice}
                placeholder="Min Price"
                className="w-full rounded-xl border pl-11 pr-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="relative">
              <IndianRupee
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="number"
                name="maxPrice"
                defaultValue={filters.maxPrice}
                placeholder="Max Price"
                className="w-full rounded-xl border pl-11 pr-4 py-3 outline-none focus:border-green-600"
              />
            </div>

          </div>

          <div className="mt-6 flex justify-end">

            <button className="rounded-full bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700">
              Search Properties
            </button>

          </div>

        </form>

      </section>

      {/* Results */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-3xl font-bold">
              Available Properties
            </h2>

            <p className="mt-2 text-gray-600">
              {properties.length} Properties Found
            </p>
          </div>

        </div>

        {properties.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-16 text-center">
            <h3 className="text-2xl font-bold">
              No Properties Found
            </h3>

            <p className="mt-3 text-gray-600">
              Try changing your search filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        )}

      </section>

    </main>
  );
}