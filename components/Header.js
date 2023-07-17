import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");

  return (
    <div className="header flex justify-between mx-3 shadow-lg bg-slate-50">
      <div className="logo-container">
        <img className="logo w-32" src={LOGO_URL} />
      </div>
      <div className="nav-items flex my-10">
        <ul className="flex font-semibold justify-around gap-9">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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