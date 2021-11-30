import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { BsBasket, BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import Login from "./Login";
import { useStateValue } from "../../StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();
  console.log(basket);

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <BsSearch className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="header__link" to="/login" exact element={<Login />}>
          <div className="header__option">
            <span className="header__optionLineOne">Hello Thuy</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link className="header__link" to="/login" exact element={<Login />}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <Link className="header__link" to="/login" exact element={<Login />}>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <FaShoppingCart />
            <span className="header__optionLineTwo header__basketCount">
              {basket ? basket.length : "0"}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
