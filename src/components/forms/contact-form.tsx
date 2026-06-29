"use client";

import { useState } from "react";
import { createInquiry } from "@/core/lib/inquiry";
import { SITE } from "@/core/config/site";

export default function ContactForm() {

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
      status: "NEW",
    });

    alert("SITE.form.sucessMessage");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  } catch (error) {
    console.error(error);

    alert("SITE.form.errorMessage");
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label>{SITE.form.nameLabel}</label>

        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>{SITE.form.emailLabel}</label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>{SITE.form.phoneLabel}</label>

        <input
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>{SITE.form.messageLabel}</label>

        <textarea
          rows={5}
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        {SITE.form.submitButton}
      </button>
    </form>
  );
}