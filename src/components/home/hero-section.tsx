import Link from "next/link";
import { SITE } from "@/core/config/site";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/75" />

      {/* Decorative Blur */}
      <div className="absolute top-24 left-10 h-40 w-40 rounded-full bg-green-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-24 text-center text-white">

        {/* Badge */}
        <div className="mb-8 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
          Premium Real Estate Solutions
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
          {SITE.hero.title}
          <span className="block text-green-400">
            {SITE.hero.highlight}
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg lg:text-xl">
          {SITE.description}
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <Link
            href="/properties"
            className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700"
          >
            {SITE.hero.primaryButton}
          </Link>

          <Link
            href="/projects"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
          >
            {SITE.hero.secondaryButton}
          </Link>

        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15">
            <h2 className="text-4xl font-bold text-green-400">120+</h2>
            <p className="mt-2 text-gray-200">Premium Properties</p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15">
            <h2 className="text-4xl font-bold text-green-400">50+</h2>
            <p className="mt-2 text-gray-200">Successful Projects</p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15">
            <h2 className="text-4xl font-bold text-green-400">1000+</h2>
            <p className="mt-2 text-gray-200">Happy Clients</p>
          </div>

        </div>

      </div>
    </section>
  );
}