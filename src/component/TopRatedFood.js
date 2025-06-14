// TopRatedFood.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const TopRatedFood = () => {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    fetchTopRated();
  }, []);

  const fetchTopRated = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.545246&lng=77.2941132&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    const topRated = restaurants.filter(
      (res) => parseFloat(res.info.avgRating) >= 3.5
    );

    setTopRestaurants(topRated);
    setLoading(false); // mark loading complete
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
