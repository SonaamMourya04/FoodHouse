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
  
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
  <div className="bg-F5F5F5">
    <div className=" px-6">
      <div className="filter flex flex-wrap justify-center ">
        <div className="search m-4 p-4 flex max-w-5xl">
  <input
    type="text"
    className="w-[600px] text-left  text-gap px-16 py-2 border border-black rounded-l-3xl focus:outline-none"
    value={searchText}
    placeholder="Search a restaurant you want...."
    onChange={(e) => setSearchText(e.target.value)}
  />
  <button
    className="px-6 py-2 text-lg bg-black text-white rounded-r-3xl hover:bg-gray-800 transition-all duration-300"
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


        {/* <div className="m-4 p-4">
          <button
            className="filter-btn bg-gray-100 rounded-xl px-4 py-2"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => (res.info.avgRating ?? 0) > 4.3
              );
              setFilterRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div> */}
      </div>

      <div className="flex flex-wrap justify-center gap-10">
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
