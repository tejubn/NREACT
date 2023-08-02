import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");
 const status=useOnlineStatus();
 console.log(status)
  return (
    <div className="header flex justify-between mx-3 shadow-lg bg-slate-50">
      <div className="logo-container">
      <Link href="/">
        <img className="logo w-32 rounded-full" src={LOGO_URL} /></Link>
      </div>
      <div className="nav-items flex my-10">
        <ul className="flex font-semibold justify-around gap-9">
       
          <li>OnlineStatus:{status?"🍏":"🍎"}</li>
          <li>
          <Link href="/">Home</Link></li>
          <li>
            <Link to="/about">About</Link>
            </li>
          <li>
          <Link to="/contact">Contact</Link>  
          </li>
          <li>
          <Link to="/grocery">Grocery</Link>  
          </li>
          <li>Cart</li>
          <li><button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;