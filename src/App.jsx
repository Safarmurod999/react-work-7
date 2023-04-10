import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { useGlobalContext } from "./context";

function App() {
  const { total } = useGlobalContext();
  return (
    <div>
      <Navbar />
      <Posts />
      <div className="container">
        <p className="total-price">Total Price:{total}</p>
      </div>
    </div>
  );
}

export default App;
