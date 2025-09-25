import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Do you offer financing options?",
    answer:
      "Yes! We work with trusted financial partners to provide flexible car financing options that fit your budget.",
  },
  {
    question: "Can I trade in my old car?",
    answer:
      "Absolutely. You can trade in your current car, and we’ll offer you a fair market value to put towards your new purchase.",
  },
  {
    question: "Are all cars inspected before sale?",
    answer:
      "Every car we list goes through a detailed inspection process to ensure reliability and safety before reaching our customers.",
  },
  {
    question: "Do you provide warranties?",
    answer:
      "Yes, most of our cars come with warranties for peace of mind. Extended warranties are also available.",
  },
]

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked <span className="text-yellow-500">Questions</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="px-6 pb-4 text-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
