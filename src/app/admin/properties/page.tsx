import Link from "next/link";

export default function AdminPropertiesPage() {
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

      <p>
        Property management table will be added here.
      </p>
    </main>
  );
}