import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

type Property = {
  id: string;
  title: string;
  slug: string;
  description: string;
  city: string;
  state: string;
  price: number;
  image_url?: string;
};

export default function PropertyCard({
  property,
}: {
  property: Property;
}) {
  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        {/* Image */}
        <div className="relative h-64 overflow-hidden">

          <Image
            src={
              property.image_url ||
              "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
            }
            alt={property.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Price Badge */}
          <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-green-700 shadow backdrop-blur-md">
            ₹ {property.price.toLocaleString("en-IN")}
          </div>

          {/* Property Title */}
          <div className="absolute bottom-5 left-5 right-5">
            <h2 className="text-2xl font-bold text-white drop-shadow-lg">
              {property.title}
            </h2>
          </div>

        </div>

        {/* Content */}
        <div className="space-y-5 p-6">

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} className="text-green-600" />
            <span>
              {property.city}, {property.state}
            </span>
          </div>

          {/* Description */}
          <p className="line-clamp-3 leading-7 text-gray-600">
            {property.description}
          </p>

          {/* Divider */}
          <div className="border-t border-gray-100"></div>

          {/* Button */}
          <div className="flex items-center justify-between">

            <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Premium Property
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