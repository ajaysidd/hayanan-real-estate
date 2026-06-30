import { Suspense } from "react";
import ContactForm from "@/components/forms/contact-form";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="mb-8 text-4xl font-bold">
        Contact Us
      </h1>

      <Suspense fallback={<p className="text-center py-8">Loading...</p>}>
        <ContactForm />
      </Suspense>
    </main>
  );
}