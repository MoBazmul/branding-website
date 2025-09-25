import { motion } from "framer-motion"
import Cars from "../data/data.json"

const indexes: number[] = []

while (indexes.length < 6) {
  const index = Math.floor(Math.random() * Cars.cars.length)
  if (!indexes.includes(index)) indexes.push(index)
}

const featuredCars = indexes.map(i => Cars.cars[i])

const FeaturedCars = () => {
  return (
    <section className="mt-72 bg-gray-50 py-10 sm:mt-16 xl:px-28">
      <h1 className="text-2xl font-bold text-center">Featured Cars</h1>

      <div className="w-full mt-8 grid gap-3 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredCars.map((car, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={car.imageLinks[0]}
              alt={`${car.make} ${car.model} view ${index + 1}`}
              className="w-full h-52 object-cover transition-opacity duration-300 lg:group-hover:opacity-70"
            />

            <div
              className="
                absolute inset-0 flex flex-col items-center justify-center 
                bg-black/60 text-white text-sm p-3 text-center
                lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100
              "
            >
              <h2 className="text-lg font-semibold">
                {car.make} {car.model}
              </h2>
              <p className="mt-1">Fuel: {car.fuelType}</p>
              <p>Engine: {car.engineSize}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedCars
