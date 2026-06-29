"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SITE } from "@/core/config/site";
import { NAVIGATION } from "@/core/config/navigation";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

<Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="HAYANAN Logo"
    width={48}
    height={48}
    className="rounded-full"
  />

  <div>
    <h1 className="text-xl font-bold">
  {SITE.name}
</h1>

<p className="text-xs text-gray-500">
  {SITE.tagline}
</p>
  </div>
</Link>

        <nav className="flex items-center gap-8">

          {NAVIGATION
  .filter((link) => link.showInNavbar)
  .map((link) => (
  <Link
    key={link.href}
    href={link.href}
    className={`font-medium transition ${
      pathname === link.href
        ? "text-green-700"
        : "text-gray-700 hover:text-green-700"
    }`}
  >
    {link.label}
  </Link>
))}

        </nav>

      </div>
    </header>
  );
}