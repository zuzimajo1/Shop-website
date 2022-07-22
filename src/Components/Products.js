import React, { useState } from "react";
import "./components.css";
import * as IoIosIcon from "react-icons/io";
import { useGlobalContext } from "./AppProvider";

export const Products = ({ img, name, price, amount, id }) => {
  const { RemoveItem, AmountQuantityItem,} =
    useGlobalContext();

  return (
    <section className="products-container">
      <div className="products-wrapper">
        <div className="image-container">
          <img src={img} className="products-image"></img>
        </div>
        <div className="products-information">
          <p className="products-name">{name}</p>
          <p className="products-price">₱{price}</p>
          <button type="button" onClick={() => RemoveItem(id)}>
            remove
          </button>
        </div>
      </div>
      <div>
        <div>
          <button
            className="button-arrow-up"
            onClick={() => AmountQuantityItem(id, "inc")}
          >
            <IoIosIcon.IoIosArrowUp />
          </button>
          <p>{amount}</p>
          <button
            className="button-arrow-down"
            onClick={() => AmountQuantityItem(id, "dec")}
          >
            <IoIosIcon.IoIosArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};
