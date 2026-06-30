"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { SITE } from "@/core/config/site";
import { NAVIGATION } from "@/core/config/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = NAVIGATION.filter((link) => link.showInNavbar);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="HAYANAN Logo"
            width={50}
            height={50}
            className="rounded-full"
          />

          <div>
            <h1 className="text-lg font-bold tracking-wide text-gray-900 md:text-xl">
              {SITE.name}
            </h1>

            <p className="text-xs text-gray-500">
              {SITE.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-700"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-green-700 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="border-t border-gray-200 bg-white/95 backdrop-blur-xl px-5 py-4">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition ${
                    active
                      ? "text-green-700"
                      : "text-gray-700 hover:text-green-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}