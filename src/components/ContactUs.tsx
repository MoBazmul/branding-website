import { motion } from "framer-motion"
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa"

export default function ContactUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions or need assistance? Our team is here to help you with car inquiries, financing, and more. Reach out today and make your car buying journey smooth!
          </p>

          <div className="space-y-6 text-gray-700">
            {/* Phone */}
            <a
              href="tel:+254784728462"
              className="flex items-center text-lg font-medium hover:text-yellow-500 transition"
            >
              <MdPhone className="text-yellow-500 w-6 h-6" />
              <span className="ml-2">+254 784 728 462</span>
            </a>

            {/* Email */}
            <a
              href="mailto:support@alimotors.com"
              className="flex items-center text-lg font-medium hover:text-yellow-500 transition"
            >
              <MdEmail className="text-yellow-500 w-6 h-6" />
              <span className="ml-2">support@alimotors.com</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254784728462"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg font-medium hover:text-yellow-500 transition"
            >
              <FaWhatsapp className="text-green-500 w-6 h-6" />
              <span className="ml-2">Chat on WhatsApp</span>
            </a>

            {/* Location */}
            <p className="flex items-center text-lg font-medium">
              <MdLocationOn className="text-red-500 w-6 h-6" />
              <span className="ml-2">Mombasa, Kenya</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
