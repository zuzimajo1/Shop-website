import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";

import { List } from "./List";
import { Reducer } from "./Reducer";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: List,
  total: 0,
  amountS: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const ClearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const RemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_INFO" });
  }, [state.cart]);

  const AmountQuantityItem = (id, type) => {
    dispatch({ type: "QUANTITY", payload: { id, type } });
  };


  return (
    <AppContext.Provider
      value={{
        ...state,
        ClearAll,
        RemoveItem,
        AmountQuantityItem,
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
