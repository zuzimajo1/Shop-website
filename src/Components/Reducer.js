import React from "react";
import { List } from "./List";

export const Reducer = (state, action) => {
  if (action.type === "CLEAR_ALL") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((items) => items.id !== action.payload),
    };
  }

  //amountS is the amount in icon-bag

  if (action.type === "GET_INFO") {
    let { total, amountS } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = amount * price;
        cartTotal.total += itemTotal;
        cartTotal.amountS += amount;
        return cartTotal;
      },
      {
        total: 0,
        amountS: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amountS };
  }

  if (action.type === "QUANTITY") {
    let TempoCart = state.cart
      .map((items) => {
        if (items.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...items, amount: items.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...items, amount: items.amount - 1 };
          }
        }
        return items;
      })
      .filter((items) => items.amount !== 0);

    return { ...state, cart: TempoCart };
  }

  return state;
};
