import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from "./Component/MenuBar";
import Product from "./Component/Products";
import card from "./Component/card";
import Cards from "./Component/card";
import "./App.css";

function App() {
  return (
    <section>
      <MenuBar/>
      <div className="mybody">
      <Product/>
      <Cards/>
      </div>
    </section>
  );
}

export default App;