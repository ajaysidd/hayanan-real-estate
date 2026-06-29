import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/core/config/site";
import { CONTACT } from "@/core/config/contact";
import { NAVIGATION } from "@/core/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-8">

        <div className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt={`${SITE.name} Logo`}
    width={60}
    height={60}
    className="rounded-full"
  />

  <div>
    <h2 className="text-2xl font-bold text-white">
  {SITE.name}
</h2>

<p className="text-gray-400">
  {SITE.slogan}
</p>
  </div>
</div>

        <div>
          <h3 className="font-semibold mb-4">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2">
 
  {NAVIGATION
  .filter((item) => item.showInFooter)
  .map((item) => (
    <Link key={item.href} href={item.href}>
      {item.label}
    </Link>
  ))}
</div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Contact
          </h3>

          <p>Email: {CONTACT.email}</p>
<p>Phone: {CONTACT.phone}</p>
<p>{CONTACT.address}</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
     © {new Date().getFullYear()} {SITE.copyright.company}.{" "}
{SITE.copyright.rights}
      </div>
    </footer>
  );
}