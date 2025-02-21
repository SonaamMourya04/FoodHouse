import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{
    const[resId,setResInfo]=useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    
    const fetchMenu=async () => {
        const data =await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.545246&lng=77.2941132&restaurantId=234095&catalog_qa=undefined&submitAction=ENTER"
        );
        const json=data.json();
        console.log(data.json);
        setResInfo(json.data);
    };

    
    // const {name,
    //     cuisines,
    //     avgRating,
    //     cloudinaryImageId,
    //     costForTwo
    // }=resId?.cards[2]?.card?.card?.info;

    if(!resId)return <Shimmer/>
    return(
        <div className="menu">
            {/* <h1>{name}</h1>
            <h4>{cuisines.join(",")}</h4>
            <h4>
                deliveryTime
            </h4>
            <h4>deliveryTime</h4>
            <h4>costForTwo</h4> */}

        </div>
    )
}
export default RestaurantMenu;