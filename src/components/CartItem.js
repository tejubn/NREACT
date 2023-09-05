import Counter from "../components/Counter";
import { useSelector } from "react-redux";
import { CDN_URL, EMPTY } from "../utils/constants";
import ItemList from "./ItemList";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState,useEffect } from "react";
import Child from "../components/Child";
import { useSelector } from "react-redux";
const CartItem = ({items}) => {

  const [itemdata, setuniquedata] = useState(items);
  // console.log(cartItems)
  useEffect(() => {
    // Filter out duplicate values
    const uniqueitemdata = [...new Set(itemdata)];

    // Update state with unique numbers
    setuniquedata(uniqueitemdata);
    console.log(uniqueitemdata)
  }, []);
  
  let [qty, setQty] = useState(1);
  if (qty >= 1) {
    return (
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          {itemdata.map((item) => (
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
              </div>
              <div className="w-3/12 p-4">
                
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full"
                />
                <Counter cost=                   {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}/>
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
