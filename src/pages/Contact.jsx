// ContactPage.jsx

import CustomButton from "../components/CustomButton";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-100 text-gray-800">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side: Info Section */}
        <div className="bg-blue-600 text-white flex flex-col justify-center p-10">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">We’d love to hear from you. Whether you have a question or just want to say hello, we are here to help!</p>
          <ul className="space-y-4">
            <li><strong>📞 Phone:</strong> +8801XXXXXXXXX</li>
            <li><strong>📧 Email:</strong> ccnuniversity@gmail.com</li>
            <li><strong>📍 Address:</strong> CCN University of Science & Technology Cumilla Bangladesh</li>
          </ul>
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-10">
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
               <CustomButton> Send Message</CustomButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
