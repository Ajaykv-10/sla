function MainContent() {
  return (
<main className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
  <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
    <h2 className="text-3xl font-bold mb-4">
      Welcome!
    </h2>

    <p className="text-gray-600 mb-6">
      This is the main content section of the website.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Our Services</h3>
        <p className="text-gray-600">
          Explore the various services we provide to help your business grow.
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-600">
          Delivering high-quality solutions with innovation and reliability.
        </p>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Get Started</h3>
        <p className="text-gray-600">
          Join us today and take the first step toward success.
        </p>
      </div>
    </div>
  </div>
</main>
  );
}

export default MainContent;