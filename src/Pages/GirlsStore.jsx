import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StoreCard from '../Components/StoreCard/StoreCard';
import Loading from '../Components/Loading/Loading.jsx';
import FilterStore from '../Components/FilterStore/FilterStore';
const GirlsStore = () => {
  const [allStoreData, setAllStoreData] = useState([]);
  const [filteredStoreData, setFilteredStoreData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const getallstore = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_Port}/getgirls`);
      const allStoreData = data.data;
      setAllStoreData(allStoreData);
      setFilteredStoreData(allStoreData); // Initialize filtered data
      setIsLoading(false);
      console.log(allStoreData);
    } catch (error) { 
      console.error("Error fetching data:", error);
      setError("Failed to load store data. Please try again later."); // Set error message
      setIsLoading(false);
    }
  };

  const handleFilterChange = (filters) => {
    console.log("Received Filters:", filters);
    const { age, color, minPrice, maxPrice } = filters;
    const filteredData = allStoreData.filter((item) => {
      // Split tags to check for colors and sizes (ages)
      const itemTags = item.tags.split(', ');
      // Extract colors and sizes (ages) from tags
      const itemColors = itemTags.filter(tag => tag.startsWith("Colour:")).map(tag => tag.split(': ')[1] || tag.split(':')[1]); // Handles "Colour Red"
      const itemAges = itemTags.filter(tag => tag.startsWith("Size:")).map(tag => tag.split(': ')[1]);
  
      const isAgeMatch = age.length ? age.some(a => itemAges.includes(a)) : true; // Match age if filters are applied
      const isColorMatch = color.length ? color.some(c => itemColors.includes(c)) : true; // Match color if filters are applied
      const rentPrice = parseFloat(item.variants[0].price); // Rent price
      const buyPrice = parseFloat(item.variants[1].price); // Buy price
      const isRentPriceMatch = rentPrice >= minPrice && rentPrice <= maxPrice;
      const isBuyPriceMatch = buyPrice >= minPrice && buyPrice <= maxPrice;
  
      return isAgeMatch && isColorMatch && (isRentPriceMatch || isBuyPriceMatch);
    });
  
    console.log("Filtered Data:", filteredData); // Log the filtered results
    setFilteredStoreData(filteredData);
  };



  useEffect(() => {
    getallstore();
  }, []);

 

  return (
    <>
    <div className='Store-Main-filter'>
      <FilterStore onFilterChange={handleFilterChange} />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div className="error-message">{error}</div> // Display error message
      ) : (
        <div className='AllStore-main-din'>
          {
            filteredStoreData.map((item) => (
              <StoreCard
                key={item.id} // Use item.id as a unique key
                id={item.id}
                image={item.image.src}
                title={item.title}
                Rent={item.variants[0]}
                Buy={item.variants[1]}
                tags={item.tags}
                prodetail={item}
              />
            ))
          }
        </div>
      )}
    </div>
    </>
  );
};

export default GirlsStore
