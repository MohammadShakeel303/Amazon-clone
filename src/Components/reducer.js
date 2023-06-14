export const initialState = {
  cart: [],
  user: null,
};

// export const totalPrice = (cart) =>
// cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {

case "SET_USER":
    return {
        ...state,
        user: action.user,
    };

    case "ADD_TO_CART":
      //logic for adding item to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      //Logic for removing item in cart

      //we cloned the cart
      let newCart = [...state.cart];

      //we check to see if product exists
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        //item exist in cart, remove it..
        newCart.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as its now in cart`
        );
      }
      return { ...state, cart: newCart };
   

    default:
      return state;
  }
};

export default reducer;
