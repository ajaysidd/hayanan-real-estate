"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/core/lib/supabase-client";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          required
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {errorMessage && (
        <p className="text-red-600 text-sm">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-green-600 py-3 text-white font-semibold transition hover:bg-green-700 disabled:opacity-60"
      >
        {loading ? "Signing In..." : "Login"}
      </button>
    </form>
  );
}