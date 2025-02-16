import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/Constants";
import { useState } from "react";


const Body =()=>{
  const [listOfRestaurants , setListOfRestaurants]=useState(resList)
    return(
        <div className="body">
            <div className="filter">
             <button
             className="filter-btn"
             onClick={()=>{
              const filteredlist=listOfRestaurants.filter(
                (res)=>res.info.avgRating>4.5
              );
              setListOfRestaurants(filteredlist);
              
             }}>
             
              Top Rated Restaurants
             </button>
            </div>
            
            <div className="res-container">
              {listOfRestaurants.map((restaurant)=>{
                return <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
              })
          }
            </div>

        </div>
    )
} 
export default Body;

