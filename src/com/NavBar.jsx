import React, { useEffect, useState } from "react";
import {
  logo,
  iconmenu,
  iconclose,
  imageavatar,
  iconCart,
} from "../public/images/assets";
import { Cart } from "./com";
const NavBar = ({ scrollClick }) => {
  const [menuVisible, setMenuisibility] = useState(false);
  const [cartVisible, setCartVisibility] = useState(false);
  useEffect(
    () => scrollClick(!(menuVisible || cartVisible)),
    [menuVisible, cartVisible]
  );
  return (
    <div className="nav h-[10%] flex items-center lg:px-2 relative">
      {/* mobile element : menu button / menu bg */}
      <img
        src={menuVisible ? iconclose : iconmenu}
        alt="menu img"
        className={`hidden sm:block mr-2 cursor-pointer z-[2]`}
        onClick={() => setMenuisibility((curr) => !curr)}
      />
      {(menuVisible || cartVisible) && (
        <div
          className={`absolute top-0 w-[100vw] h-[100vh] md:h-[120vh] ${
            menuVisible ? "left-0 bg-black" : "bg-black -left-[85px] lg:left-0"
          } duration-300 opacity-70 `}
          onClick={() => {
            setMenuisibility(false);
            setCartVisibility(false);
          }}
        ></div>
      )}
      {/* nav bar */}
      <img src={logo} alt="logo img" />
      <ul
        className={`flex h-full items-center ml-3 ${
          menuVisible ? "active" : ""
        }`}
      >
        <li className="mr-3 h-full flex items-center text-blue-90 cursor-pointer">
          Collections
        </li>
        <li className="mr-3 h-full flex items-center text-blue-90 cursor-pointer">
          Men
        </li>
        <li className="mr-3 h-full flex items-center text-blue-90 cursor-pointer">
          Women
        </li>
        <li className="mr-3 h-full flex items-center text-blue-90 cursor-pointer">
          About
        </li>
        <li className="mr-3 h-full flex items-center text-blue-90 cursor-pointer">
          Contact
        </li>
      </ul>
      <img
        className="cursor-pointer cart-icon ml-auto mr-3"
        src={iconCart}
        alt="icon cart"
        onClick={() => setCartVisibility((curr) => !curr)}
      />
      <img
        className="cursor-pointer avatar w-10 h-10 rounded-circle"
        src={imageavatar}
        alt="img avatar"
      />
      {cartVisible && <Cart click={() => setCartVisibility(false)} />}
    </div>
  );
};

export default NavBar;
