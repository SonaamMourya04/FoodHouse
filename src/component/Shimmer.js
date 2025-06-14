const Shimmer = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-4">
        {Array(8).fill("").map((_, index) => (
          <div key={index} className="w-60 rounded-xl shadow-md bg-gray-200 p-3 animate-pulse">
            <div className="bg-gray-300 h-36 w-full rounded-lg mb-4"></div>
            <div className="bg-gray-300 h-5 w-3/4 rounded mb-2"></div>
            <div className="bg-gray-300 h-4 w-1/2 rounded mb-2"></div>
            <div className="flex justify-between mt-3">
              <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
              <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;

