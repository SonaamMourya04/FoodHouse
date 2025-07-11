// TopRatedFood.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS_API_URL } from "../utils/Constants";

const TopRatedFood = () => {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    fetchTopRated();
  }, []);

  const fetchTopRated = async () => {
    try {
      // Fetch meal categories from TheMealDB
      const data = await fetch(RESTAURANTS_API_URL);
      const json = await data.json();

      // Transform categories to look like restaurants
      const restaurants = json.categories?.map((category) => ({
        info: {
          id: category.idCategory,
          name: category.strCategory,
          cloudinaryImageId: category.strCategoryThumb,
          cuisines: [category.strCategory],
          areaName: "Food Category",
          costForTwo: "₹200 for two",
          avgRating: (4.0 + Math.random()).toFixed(1), // Random rating between 4.0-5.0
          description: category.strCategoryDescription
        }
      })) || [];

      // Filter for "top rated" (rating >= 4.5)
      const topRated = restaurants.filter(
        (res) => parseFloat(res.info.avgRating) >= 4.5
      );

      setTopRestaurants(topRated);
      setLoading(false); // mark loading complete
    } catch (error) {
      console.error("Error fetching top rated restaurants:", error);
      setTopRestaurants([]);
      setLoading(false);
    }
  };

  return (
    <div className="px-6 py-8 bg-gradient-to-b from-[#fff4f4] to-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-[#FF3E3E] mb-10">
        🍽️ Top Rated Restaurants
      </h1>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading top rated restaurants...</p>
      ) : topRestaurants.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No top rated restaurants found.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-10">
          {topRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRatedFood;
