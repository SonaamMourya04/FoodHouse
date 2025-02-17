import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState ,useEffect} from "react";


const Body =()=>{
  const [listOfRestaurants , setListOfRestaurants]=useState([]);
  const [filterdRestaurant,setFilterRestaurant]= useState([])  // Fixed typo: changed 'filterdRestaurant' to 'filteredRestaurant'
  const [searchText,setSearchText]= useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData =async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.545246&lng=77.2941132&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);

    setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilterRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []); // Ensure filtered list is updated
   }

   if(listOfRestaurants.length===0){
    return<Shimmer/>
   };

    return(
        <div className="body">
            <div className="filter">
              <div className="search">
               <input type="text" 
               className="search-box" 
               value={searchText}
               onChange={(e)=>{
                setSearchText(e.target.value);
               }}
               />
               <button 
               onClick={()=>{
                // Filter the restaurant and update the UI without modifying the original list
               const filteredRestaurant= listOfRestaurants.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
               setFilterRestaurant(filteredRestaurant);
               }}>Search</button>
              </div>
             <button
             className="filter-btn"
             onClick={()=>{
              const filteredlist=listOfRestaurants.filter(
                (res)=>res.info.avgRating>4
              );
              setFilterRestaurant(filteredlist); // Update filtered list instead of the main list
             }}>
             
              Top Rated Restaurants
             </button>
            </div>
            
            <div className="res-container">
              {filterdRestaurant.map((restaurant)=>{  // Ensure filtered list is mapped correctly
                return <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
              })
          }
            </div>

        </div>
    )
} 
export default Body;
