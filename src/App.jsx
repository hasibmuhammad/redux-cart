import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import CartItem from "./components/CartItem";
import cartItems from "./api/cartItems";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-md mx-auto my-20 space-y-5">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <hr />
        <div className="flex justify-between">
          <h1 className="font-bold tracking-widest text-md">Total</h1>
          <p className="font-bold tracking-widest text-md">$1000</p>
        </div>
      </div>
    </>
  );
}

export default App;
