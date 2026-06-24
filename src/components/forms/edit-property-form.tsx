"use client";

import { useState } from "react";
import { updateProperty } from "@/core/lib/property";

interface Props {
  property: {
    id: string;
    title: string;
    city: string;
    price: number;
  };
}

export default function EditPropertyForm({
  property,
}: Props) {
  const [title, setTitle] = useState(
    property.title
  );

  const [city, setCity] = useState(
    property.city
  );

  const [price, setPrice] = useState(
    property.price
  );

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      await updateProperty(
        property.id,
        {
          title,
          city,
          price,
        }
      );

      alert(
        "Property updated successfully!"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to update property."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="block mb-2">
          Title
        </label>

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          City
        </label>

        <input
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Price
        </label>

        <input
          type="number"
          value={price}
          onChange={(e) =>
            setPrice(
              Number(e.target.value)
            )
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Update Property
      </button>
    </form>
  );
}