import {
  ShieldCheck,
  MapPinned,
  FileCheck2,
  TrendingUp,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Trusted Developer",
      description:
        "Delivering quality real estate projects with transparency and customer satisfaction.",
      icon: ShieldCheck,
    },
    {
      title: "Prime Locations",
      description:
        "Carefully selected locations with excellent connectivity and future growth potential.",
      icon: MapPinned,
    },
    {
      title: "Legal Documentation",
      description:
        "Every property comes with clear legal documentation and hassle-free ownership.",
      icon: FileCheck2,
    },
    {
      title: "Investment Growth",
      description:
        "High appreciation potential, making every investment secure and rewarding.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            Why HAYANAN
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Why Choose Us
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            We do not just sell properties—we help you build your future with
            trust, transparency, and long-term value.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-green-600 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                  <Icon size={32} strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}