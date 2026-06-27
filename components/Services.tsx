export default function Services() {
  const services = [
    "🖨️ Print Services",
    "📄 Resume Services",
    "🪪 Aadhaar & Government Services",
    "🗳️ Voter ID Services",
    "🚗 Learning Licence Slot Booking",
    "📷 Photo, Lamination & Colour Print",
    "📚 Stationery Items",
    "💻 Online Form Filling",
  ];

  return (
    <section
  id="services"
  className="bg-gray-950 py-20 px-6"
>
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400">
          Our Services
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Fast • Affordable • Reliable
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {services.map((service) => (
            <div
              key={service}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-white">
                {service}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}