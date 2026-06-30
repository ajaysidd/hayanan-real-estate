import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80" />

      {/* Decorative Blur */}
      <div className="absolute left-10 top-16 h-52 w-52 rounded-full bg-green-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">

        {/* Badge */}
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
          Let us Build Your Future Together
        </span>

        {/* Heading */}
        <h2 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
          Ready to Find Your
          <span className="block text-green-400">
            Dream Property?
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
          Explore premium residential plots, luxury villas, apartments,
          and commercial spaces carefully selected to match your lifestyle
          and investment goals.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <Link
            href="/properties"
            className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700"
          >
            Explore Properties
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}