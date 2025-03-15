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
        <div className=" m-4 p-4 w-[243px] rounded-lg h-105 px-7 hover:bg-grey-400 bg-amber-50" >
       <img 
  className="rounded-lg"
  src={`${CDN_URL}${cloudinaryImageId}`} 
  alt={name} 
/>

       <h4 className="font-bold py-2 text-lg ">{name}</h4>
       <h4 className="">{cuisines.join(",")}</h4>
       <h4>{avgRating}</h4>
       <h4>{deliveryTime}</h4>
       </div>
    )
}
export default RestaurantCard;