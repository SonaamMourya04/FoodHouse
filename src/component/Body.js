import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]); // Fixed typo
  const [searchText, setSearchText] = useState("");

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

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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
        <button
          className="filter-btn"
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

      <div className="res-container">
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
