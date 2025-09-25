"use client"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Kamau N.",
    rating: 5,
    feedback: "Reliable and trustworthy dealer. I felt very confident throughout the process.",
  },
  {
    name: "Fatuma H.",
    rating: 5,
    feedback: "I highly recommend Ali Motors. Excellent cars and honest service!",
  },
  {
    name: "Abdalla M.",
    rating: 5,
    feedback: "Customer service was top-notch. The whole process was smooth.",
  }
]

const Testimonials = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers <span className="text-yellow-500">Say</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We value feedback from our happy customers across Kenya.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
              <h4 className="font-semibold text-gray-800">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
