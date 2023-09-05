import { useSelector } from "react-redux";
import { CDN_URL, EMPTY } from "../utils/constants";
import ItemList from "./ItemList";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
        <CartItem items={cartItems} />
    </div>
  )
;
};
export default Cart;
