export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 font-semibold uppercase tracking-widest">
            About DDS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Your One-Stop Digital
            <span className="text-cyan-400"> Service Center</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            DDS (Dhruv Digital & Stationery) provides fast, reliable and
            affordable digital services for students, professionals and
            villagers. From online government services to printing,
            photocopy, stationery and mobile accessories, everything is
            available at one place.
          </p>

          <p className="text-gray-400 mt-4 leading-8">
            Our goal is to save your time by providing quality service with
            transparency and customer satisfaction.
          </p>

          <button className="mt-8 bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-cyan-300 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400 transition">
            <h3 className="text-4xl font-bold text-cyan-400">1000+</h3>
            <p className="text-gray-400 mt-2">
              Happy Customers
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400 transition">
            <h3 className="text-4xl font-bold text-cyan-400">50+</h3>
            <p className="text-gray-400 mt-2">
              Daily Services
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400 transition">
            <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
            <p className="text-gray-400 mt-2">
              Service Categories
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400 transition">
            <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
            <p className="text-gray-400 mt-2">
              Customer Support
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}