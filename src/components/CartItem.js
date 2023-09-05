import { useSelector } from "react-redux";
import { CDN_URL, EMPTY } from "../utils/constants";
import ItemList from "./ItemList";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
const CartItem = ({items}) => {
  let [qty, setQty] = useState(1);
  const add = () => {
    ++qty;
    setQty(qty);
  };
  const sub = () => {
    if (qty > 1) {
      --qty;
      setQty(qty);
    } else {
      qty = 0;
      setQty(qty);
    }
  };
  if (qty >= 1) {
    return (
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          {items.map((item) => (
            <div
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span className="font-semibold">{item.card.info.name}</span>
                  <span>
                    - ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="relative left-7 top-20">
                  <div className="flex relative right-8 top-4">
                        
                    <button
                      className="px-2 py-1 rounded border-2 border-orange-600 bg-white text-orange-600 shadow-lg text-xs font-bold"
                      onClick={() => add()}
                    >
                      <AiOutlinePlus />
                    </button>
                    <p className="bg-white text-orange-600 px-6 border-y-2 border-orange-600">
                      {qty}
                    </p>
                    <button
                      className="px-2 py-1 rounded border-2 border-orange-600 bg-white text-orange-600 shadow-lg text-xs font-bold"
                      onClick={() => sub()}
                    >
                      <AiOutlineMinus />
                    </button>
                  </div>
                </div>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-between m-auto w-6/12 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty..!</h1>
        <div>
          {" "}
          <img src={EMPTY} className="w-full" />
        </div>
      </div>
    );
  }
};
export default CartItem;
