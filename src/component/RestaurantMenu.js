import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{
    const[resInfo,setResInfo]=useState(null);
    
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

    if(resInfo===null)return <Shimmer/>
    
    const {name,cuisines,costForTwoMessage
        
    }=resInfo?.cards[2]?.card?.card?.info;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h4>{cuisines.join(",")}</h4>
           
            <h4>{costForTwoMessage}</h4>

        </div>
    )
}
export default RestaurantMenu;