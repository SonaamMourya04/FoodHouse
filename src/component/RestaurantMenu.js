import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestarauntMenu from "../utils/useRestarauntMenu";
import RestaurantCategory from "./RestaurantCategories.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestarauntMenu(resId);
  const[showIndex , setShowIndex]= useState( 0);

  // Show shimmer while loading
  if (resInfo === null) return <Shimmer />;

  // Extract restaurant info
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // Extract itemsCards
  const itemsCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  // console.log( itemsCards);
  console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories"-categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")}-{costForTwoMessage}
      </p>
{/* categories accordions */}

   { categories.map((category,index)=> (
    <RestaurantCategory 
    key={category?.card?.card.title}
     data={category?.card?.card}
     showItems={index=== showIndex ? true : false}
     setShowIndex={()=>setShowIndex(index)}
     />
     ))}
    </div>
  );
};

export default RestaurantMenu;
