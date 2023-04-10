import { createContext, useContext, useState, useReducer, useEffect } from "react";

import cartItems from "./data";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };
  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  useEffect(()=>{
    dispatch({type:'TOGGLE_AMOUNT'});
  },state.cart)
  useEffect(()=>{
    dispatch({type:'TOGGLE_TOTAL'});
  },state.cart)
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increment,
        decrement,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
