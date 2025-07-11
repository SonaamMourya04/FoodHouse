const RestaurantCard = (props) => {
  const { resData } = props;

  // destructuring
  const {
    name,
    cloudinaryImageId,
    areaName,
    costForTwo,
    avgRating,
  } = resData.info;

  return (
    <div className="group m-4 p-0 w-[300px] rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 relative">
      {/* Gradient overlay for premium look */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative">
        <img
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
          src={cloudinaryImageId} // TheMealDB provides full URLs
          alt={name}
        />

        {/* Rating badge with glow effect */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          ⭐ {avgRating}
        </div>



        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="p-5 relative z-10">
        <h4 className="font-bold text-xl text-gray-800 mb-2 truncate group-hover:text-orange-600 transition-colors duration-300">
          {name}
        </h4>





        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-3">📍 {areaName}</span>
          </div>
          <div className="text-right">
            <span className="font-bold text-lg text-orange-600">{costForTwo}</span>
          </div>
        </div>

        {/* Distance and delivery time */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center">
            🚗 {(Math.random() * 3 + 0.5).toFixed(1)} km away
          </span>
          <span className="flex items-center">
            ⏱️ {Math.floor(Math.random() * 15) + 20}-{Math.floor(Math.random() * 15) + 30} mins
          </span>
        </div>


      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default RestaurantCard;
