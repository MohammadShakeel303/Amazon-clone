import React from "react";
import "./Footer.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router-dom";
const Footer = () => {
  const HandleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <Link  onClick={HandleClick}>
        <div className="footer_backtotop">
          <ExpandLessIcon className="footer_backtotoptext" />
        </div>
      </Link>
      <div className="footerVerticalRow">
        <div className="footerVerticalCol">
    <div className="footerVerticalColHead">Get to know us</div>
    <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Press Releases</li>
        <li>Amazon Science</li>
        <li>Gift Products</li>
    </ul>

        </div>


        <div className="footerVerticalCol">
    <div className="footerVerticalColHead">Connect With Us</div>
    <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
        
    </ul>

        </div>

        <div className="footerVerticalCol">
    <div className="footerVerticalColHead">Make Money with Us</div>
    <ul>
        <li>Sell on Amazon</li>
        <li>Sell under Amazon </li>
        <li>Protect and Build Your Brand</li>
        <li>Amazon Global Selling</li>
        <li>Become an Affiliate</li>
        <li>Fulfilment by Amazon</li>
        <li>Advertise Your Products</li>
        <li>Amazon Pay on Merchants</li>
    </ul>

      </div>

      <div className="footerVerticalCol">
    <div className="footerVerticalColHead">Let Us Help You</div>
    <ul>
        <li>COVID-19 and Amazon</li>
        <li>Your Account</li>
        <li>Returns Centre</li>
        <li>100% Purchase Protection</li>
        <li>Amazon App Download</li>
        <li>Amazon Assistant Download</li>
        <li>Help</li>
    </ul>

        </div>
        <hr />
        </div>
      <hr />
<div className="footerLine">
    <span className="footerMessage">Amazon Clone &copy; feb 2022</span>
<Link to="/">
        <img onClick={HandleClick}
          className="footer_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=" "
        />
      </Link>
      </div>
    </div>
  );
};

export default Footer;
