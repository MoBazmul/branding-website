import { motion } from "framer-motion"

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
            Have questions or need assistance? Our team is here to help you with car
            inquiries, financing, and more. Reach out today and let’s make your car
            buying journey smooth and enjoyable.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              📍 <span className="font-medium">Location:</span> Nairobi, Kenya
            </p>
            <p>
              📞 <span className="font-medium">Phone:</span> +254 712 345 678
            </p>
            <p>
              ✉️ <span className="font-medium">Email:</span> support@alimotors.com
            </p>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          className="bg-gray-50 p-6 rounded-2xl shadow-md"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
