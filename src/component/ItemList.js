import { CDN_URL } from "../utils/Constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div 
          key={item.card.info.id} 
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <img 
            src={CDN_URL + item.card.info.imageId}
            className="w-25 h-20 object-cover rounded-md mr-4"
            alt={item.card.info.name}
          />
          <button className="p-2 text-xs rounded-b-xl bg-green-500 shadow-lg absolute m-auto font-bold ">Add+</button>
          <div className="flex flex-col justify-between py-1">
            <div>
              <span className="font-semibold">{item.card.info.name}</span>
              <br />
              <span className="text-sm text-gray-700">
                ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
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
