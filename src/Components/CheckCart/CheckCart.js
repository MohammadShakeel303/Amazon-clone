import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckCart.css";
import CheckCartProduct from "../CheckCartProduct/CheckCartProduct";
import Subtotal from "../Subtotal/Subtotal";

const CheckCart = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkcart">
        <div className='checkcart_left'>
      <img
        className="checkcart_ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg"
        alt=""
      />
       

      {cart?.length === 0 ? (
        <div>
          <h2>Your Amazon Cart is empty.</h2>
          <p>You have no items in your cart. To buy one or more products
                "Add to Cart" next to the item.
            </p>
        </div>
      ) : (
        <div>
          <h2 className="checkcart_title">Your Shopping Cart</h2>

       {/* list out the checkcartproducts */}
{cart.map(item => (
       <CheckCartProduct
       id= {item.id}
       title={item.title}
       image={item.image}
       price={item.price}
       rating={item.rating}
       />
       ))}
        </div>
      )}
    </div>
    {cart.length > 0 && (
  <div className='checkout_right'>
    
    <Subtotal />
  </div>
)}
    </div>
  );
};

export default CheckCart;
