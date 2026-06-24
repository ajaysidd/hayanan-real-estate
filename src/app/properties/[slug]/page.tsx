
import PropertyGallery from "@/components/properties/property-gallery";import Image from "next/image";
import { getPropertyImages } from "@/core/lib/property";
import Link from "next/link";
import { getPropertyBySlug } from "@/core/lib/property";

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
  const images = await getPropertyImages(
  property.id
);

console.log("Property:", property);
console.log("Images:", images);

  return (
    <main className="max-w-5xl mx-auto p-8">
      <Link
        href="/properties"
        className="text-blue-600 hover:underline"
      >
        ← Back to Properties
      </Link>

     {images.length > 0 && (
  <PropertyGallery
    images={images}
    title={property.title}
  />
)}

      <h1 className="text-4xl font-bold mt-4">
        {property.title}
      </h1>

      <p className="text-gray-500 mt-2">
        {property.city}, {property.state}
      </p>

      <p className="mt-4">
        {property.description}
      </p>

      <p className="mt-6 text-2xl font-bold text-green-700">
        ₹ {property.price.toLocaleString("en-IN")}
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <strong>Property Type:</strong>{" "}
          {property.property_type}
        </div>

        <div>
          <strong>Status:</strong>{" "}
          {property.status}
        </div>

        <div>
          <strong>Address:</strong>{" "}
          {property.address}
        </div>

        <div>
          <strong>Area:</strong>{" "}
          {property.area_sqft ?? "N/A"} sqft
        </div>
      </div>
    </main>
  );
}