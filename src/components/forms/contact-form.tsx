"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createInquiry } from "@/core/lib/inquiry";
import { SITE } from "@/core/config/site";

export default function ContactForm() {
  const searchParams = useSearchParams();

  const propertySlug = searchParams.get("property") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      await createInquiry({
        name,
        email,
        phone,
        message,
        property_slug: propertySlug || null,
        status: "NEW",
      });

      alert(SITE.form.successMessage);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

    } catch (error) {
      console.error(error);

      alert(SITE.form.errorMessage);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {propertySlug && (
        <div>
          <label className="block mb-2 font-medium">
            Property
          </label>

          <input
            value={propertySlug}
            readOnly
            className="w-full rounded-lg border bg-gray-100 p-3"
          />
        </div>
      )}

      <div>
        <label className="block mb-2 font-medium">
          {SITE.form.nameLabel}
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border p-3"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          {SITE.form.emailLabel}
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border p-3"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          {SITE.form.phoneLabel}
        </label>

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border p-3"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          {SITE.form.messageLabel}
        </label>

        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border p-3"
          required
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
      >
        {SITE.form.submitButton}
      </button>

    </form>
  );
}