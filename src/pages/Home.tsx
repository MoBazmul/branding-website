import FeaturedCars from "../components/FeaturedCars"
import Header from "../components/Header"
import Hero from "../components/Hero"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"
import HowItWorks from "../components/HowItWorks"
import CallToAction from "../components/CallToAction"
import Faqs from "../components/Faqs"
import ContactUs from "../components/ContactUs"
import FooterComponent from "../components/FooterComponent"

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <HowItWorks />
      <CallToAction />
      <Faqs />
      <ContactUs />
      <FooterComponent />
    </>
  )
}

export default Home