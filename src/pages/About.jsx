

const About= () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About CCN University</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Committed to Excellence in Education, Innovation, and Research.
        </p>
      </div>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Column - Image */}
        <div className="flex items-center justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1683887034146-c79058dbdcb1?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="CCN Campus"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column - Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Who We Are</h2>
          <p className="mb-4 text-lg leading-relaxed">
            CCN University of Science & Technology is a center of academic excellence in Comilla, Bangladesh. We offer world-class education and are dedicated to empowering students with knowledge and skills for the future.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Our mission is to build a community where innovation meets tradition and create future leaders in science, technology, business, and humanities.
          </p>
          <p className="text-lg leading-relaxed">
            With modern campus facilities, experienced faculty, and industry partnerships, CCN University is shaping the minds of tomorrow.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">🎯 Our Mission</h3>
            <p>
              To provide quality education and prepare students to excel in their professions and contribute to society through innovation, research, and ethical practices.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">🌟 Our Vision</h3>
            <p>
              To be a leading private university in Bangladesh recognized globally for academic excellence, technological advancement, and community involvement.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <div className="bg-blue-700 text-white py-10 text-center">
        <h2 className="text-2xl font-semibold">Join the CCN Journey Today!</h2>
        <p className="mt-2">Explore your future with us — Apply now or Contact for more info.</p>
      </div>
    </div>
  );
};

export default About;
