import React from "react";
import * as BsIcon from "react-icons/bs";
import "./Components/components.css";
import { useGlobalContext } from "./Components/AppProvider";

export const Header = ()=>{
    const { amountS } = useGlobalContext();

    return (
      <header className="main-header">
        <div>
          <h3>Shoppy</h3>
          <div className="bag-icon-container">
            <p className="bag-icon-amount">{amountS}</p>
            <BsIcon.BsHandbagFill className="bag-icon" />
          </div>
        </div>
      </header>
    );
}