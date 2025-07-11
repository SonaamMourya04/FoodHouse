import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestarauntMenu from "../utils/useRestarauntMenu";
import RestaurantCategory from "./RestaurantCategories.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestarauntMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  // Extract restaurant info
  const restaurant = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage, cloudinaryImageId, areaName, avgRating } = restaurant;

  // Extract categories
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center p-4">
      {/* Restaurant Info */}
      <div className="flex flex-col items-center mb-6">
        <img
          className="w-64 h-40 object-cover rounded-xl shadow-md mb-4"
          src={cloudinaryImageId} // TheMealDB provides full URLs
          alt={name}
        />
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-gray-600">{cuisines?.join(", ")}</p>
        <p className="text-gray-600">{areaName} • {costForTwoMessage}</p>
        <p className="text-yellow-600 font-semibold">⭐ {avgRating} Rating</p>
      </div>

      {/* Category Accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
