export default function WhyChooseUs() {
  const items = [
    { title: "Fast Performance", desc: "Optimized Next.js app" },
    { title: "Responsive", desc: "Mobile + Desktop friendly" },
    { title: "Modern UI", desc: "Clean Tailwind design" },
    { title: "SEO Ready", desc: "Better ranking structure" },
    { title: "Scalable", desc: "Easy to expand project" },
    { title: "Clean Code", desc: "Well structured components" },
  ];

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition"
            >
              <h3 className="text-cyan-400 text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}