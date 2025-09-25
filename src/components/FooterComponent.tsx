// Footer.tsx
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-yellow-500">Ali Motors</h2>
          <p className="text-gray-400">
            Premium cars at your fingertips. Explore our collection and book your test drive today.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-500 transition">Home</a></li>
            <li><a href="/inventory" className="hover:text-yellow-500 transition">Inventory</a></li>
            <li><a href="/aboutus" className="hover:text-yellow-500 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-500 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@alimotors.com</li>
            <li>Phone: +254 784 728462</li>
            <li>Address: Mombasa, Kenya</li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              className="text-yellow-500 hover:text-yellow-400 transition text-xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-yellow-500 hover:text-yellow-400 transition text-xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-yellow-500 hover:text-yellow-400 transition text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Ali Motors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
