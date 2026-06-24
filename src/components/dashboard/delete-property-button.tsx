"use client";

import { useRouter } from "next/navigation";
import { deleteProperty } from "@/core/lib/property";

interface Props {
  propertyId: string;
}

export default function DeletePropertyButton({
  propertyId,
}: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmed) return;

    try {
      await deleteProperty(propertyId);

      alert("Property deleted successfully!");

      router.refresh();
    } catch (error) {
      console.error(error);

      alert("Failed to delete property.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:underline"
    >
      Delete
    </button>
  );
}