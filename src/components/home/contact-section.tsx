import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import ContactForm from "@/components/forms/contact-form";
import { SITE } from "@/core/config/site";

export default function ContactSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {SITE.contact.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            {SITE.contact.subtitle}
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-2">

            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <Phone size={28} />
              </div>

              <h3 className="text-xl font-bold">
                Call Us
              </h3>

              <p className="mt-2 text-gray-600">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <Mail size={28} />
              </div>

              <h3 className="text-xl font-bold">
                Email
              </h3>

              <p className="mt-2 text-gray-600">
                info@hayanan.com
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <MapPin size={28} />
              </div>

              <h3 className="text-xl font-bold">
                Office
              </h3>

              <p className="mt-2 text-gray-600">
                Hyderabad, Telangana, India
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <Clock3 size={28} />
              </div>

              <h3 className="text-xl font-bold">
                Working Hours
              </h3>

              <p className="mt-2 text-gray-600">
                Mon - Sat • 9:00 AM - 6:00 PM
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg lg:col-span-3">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}