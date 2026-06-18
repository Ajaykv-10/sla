function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-blue-50 px-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Explore the World With Us
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Discover amazing destinations and create unforgettable
        memories with our carefully curated travel experiences.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Book Now
      </button>
    </section>
  );
}

export default HeroSection;