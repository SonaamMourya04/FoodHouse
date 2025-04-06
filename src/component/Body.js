import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]); // Fixed typo
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered",listOfRestaurants)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.545246&lng=77.2941132&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const restaurants =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilterRestaurant(restaurants);
  };
  if (!useOnlineStatus)
    return (
      <h1 style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
        ⚠️ You are offline! Please check your internet connection.
      </h1>
    );
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter  flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border-black bg-white"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4  bg-green-50 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filteredRestaurants);
            }}>
            Search
          </button>
        </div>
        <div>
        <button
          className="filter-btn bg-gray-100 rounded-xl m-4 p-4"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => (res.info.avgRating ?? 0) > 4 // Added optional chaining
            );
            setFilterRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
