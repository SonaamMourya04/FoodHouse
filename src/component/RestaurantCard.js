import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // destructuring
  const {
    name,
    cloudinaryImageId,
    cuisines,
    
    areaName,
    costForTwo,
    avgRating,
  } = resData.info;

  return (
    <div className="m-4 p-4 w-[243px] rounded-lg bg-gray-100 hover:bg-gray-400 overflow-hidden">
      <img
        className="rounded-lg w-full h-40 object-cover"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt={name}
      />

      <h4 className="font-bold py-2 text-xl truncate">{name}</h4>
      <h4 className="text-sm text-wrap break-words leading-tight">
        {cuisines.join(", ")}
      </h4>
      <h4 className="text-sm">⭐ {avgRating}</h4>
      <h4 className="text-sm">{areaName}</h4>
      <h4 className="text-sm">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
