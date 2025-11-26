import CustomButton from "../CustomButton";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#334155] dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-white py-12 px-6 shadow-inner shadow-black/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-8">

        {/* Section 1 */}
        <div className="md:w-[20%] w-full space-y-4">
          <h2 className="text-2xl font-extrabold tracking-wide text-cyan-400 dark:text-cyan-300">Library Club</h2>
          <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
            Empowering readers with knowledge and books worldwide. Discover, learn and grow with us.
          </p>
        </div>

        {/* Section 2 */}
        <div className="md:w-[20%] w-full space-y-4">
          <h2 className="font-semibold text-lg text-cyan-300">Quick Links</h2>
          <ul className="space-y-3 text-gray-400 dark:text-gray-500 text-sm">
            <li><a href="#" className="hover:text-cyan-400 dark:hover:text-cyan-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-cyan-400 dark:hover:text-cyan-300 transition">All Books</a></li>
            <li><a href="#" className="hover:text-cyan-400 dark:hover:text-cyan-300 transition">Dashboard</a></li>
            <li><a href="#" className="hover:text-cyan-400 dark:hover:text-cyan-300 transition">My Cart</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="md:w-[20%] w-full space-y-4">
          <h2 className="font-semibold text-lg text-cyan-300">Help</h2>
          <ul className="space-y-3 text-gray-400 dark:text-gray-500 text-sm">
            <li><a href="#" className="hover:text-cyan-400 dark:hover:text-cyan-300 transition">Support Center</a></li>
            <li><a href="#" className="hover:text-cyan-400 dark:hover:text-cyan-300 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-cyan-400 dark:hover:text-cyan-300 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyan-400 dark:hover:text-cyan-300 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Section 4 - Big Section */}
        <div className="md:w-[30%] w-full space-y-5">
          <h2 className="font-semibold text-lg text-cyan-300">Join Our Newsletter</h2>
          <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
            Get the latest book updates and offers directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
             <CustomButton> Subscribe</CustomButton>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 dark:text-gray-500 text-sm mt-12 border-t border-gray-700 dark:border-gray-800 pt-6 select-none">
        © {currentYear} <span className="font-semibold text-cyan-400 dark:text-cyan-300">CCN Library Club</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
