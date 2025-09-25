"use client"
import { motion } from "framer-motion"
import { Car, ClipboardCheck, CreditCard, Key } from "lucide-react"

const steps = [
  {
    title: "Browse Cars",
    desc: "Explore our wide range of cars to find the one that fits your needs and budget.",
    icon: <Car className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Choose & Inquire",
    desc: "Select your preferred car and get in touch with us for more details.",
    icon: <ClipboardCheck className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Flexible Payment",
    desc: "We provide transparent and flexible payment options for your convenience.",
    icon: <CreditCard className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Drive Away",
    desc: "Complete the process smoothly and drive away in your new car.",
    icon: <Key className="w-10 h-10 text-yellow-500" />,
  },
]

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How <span className="text-yellow-500">It Works</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Buying your dream car has never been this easy. Just follow these four
          simple steps.
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
