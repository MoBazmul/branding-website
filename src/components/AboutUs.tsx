import { motion } from "framer-motion"
import Slider from "react-slick"
import Cars from "../data/data.json"
import CountUp from "react-countup"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Sample 6 random images from data.json
const indexes: number[] = []
while (indexes.length < 6) {
  const index = Math.floor(Math.random() * Cars.cars.length)
  if (!indexes.includes(index)) indexes.push(index)
}
const showroomImages = indexes.map(i => Cars.cars[i].imageLinks[0])

const AboutUs = () => {
  const values = [
    {
      title: "Integrity",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l9 4v6c0 5-3.58 9.74-9 11-5.42-1.26-9-6-9-11V6l9-4z" />
        </svg>
      )
    },
    {
      title: "Customer Focus",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A12 12 0 1112 20a12 12 0 01-6.879-2.196zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 0110 10v1h-3l-2 3h-6l-2-3H2v-1a10 10 0 0110-10z" />
        </svg>
      )
    },
    {
      title: "Quality",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
  ]

  const stats = [
    {
      title: "Satisfied Customers",
      value: 10000,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A12 12 0 1112 20a12 12 0 01-6.879-2.196zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Vehicles Sold",
      value: 500,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 9h8l3-9h4" />
        </svg>
      )
    },
    {
      title: "Branches Nationwide",
      value: 10,
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      )
    },
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }

  return (
    <main className="w-full">

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-gray-100 flex items-center justify-center">
        <img
          src="https://i.pinimg.com/736x/2e/35/16/2e3516d94e1d6e0cfa5dd4c6425c549d.jpg"
          alt="Ali Motors Showroom"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            About Ali Motors
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white drop-shadow-md">
            Driven by Passion, Powered by Excellence
          </p>
        </div>
      </section>

      {/* Mission & Vision with Slider */}
      <section className="py-16 px-4 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At Ali Motors, our mission is to provide quality vehicles with exceptional customer service. We aim to create a seamless buying experience and build long-lasting relationships with our clients.
            </p>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the most trusted automotive dealer in the region, recognized for our dedication, integrity, and commitment to innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <Slider {...sliderSettings}>
              {showroomImages.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`Showroom ${idx + 1}`}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50 px-4 md:px-24">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <p className="text-gray-600 mt-2">
            What drives us every day to deliver excellence.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {value.svg}
              <h3 className="text-xl font-semibold mt-4">{value.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats / Satisfied Customers */}
      <section className="py-16 px-4 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Our Achievements</h2>
          <p className="text-gray-600 mt-2">We pride ourselves on delivering excellence to every client.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.3 }}
            >
              {stat.svg}
              <h3 className="text-3xl font-bold mt-4 text-yellow-600">
                <CountUp end={stat.value} duration={2} separator="," />
                {stat.title === "Satisfied Customers" ? "+" : ""}
              </h3>
              <p className="mt-2 text-gray-700">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-24 bg-yellow-500 text-white text-center rounded-lg mx-4 md:mx-24 my-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Drive Your Dream?</h2>
        <p className="mb-6">Visit our showroom or browse our inventory online. Excellence awaits!</p>
        <button 
          className="px-8 py-3 bg-white text-yellow-600 font-semibold rounded-full shadow-md hover:shadow-xl transition-transform duration-300 cursor-pointer"
          onClick={() => window.location.href = "/contact"}
        >
          Schedule a Visit
        </button>
      </section>

    </main>
  )
}

export default AboutUs
