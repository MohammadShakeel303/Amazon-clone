import React from 'react';
import './Subtotal.css';
import { useStateValue } from '../StateProvider';

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();

  // Custom function to format currency
  const formatCurrency = (amount) => {
    return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  // // Calculate the total price of all items in the cart
   const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className='subtotal'>
      <p>
        Subtotal ({cart.length} items): <strong>{formatCurrency(totalPrice)}</strong>
      </p>
      <small className='subtotal_gift'>
        <input type='checkbox' /> This order contains a gift
      </small>
      <button className='subtotal_button'>Proceed to Checkout</button>


    </div>
  );
};

export default Subtotal;

