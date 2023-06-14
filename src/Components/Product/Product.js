import React from 'react';
import "./Product.css";
 import StarIcon from '@mui/icons-material/Star';
 import StarHalfIcon from '@mui/icons-material/StarHalf';
 import StarOutlineIcon from '@mui/icons-material/StarOutline';
 import { useStateValue } from "../StateProvider";

const Product = ({id, title, price, rating, image}) => {
const [{ cart }, dispatch] = useStateValue();
  const addToCart= () => {
//add items to basket
  dispatch({
    type: "ADD_TO_CART",
 item: {
      id:id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    },
  });
};

let halfRating = (rating - Math.floor(rating)) * 10;
let outline=0;
halfRating > 0
 ? (outline = 5 -Math.ceil(rating)) : 
(outline= 5-Math.floor(rating));

  return (
    <div className='product'>
      <img src={image} alt=""/>
      <div className='product_info'>
        <p>{title}</p>
        <div className='product_group'>
          <p className='product_price'>
            <small>$.</small>
            <strong>{price}</strong>
          </p>
         <div className='product_rating'>
            {/* full star */}
            {Array(Math.floor(rating))
           .fill().map((_, index) => (
            <StarIcon key={index} />
           )) }

           {/* for half star */}
           {halfRating > 0 ? <StarHalfIcon /> : <></>}
           {outline > 0 ? Array(outline).fill().map((_, index) => 
           <StarOutlineIcon key={index} />)
           : ""}
         </div>
        </div>
        </div>
        <button className='product_button'
        onClick={addToCart}
       >Add to Cart</button>
     
      
    </div>
  )
}

export default Product;
