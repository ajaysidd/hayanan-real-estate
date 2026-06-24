import Link from "next/link";
import { getProperties } from "@/core/lib/property";
import PropertyTable from "@/components/dashboard/property-table";

export default async function AdminPropertiesPage() {
  const properties = await getProperties();

  return (
    <main className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Manage Properties
        </h1>

        <Link
          href="/admin/properties/new"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Add Property
        </Link>
      </div>

      <PropertyTable
        properties={properties ?? []}
      />
    </main>
  );
}