import PropertyForm from "@/components/forms/property-form";

export default function NewPropertyPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Add New Property
      </h1>

      <PropertyForm />
    </main>
  );
}