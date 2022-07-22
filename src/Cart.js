import React from "react";
import "./Components/components.css";
import { useGlobalContext } from "./Components/AppProvider";
import { Products } from "./Components/Products";


export const Cart = () => {
    const { cart, total, ClearAll } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="main-body">
        <h2>Phones</h2>
        <p>currently empty</p>
      </section>
    );
  }

  return (
    <section className="main-body">
      <h2>Phones</h2>
      {cart.map((items,index) => {
        return <Products {...items} key={items.id} index = {index} />;
      })}
      <div className="total-section">
        <div className="total-container">
          <div className="total-underline"></div>
          <div className="total-wrapper">
            <p>Total</p>
            <p>₱{total}</p>
          </div>
          <button type="button" onClick={ClearAll}>Clear all</button>
        </div>
      </div>
    </section>
  );
};
