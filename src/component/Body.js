import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RESTAURANTS_API_URL } from "../utils/Constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]); // Fixed typo
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
          areaName: category.strArea || "Food Category", // Use API area if available
          costForTwo: "₹200 for two",
          avgRating: (4.0 + Math.random()).toFixed(1), // Random rating between 4.0-5.0
          description: category.strCategoryDescription
        }
      })) || [];

      setListOfRestaurants(restaurants);
      setFilterRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setListOfRestaurants([]);
      setFilterRestaurant([]);
    }
  };
  
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold mb-2 drop-shadow-lg">
            🍕 Delicious Food Delivered Fast
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            Discover amazing restaurants and order your favorite meals
          </p>

          {/* Enhanced Search Bar */}
          <div className="flex items-center justify-center max-w-2xl mx-auto">
            <div className="relative flex w-full shadow-2xl border-2 border-gray-300 rounded-2xl overflow-hidden">
              <input
                type="text"
                className="w-full px-6 py-4 text-gray-700 text-lg focus:outline-none bg-white/95 backdrop-blur-sm"
                value={searchText}
                placeholder="🔍 Search restaurants, cuisines, dishes..."
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="px-8 py-4 text-lg bg-white text-gray-700 hover:bg-gray-50 transition-all duration-300 font-semibold border-l border-gray-300"
                onClick={() => {
                  const filteredRestaurants = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilterRestaurant(filteredRestaurants);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Restaurant Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

};

export default Body;
