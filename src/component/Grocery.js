
const groceries = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/05/GettyImages-1043681048.jpg?w=1200",
    price: "₹40/kg",
  },
  {
    id: 2,
    name: "Onions",
    image:
      "https://wallpaperaccess.com/full/1912930.jpg",
    price: "₹25/kg",
  },
  {
    id: 3,
    name: "Potatoes",
    image:
      "https://www.photos-public-domain.com/wp-content/uploads/2010/11/potatoes.jpg",
    price: "₹30/kg",
  },
  {
    id: 4,
    name: "Milk",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.4rsDhxmkzmOBVBiPyijHswHaFX&pid=Api&P=0&h=180",
    price: "₹60/litre",
  },
  {
    id: 5,
    name: "Eggs",
    image:
      "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
    price: "₹5/egg",
  },
  {
    id: 6,
    name: "Apples",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.3oUCksZmXiUt0wPDLxwQugHaE7&pid=Api&P=0&h=180",
    price: "₹90/kg",
  },
  {
    id: 7,
    name: "panner",
    image:
      "https://www.pragatimilk.com/PragatiMilkImages/ProductImages/paneer-five-hundred-g-poly-pragati-milk.png",
    price: "₹60/200gm",
  },
  {
    id: 8,
    name: "Cashew",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/12/DV/PH/XG/41322576/packed-cashew-nuts-1000x1000.jpg",
    price: "₹100/kg",
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
