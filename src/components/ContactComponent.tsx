import { motion } from "framer-motion"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Message submitted! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      title: "Phone",
      value: "+254 784 728462",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7-1 4 2 2 4-1 7 3v2a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
        </svg>
      ),
    },
    {
      title: "Email",
      value: "info@alimotors.co.ke",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4m12-4v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8" />
        </svg>
      ),
    },
    {
      title: "Location",
      value: "Mombasa, Kenya",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.656 0 3-1.344 3-3S13.656 5 12 5 9 6.344 9 8s1.344 3 3 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c4.418 0 8 3.582 8 8 0 5.25-8 12-8 12S4 15.25 4 10c0-4.418 3.582-8 8-8z" />
        </svg>
      ),
    },
  ]

  return (
    <main className="w-full">

      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <img
          src="https://i.pinimg.com/736x/c6/3b/96/c63b96e8a181267014deeae67098cf87.jpg"
          alt="Ali Motors Contact Hero"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-black/40" /> 
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Contact Ali Motors
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white drop-shadow-md">
            We're here to help you find your dream vehicle
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
            >
              {info.svg}
              <h3 className="text-xl font-semibold mt-4">{info.title}</h3>
              <p className="mt-2 text-gray-700">{info.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 md:px-24 bg-gray-50">
        <motion.div
          className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <motion.button
              type="submit"
              className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Map Placeholder */}
      {/* <section className="py-16 px-4 md:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>
        <motion.div
          className="w-full h-96 bg-gray-200 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Replace with actual Google Maps iframe if needed */}
          {/*<p className="text-center text-gray-500 mt-40">Map coming soon</p>
        </motion.div>
      </section> */}

    </main>
  )
}

export default Contact
