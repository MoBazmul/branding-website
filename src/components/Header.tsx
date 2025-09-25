import { NavLink, useNavigate } from "react-router"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "../../public/logo.png"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="relative w-full min-h-16">
      <div className="fixed top-0 left-0 w-full h-16 shadow-sm px-4 bg-white z-50 flex items-center justify-between lg:px-24 2xl:px-32 3xl:px-96">

        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" className="h-9 lg:w-14 lg:h-14" />
          <h1 className="text-base font-serif lg:text-lg">Ali Motors</h1>
        </motion.div>

        <motion.nav
          className="hidden sm:flex items-center gap-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {["Home", "Inventory", "About Us", "Contact"].map((label, idx) => {
            const path = label === "Home" ? "/" : `/${label.toLowerCase().replace(" ", "")}`
            return (
              <NavLink
                key={idx}
                to={path}
                className={({ isActive }) => `
                  relative text-sm px-3 py-1 transition 
                  after:content-[''] after:absolute after:left-0 after:top-11 after:h-[3px] after:bg-yellow-500 
                  after:transition-all after:duration-300 
                  ${isActive ? "after:w-full text-yellow-600" : "after:w-0 hover:after:w-full"} 
                `}
              >
                {label}
              </NavLink>
            )
          })}
        </motion.nav>

        <motion.button
          className="hidden md:block ml-4 font-semibold px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-serif tracking-wide rounded-full shadow-md hover:shadow-xl hover:from-yellow-500 hover:to-yellow-600 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
        >
          Schedule a Visit
        </motion.button>

        <div className="sm:hidden">
          {toggle ? (
            <FaTimes size={23} className="cursor-pointer" onClick={() => setToggle(false)} />
          ) : (
            <FaBars size={20} className="cursor-pointer" onClick={() => setToggle(true)} />
          )}
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.nav
              key="mobile-menu"
              className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 sm:hidden z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NavLink to="/" className="text-md px-3 py-1" onClick={() => setToggle(false)}>
                Home
              </NavLink>
              <NavLink to="/inventory" className="text-md px-3 py-1" onClick={() => setToggle(false)}>
                Inventory
              </NavLink>
              <NavLink to="/aboutus" className="text-md px-3 py-1" onClick={() => setToggle(false)}>
                About Us
              </NavLink>
              <NavLink to="/contact" className="text-md px-3 py-1" onClick={() => setToggle(false)}>
                Contact
              </NavLink>
              <button
                className="ml-4 font-semibold px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-md font-serif tracking-wide rounded-lg shadow-md hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition-transform duration-500"
                onClick={() => navigate("/contact")}
              >
                Schedule a Visit
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
