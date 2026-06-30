import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { SITE } from "@/core/config/site";
import { CONTACT } from "@/core/config/contact";
import { NAVIGATION } from "@/core/config/navigation";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-slate-950 text-white">

      {/* Top Section */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">

        {/* Company */}
        <div>

          <Link href="/" className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt={`${SITE.name} Logo`}
              width={60}
              height={60}
              className="rounded-full"
            />

            <div>
              <h2 className="text-2xl font-bold">
                {SITE.name}
              </h2>

              <p className="text-sm text-gray-400">
                {SITE.slogan}
              </p>
            </div>

          </Link>

          <p className="mt-6 leading-7 text-gray-400">
            Premium real estate solutions delivering trust,
            transparency and long-term investment value.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="mb-6 text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3">

            {NAVIGATION.filter((item) => item.showInFooter).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-400 transition hover:text-green-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="mb-6 text-lg font-semibold">
            Contact
          </h3>

          <div className="space-y-5">

            <div className="flex items-start gap-3">
              <Mail className="mt-1 text-green-400" size={18} />
              <span className="text-gray-400">
                {CONTACT.email}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 text-green-400" size={18} />
              <span className="text-gray-400">
                {CONTACT.phone}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-green-400" size={18} />
              <span className="text-gray-400">
                {CONTACT.address}
              </span>
            </div>

          </div>

        </div>

        {/* Social */}
        <div>

          <h3 className="mb-6 text-lg font-semibold">
            Connect With Us
          </h3>

          <p className="mb-6 text-gray-400">
            Follow us for the latest property launches,
            investment opportunities and company updates.
          </p>

          <div className="flex gap-4">

            <a
              href="#"
              className="rounded-xl bg-white/10 p-3 transition hover:bg-green-600"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="rounded-xl bg-white/10 p-3 transition hover:bg-pink-600"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="rounded-xl bg-white/10 p-3 transition hover:bg-blue-600"
            >
              <FaLinkedinIn size={18} />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} {SITE.copyright.company}.{" "}
            {SITE.copyright.rights}
          </p>

          <p>
            Designed & Developed with ❤️ by {SITE.name}
          </p>

        </div>

      </div>

    </footer>
  );
}