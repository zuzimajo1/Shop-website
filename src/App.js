import React from "react";
import { Header } from "./Header";
import { Cart } from "./Cart";
import { useGlobalContext } from "./Components/AppProvider";


function App() {

  const {loading} = useGlobalContext();
  if(loading){
    return(
      <p>Loading</p>
    )   
  }
  return (
    <main className="app">
      <Header />
      <Cart />
    </main>
  );
}

export default App;
