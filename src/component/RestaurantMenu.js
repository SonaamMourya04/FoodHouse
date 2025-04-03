import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestarauntMenu from "../utils/useRestarauntMenu";

const RestaurantMenu = () => {
    
    const {resId}=useParams();
    const resInfo = useRestarauntMenu(resId);

    
    // Show shimmer while loading
    if (resInfo === null) return <Shimmer />;

    // Extract restaurant info
    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;

    // Extract itemsCards
    const itemsCards =
        resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ;

    // console.log( itemsCards);
    console.log( resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{costForTwoMessage}</h4>
           
                
            <ul>
    {itemsCards.map((item) => (
        <li key={item.card.info.id}>
            {item.card.info.name} - Rs {item.card.info.price / 100}
        </li>
    ))}
</ul>

        </div>
    );
};

export default RestaurantMenu;
