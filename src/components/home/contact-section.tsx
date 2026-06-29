import ContactForm from "@/components/forms/contact-form";
import { SITE } from "@/core/config/site";

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="text-center mb-12">

        <h2 className="text-3xl md:text-5xl font-bold">
            {SITE.contact.title}
        </h2>

        <p className="text-gray-600 mt-3">
  {SITE.contact.subtitle}
</p>

      </div>

      <div className="max-w-3xl mx-auto">
        <ContactForm />
      </div>

    </section>
  );
}