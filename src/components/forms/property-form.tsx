"use client";

import { useState } from "react";
import { supabase } from "@/core/lib/supabase-client";

export default function PropertyForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [areaSqft, setAreaSqft] = useState("");
  const [propertyType, setPropertyType] =
    useState("RESIDENTIAL_PLOT");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setStateValue] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    const { error } = await supabase
      .from("properties")
      .insert({
        title,
        slug,
        description,
        property_type: propertyType,
        status: "AVAILABLE",
        price: Number(price),
        area_sqft: Number(areaSqft),
        address,
        city,
        state,
      });

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("Property created successfully!");

    setTitle("");
    setDescription("");
    setPrice("");
    setAreaSqft("");
    setAddress("");
    setCity("");
    setStateValue("");
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
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Description
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
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
            setPrice(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Area (sqft)
        </label>

        <input
          type="number"
          value={areaSqft}
          onChange={(e) =>
            setAreaSqft(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Property Type
        </label>

        <select
          value={propertyType}
          onChange={(e) =>
            setPropertyType(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        >
          <option value="RESIDENTIAL_PLOT">
            RESIDENTIAL_PLOT
          </option>
          <option value="FARM_LAND">
            FARM_LAND
          </option>
          <option value="VILLA">
            VILLA
          </option>
          <option value="APARTMENT">
            APARTMENT
          </option>
          <option value="COMMERCIAL">
            COMMERCIAL
          </option>
        </select>
      </div>

      <div>
        <label className="block mb-2">
          Address
        </label>

        <input
          type="text"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          City
        </label>

        <input
          type="text"
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          State
        </label>

        <input
          type="text"
          value={state}
          onChange={(e) =>
            setStateValue(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Save Property
      </button>
    </form>
  );
}