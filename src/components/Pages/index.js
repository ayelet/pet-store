import React from "react";

import { Route } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import CartPage from "../Cart/CartPage";
import AboutPage from "../About/AboutPage";
import ContactPage from "../Contact/Contact";
// import CartProvider from "../CartContext/CartContext";
import HomePage from "./HomePage";
import ProductDetail from "../Product/ProductDetail";
import NutritionCalculaotr from "./NutritionCalculator/NutritionCalculaotr";

export default function IndexPage() {
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/Contact" exact component={ContactPage} />
      <Route path="/About" exact component={AboutPage} />
      <Route path="/Products/" component={ProductsPage} />
      <Route path="/Products/id=:id" component={ProductDetail} />
      <Route path="/Cart" component={CartPage} />
      <Route path="/Calculator" component={NutritionCalculaotr} />
    </div>
  );
}
