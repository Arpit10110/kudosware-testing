// src/Components/FilterComponent/FilterComponent.jsx
import React, { useState } from 'react';

const FilterStore = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    age: [],
    color: [],
    minPrice: 50, // Default minimum price
    maxPrice: 1000, // Default maximum price
  });

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;

    // Handle checkboxes for age and color
    if (name === 'age' || name === 'color') {
      setFilters((prevFilters) => {
        const newValues = checked
          ? [...prevFilters[name], value] // Add value if checked
          : prevFilters[name].filter((item) => item !== value); // Remove if unchecked
        return { ...prevFilters, [name]: newValues };
      });
    } else {
      // Handle price slider
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value, // Update the price
      }));
    }
  };

  const applyFilters = () => {
    // Send the current filters to the parent component
    onFilterChange({
      age: filters.age,
      color: filters.color,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
    });
  };

  return (
    <div className="filter-form">
      <h4>Select Age</h4>
      <div className="filter-options">
        {["0-3 months", "3-6 months", "6-12 months", "1-2 years", "2-3 years", "3-4 years"].map((age) => (
          <label key={age}>
            <input
              type="checkbox"
              name="age"
              value={age}
              checked={filters.age.includes(age)}
              onChange={handleFilterChange}
            />
            {age}
          </label>
        ))}
      </div>

      <h4>Select Color</h4>
      <div className="filter-options">
        {["Blue", "Red", "Green"].map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              name="color"
              value={color}
              checked={filters.color.includes(color)}
              onChange={handleFilterChange}
            />
            {color}
          </label>
        ))}
      </div>

      <h4>Select Price</h4>
      <label>
        <input
          type="range"
          name="minPrice"
          min="50"
          max="1000"
          value={filters.minPrice}
          onChange={handleFilterChange}
        />
        Min Price: ₹{filters.minPrice}
      </label>
      <label>
        <input
          type="range"
          name="maxPrice"
          min="50"
          max="1000"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
        Max Price: ₹{filters.maxPrice}
      </label>

      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterStore;
