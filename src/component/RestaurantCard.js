import  {resList} from "../utils/Constants"
import { CDN_URL } from "../utils/Constants";
const RestaurantCard=(props)=>{
    const{resData}=props;
    //destructering
    const{
      name,
      cloudinaryImageId,
      cuisines,
      deliveryTime,
      avgRating}=resData.info;
    return(
        <div className="res-card" style={{
            background:"#f0f0f0"
        }}>
       <img 
  className="res-logo"
  src={`${CDN_URL}${cloudinaryImageId}`} 
  alt={name} 
/>

       <h4>{name}</h4>
       <h4>{cuisines.join(",")}</h4>
       <h4>{avgRating}</h4>
       <h4>{deliveryTime}</h4>
       </div>
    )
}
export default RestaurantCard;