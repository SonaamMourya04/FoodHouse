import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div 
          key={item.card.info.id} 
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <img
            src={item.card.info.imageId} // TheMealDB provides full URLs
            className="w-25 h-20 object-cover rounded-md mr-4"
            alt={item.card.info.name}
          />
          <button
            className="p-2 text-xs rounded-b-xl bg-green-500 shadow-lg absolute m-auto font-bold"
            onClick={() => handleAddItem(item)}
          >
            Add+
          </button>
          <div className="flex flex-col justify-between py-1">
            <div>
              <span className="font-semibold">{item.card.info.name}</span>
              <br />
              <span className="text-sm text-gray-700">
                ₹ {item.card.info.price || 150} {/* TheMealDB doesn't have prices, so we use our generated price */}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
