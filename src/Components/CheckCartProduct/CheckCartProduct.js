import React from 'react';
import "./CheckCartProduct.css";
import StarIcon from '@mui/icons-material/Star';
 import StarHalfIcon from '@mui/icons-material/StarHalf';
 import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useStateValue } from '../StateProvider';



const CheckCartProduct = ({id, title, image, price, rating}) => {
const [{ cart }, dispatch] = useStateValue();
const removeFromCart = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_CART",
      id:id,
    })
  }


    let halfRating = (rating - Math.floor(rating)) * 10;
let outline=0;
halfRating > 0
 ? (outline = 5 -Math.ceil(rating)) : 
(outline= 5-Math.floor(rating));

  return (

    <div className='checkcartproduct'>
      <img className='checkcartproduct_img' src={image} alt=""/>

      <div className='checkcartproduct_info'>
<p className='checkcartproduct_title'>{title}</p>
<p className='checkcartproduct_price'>

    <small>$</small>
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

         <button className='checkcartproduct_remove' onClick={ removeFromCart}>Remove from Cart</button>


      </div>
    
    </div>
  )
}

export default CheckCartProduct;
