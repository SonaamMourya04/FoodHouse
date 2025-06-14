
const groceries = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238252_960_720.jpg",
    price: "₹40/kg",
  },
  {
    id: 2,
    name: "Onions",
    image:
      "https://cdn.pixabay.com/photo/2017/05/07/08/56/onions-2291323_960_720.jpg",
    price: "₹25/kg",
  },
  {
    id: 3,
    name: "Potatoes",
    image:
      "https://cdn.pixabay.com/photo/2018/01/28/12/12/potatoes-3114629_960_720.jpg",
    price: "₹30/kg",
  },
  {
    id: 4,
    name: "Milk",
    image:
      "https://cdn.pixabay.com/photo/2017/05/23/22/36/milk-2332234_960_720.jpg",
    price: "₹60/litre",
  },
  {
    id: 5,
    name: "Eggs",
    image:
      "https://cdn.pixabay.com/photo/2015/05/07/14/24/eggs-756603_960_720.jpg",
    price: "₹5/egg",
  },
];

const Grocery = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
        Grocery Store
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {groceries.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-4">{item.price}</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
