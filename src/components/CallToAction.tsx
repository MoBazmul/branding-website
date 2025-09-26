import { motion } from "framer-motion"
import { useNavigate } from "react-router";

export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/70/6b/6d/706b6df00c884a22f5ae2154ba11a15d.jpg')", 
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Drive Your Dream Car Today
        </motion.h2>

        <motion.p
          className="text-lg mb-16 max-w-2xl mx-auto"          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Discover our exclusive range of cars and experience unmatched
          performance, comfort, and style with Ali Motors.
        </motion.p>

        <motion.button
          className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          onClick={() => navigate("/contact")}
        >
          Schedule a Visit
        </motion.button>
      </div>
    </section>
  )
}
