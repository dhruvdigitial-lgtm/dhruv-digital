export default function Reviews() {
  const reviews = [
    { name: "Amit", text: "Amazing website design!" },
    { name: "Rahul", text: "Very fast and responsive UI." },
    { name: "Priya", text: "Looks professional and clean!" },
  ];

  return (
    <section id="reviews" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <p className="text-gray-300">"{r.text}"</p>
              <h4 className="mt-4 text-cyan-400 font-semibold">
                - {r.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}