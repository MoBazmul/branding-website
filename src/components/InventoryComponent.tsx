import { useState } from "react";
import CarsData from "../data/data.json";
import { Link } from "react-router";

const ITEMS_PER_PAGE = 6;

export default function InventoryComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "",
    make: "",
    fuelType: "",
  });

  // Apply filters
  const filteredCars = CarsData.cars.filter((car) => {
    return (
      (filters.category ? car.category === filters.category : true) &&
      (filters.make ? car.make === filters.make : true) &&
      (filters.fuelType ? car.fuelType === filters.fuelType : true)
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleCars = filteredCars.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Explore Our Inventory</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <select
          className="border p-2 rounded"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All Categories</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Hatchback">Hatchback</option>
        </select>

        <select
          className="border p-2 rounded"
          value={filters.make}
          onChange={(e) => setFilters({ ...filters, make: e.target.value })}
        >
          <option value="">All Makes</option>
          <option value="Toyota">Toyota</option>
          <option value="Nissan">Nissan</option>
          <option value="Mercedes-Benz">Mercedes</option>
        </select>

        <select
          className="border p-2 rounded"
          value={filters.fuelType}
          onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
        >
          <option value="">All Fuel Types</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCars.map((car, idx) => (
          <Link
            key={idx}
            to={`/inventory/${idx}`}
            state={{ car }}
            className="border rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <img
              src={car.imageLinks[0]}
              alt={car.model}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">
              {car.make} {car.model}
            </h3>
            <p className="text-gray-600">{car.fuelType} • {car.year}</p>
            <p className="text-blue-600 font-bold mt-1">KES {Number(car.price) * 130}</p>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        <span className="px-4 py-1 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
}
