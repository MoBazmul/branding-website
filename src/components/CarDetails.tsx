import { useLocation } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import FooterComponent from "./FooterComponent";

const CarDetails = () => {
  const location = useLocation();
  const { car } = location.state || {};

  if (!car) return <p className="p-6 text-center">No car data found.</p>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* HERO CAROUSEL */}
      <section className="relative h-[65vh] w-full">
        <Slider {...sliderSettings} className="h-full">
          {car.imageLinks.map((img: string, index: number) => (
            <div key={index} className="relative h-[65vh]">
              <img
                src={img}
                alt={`${car.make} ${car.model}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {car.make} {car.model}
                </h1>
                <p className="max-w-2xl text-gray-200 mb-6 text-center">
                  Experience the luxury, comfort, and performance that defines {car.make}.
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById("details");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
            Specifications
          </h2>
          <ul className="space-y-3 text-gray-700" id="details">
            <li><span className="font-semibold">Category:</span> {car.category}</li>
            <li><span className="font-semibold">Make:</span> {car.make}</li>
            <li><span className="font-semibold">Model:</span> {car.model}</li>
            <li><span className="font-semibold">Fuel Type:</span> {car.fuelType}</li>
            <li><span className="font-semibold">Year:</span> {car.year}</li>
            <li><span className="font-semibold">Price:</span> KES {Number(car.price) * 130}</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
            Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {car.description ||
              "This vehicle combines reliability with luxury, offering advanced features, excellent performance, and a smooth driving experience."}
          </p>
        </div>
      </section>

      <section className="bg-yellow-500 py-10 mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Interested in this {car.make} {car.model}?
        </h3>
        <button className="px-8 py-3 bg-black text-yellow-500 font-semibold rounded-lg shadow hover:bg-gray-800 transition">
          Contact Us Today
        </button>
      </section>
      <FooterComponent />
    </div>
  );
};

export default CarDetails;
