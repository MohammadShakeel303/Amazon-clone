import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useStateValue } from "../StateProvider";
  
import { auth } from "../firebase";

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=" "
        />
      </Link>

{/* Location */}

<Link to="/location" className="header_link">
  <div className="header_address">
    <LocationOnIcon className="header_addressIcon"/>
    <div className="header-option">
            <span className="header_optionOne">Hello</span>
            <span className="header_optionTwo">Select Address</span>
          </div>
  </div>
</Link>
      {/* search bar */}

      <div className="header_search">
        <input
          type="text"
          className="search_input"
          placeholder="Search in Amazon"
        />

        <SearchIcon className="searchIcon" />
      </div>

      {/*3links  */}

      <div className="header_nav">
        {/* 1st link */}
        <Link to={!user && '/login'} className="header_link">
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionTwo"> {user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/orders" className="header_link">
          <div className="header_option">
            <span className="header_optionOne">Returns</span>
            <span className="header_optionTwo">&Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/prime" className="header_link">
          <div className="header_option">
            <span className="header_optionOne">Try</span>
            <span className="header_optionTwo">prime</span>
          </div>
        </Link>

        {/* 4ht link */}
        <Link to="/checkcart" className="header_link">
          <div className="header_optionCart">
            <ShoppingCartOutlinedIcon />

            <span className="header_optionTwo header_cartCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
