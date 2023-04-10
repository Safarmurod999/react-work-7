const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state,amount:0,total:0, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "INCREMENT") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return {
          ...cartItem,
          amount: cartItem.amount + 1,
        };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREMENT") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return {
          ...cartItem,
          amount: cartItem.amount - 1,
        };
      }
      return cartItem;
    }).filter(el=>el.amount!==0);
    return { ...state, cart: tempCart };
  }
  if(action.type === "TOGGLE_AMOUNT"){
    return {...state,amount:state.cart.reduce((acc,el)=>{
      return acc+el.amount
    },0)}
  }
  if(action.type === "TOGGLE_TOTAL"){
    return {...state,total:state.cart.reduce((acc,el)=>{
      return Math.round(acc+el.price*el.amount)
    },0)}
  }
};

export default reducer;
