import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import carsObject from "../data/hero.json"
import { useNavigate } from "react-router"

const carImages = carsObject.heroImages

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full flex flex-col py-4 md:flex-row px-6 bg-white md:py-16 md:gap-4 lg:px-28 2xl:px-36 3xl:px-96">
      <motion.div
        className="text-center md:text-left md:w-2/3 md:mt-7 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
          Drive Your Dream
        </h1>
        <p className="text-gray-600 md:text-lg">
          Step into the car you’ve always imagined. Discover, choose, and drive your dream with confidence today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <motion.button
            className="px-3 py-2 bg-yellow-500 text-white rounded-full shadow-md hover:shadow-xl transition md:text-sm md:px-6 md:py-3 lg:text-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/inventory")}
          >
            Explore Inventory
          </motion.button>
          <motion.button
            className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-full transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
          >
            Schedule a Visit
          </motion.button>
        </div>
      </motion.div>

      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative">
        {carImages.map(car => (
          <motion.img
            key={car.id}
            src={car.url}
            alt={car.alt}
            className={`absolute w-full max-w-md h-72 rounded-lg shadow-lg object-cover transition-opacity duration-1000 ${
              car.id === current ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0, y:40 }}
            animate={{ opacity: car.id === current ? 1 : 0, y: 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
