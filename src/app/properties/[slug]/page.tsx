import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  IndianRupee,
  Building2,
  Ruler,
  BadgeCheck,
} from "lucide-react";

import PropertyGallery from "@/components/properties/property-gallery";
import { getPropertyBySlug, getPropertyImages } from "@/core/lib/property";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const property = await getPropertyBySlug(slug);
  const images = await getPropertyImages(property.id);

  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-green-700 font-semibold hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Properties
        </Link>

        <div className="mt-6">
          <PropertyGallery
            images={images}
            title={property.title}
          />
        </div>

      </section>

      {/* Content */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Left */}

          <div className="space-y-10 lg:col-span-2">

            <div>

              <h1 className="text-4xl font-bold text-gray-900">
                {property.title}
              </h1>

              <div className="mt-4 flex items-center gap-2 text-gray-600">
                <MapPin size={18} className="text-green-600" />
                {property.city}, {property.state}
              </div>

            </div>

            {/* Overview */}

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="mb-6 text-2xl font-bold">
                Property Overview
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">

                <div className="flex items-center gap-3">
                  <IndianRupee className="text-green-600" />
                  <div>
                    <p className="text-sm text-gray-500">
                      Price
                    </p>

                    <p className="font-bold">
                      ₹ {property.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Building2 className="text-green-600" />

                  <div>
                    <p className="text-sm text-gray-500">
                      Property Type
                    </p>

                    <p className="font-bold">
                      {property.property_type}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BadgeCheck className="text-green-600" />

                  <div>
                    <p className="text-sm text-gray-500">
                      Status
                    </p>

                    <p className="font-bold">
                      {property.status}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Ruler className="text-green-600" />

                  <div>
                    <p className="text-sm text-gray-500">
                      Area
                    </p>

                    <p className="font-bold">
                      {property.area_sqft ?? "N/A"} Sq.ft
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Description */}

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="mb-6 text-2xl font-bold">
                Description
              </h2>

              <p className="leading-8 text-gray-600">
                {property.description}
              </p>

            </div>

            {/* Address */}

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="mb-6 text-2xl font-bold">
                Address
              </h2>

              <p className="leading-7 text-gray-600">
                {property.address}
              </p>

            </div>

          </div>

          {/* Right Sidebar */}

          <aside>

            <div className="sticky top-28 rounded-3xl bg-white p-8 shadow-xl">

              <h3 className="text-3xl font-bold text-green-700">
                ₹ {property.price.toLocaleString("en-IN")}
              </h3>

              <p className="mt-2 text-gray-500">
                Premium Property
              </p>

              <Link
  href={`/contact?property=${property.slug}`}
  className="mt-8 block w-full rounded-full bg-green-600 py-4 text-center font-semibold text-white transition hover:bg-green-700"
>
  Contact Now
</Link>

              <div className="mt-8 border-t pt-6">

                <p className="font-semibold">
                  Need Assistance?
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Our real estate experts are available to help you
                  choose the perfect property based on your budget and
                  investment goals.
                </p>

              </div>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}