import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user, searchValue }, dispatch] = useStateValue();
  const [searchInput, setSearchInput] = useState("");

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const setSearchValue = (event) => {
    dispatch({
      type: "SET_SEARCH_VALUE",
      searchValue: event,
    });
  };

  const resetSearchValue = (event) => {
    dispatch({
      type: "SET_SEARCH_VALUE",
      searchValue: event,
    });
    setSearchInput("");
  };

  console.log(searchValue);

  return (
    <div className="header">
      <Link to="/" onClick={() => resetSearchValue("")}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.charCode === 13) {
              setSearchValue(searchInput);
            }
          }}
        />
        <SearchIcon
          className="header__searchIcon"
          onClick={() => {
            setSearchValue(searchInput);
          }}
        />
      </div>

      <div className="header__nav">
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">
            Hello, {!user ? "Guest" : user.email}
          </span>
          <Link
            to={!user && "/login"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </Link>
        </div>

        <Link to="/orders" style={{ textDecoration: "none" }}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
