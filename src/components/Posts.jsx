import React from "react";
import { useGlobalContext } from "../context";
import Post from "./Post";
import "./Posts.scss";

export default function Posts() {
  const { cart, clearCart } = useGlobalContext();
  if (cart.length == 0) {
    return (
      <div className="cart">
        <div className="container">
          <h1 className="cart-empty">Your bag is empty now!</h1>
        </div>
      </div>
    );
  } else
    return (
      <div className="cart">
        <div className="container">
          {cart.map((item) => {
            return <Post key={item.id} {...item} />;
          })}

          <button className="btn cart-clear" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </div>
      </div>
    );
}
