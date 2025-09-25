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
    <section className="relative w-full bg-white">
      {/* Hero */}
      <div
        className="relative w-full flex flex-col items-center justify-center"
        style={{
          minHeight: '60vh',
          paddingTop: '100px',
          paddingBottom: '40px',
          backgroundImage: "url('https://i.pinimg.com/736x/2e/35/16/2e3516d94e1d6e0cfa5dd4c6425c549d.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            About Ali Motors
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white drop-shadow-md">
            Driven by Passion, Powered by Excellence
          </p>
        </div>
      </div>

      {/* Mission & Slider */}
      <div className="py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              At Ali Motors, our mission is to provide quality vehicles with exceptional customer service. We aim to create a seamless buying experience and build long-lasting relationships with our clients.
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 text-sm sm:text-base">
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
                    className="w-full h-auto max-h-80 sm:max-h-96 md:max-h-[28rem] object-cover rounded-xl shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-12 px-4 sm:px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Core Values</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            What drives us every day to deliver excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {value.svg}
              <h3 className="text-lg sm:text-xl font-semibold mt-3">{value.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Achievements</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            We pride ourselves on delivering excellence to every client.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.3 }}
            >
              {stat.svg}
              <h3 className="text-2xl sm:text-3xl font-bold mt-3 text-yellow-600">
                <CountUp end={stat.value} duration={2} separator="," />
                {stat.title === "Satisfied Customers" ? "+" : ""}
              </h3>
              <p className="mt-1 text-gray-700 text-sm sm:text-base">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-12 px-4 sm:px-6 md:px-12 bg-yellow-500 text-white text-center rounded-lg mx-4 sm:mx-6 md:mx-12 my-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Drive Your Dream?</h2>
        <p className="mb-4 text-sm sm:text-base">Visit our showroom or browse our inventory online. Excellence awaits!</p>
        <button 
          className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-yellow-600 font-semibold rounded-full shadow-md hover:shadow-xl transition-transform duration-300 cursor-pointer"
          onClick={() => window.location.href = "/contact"}
        >
          Schedule a Visit
        </button>
      </div>
    </section>
  )
}

export default AboutUs
