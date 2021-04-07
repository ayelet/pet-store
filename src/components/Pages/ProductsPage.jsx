import React from "react";
// import Layout from "../Layout/Layout";
import { Container } from "react-bootstrap";
import CartProvider from "../CartContext/CartContext";
import Products from "../Products/Products";

export default function ProductsPage() {
  return (
    <>
      <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <CartProvider>
          <Products />
        </CartProvider>
      </Container>
    </>
  );
}