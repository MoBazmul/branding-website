import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Inventory from "./pages/Inventory"
import CarDetails from "./components/CarDetails"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  return (
    <div className="w-full min-h-svh bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:id" element={<CarDetails />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
