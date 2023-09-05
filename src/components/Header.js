import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext,useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Header render");
  const status = useOnlineStatus();
  const { loggedUser } = useContext(UserContext);
  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
      // Filter out duplicate values
      const uniqueitemdata = [...new Set(cartItems)];
      console.log(uniqueitemdata.length)
  return (
    <div className="header flex justify-between mx-3 shadow-lg bg-slate-50">
      <div className="logo-container">
        <Link href="/">
          <img className="logo w-32 rounded-full" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items flex my-10">
        <ul className="flex font-semibold justify-around gap-9">
          <li>OnlineStatus:{status ? "🍏" : "🍎"}</li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">
              <BsCart4 className="inline text-2xl" /> ({uniqueitemdata.length})
            </Link>
          </li>
          <li>{loggedUser}</li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
