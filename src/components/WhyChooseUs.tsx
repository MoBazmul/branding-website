import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const WhyChooseUs = () => {
  const features = [
    {
      title: "Wide Selection",
      desc: "Choose from a variety of cars across categories and brands.",
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Trusted Dealers",
      desc: "Work only with verified and professional dealers.",
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Affordable Prices",
      desc: "Find competitive prices that suit your budget.",
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Customer Support",
      desc: "Enjoy 24/7 support to assist you every step of the way.",
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
    },
  ]

  return (
    <section className="py-7 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-yellow-500">Ali Motors</span>?
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We go beyond selling cars. We provide a reliable, smooth, and satisfying
          car-buying experience tailored to your needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
