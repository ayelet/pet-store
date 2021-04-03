import "./products.css";
import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import productsList from "../../assets/img/productsDB.js";
import Product from "../Product/Product";
import { Button } from "react-bootstrap";

export default function Products() {
  const [products] = useState(productsList);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(3);

  useEffect(() => {}, [products]);

  // calc the products to show
  const indexOfLastProd = currentPage * productsPerPage;
  const indexOfFirstProd = indexOfLastProd - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProd, indexOfLastProd);

  const onNextPage = (e) => {
    // dont forget to check limits first
    setCurrentPage(currentPage + 1);
  };
  const onPrevPage = (e) => {
    // dont forget to check limits first
    setCurrentPage(currentPage - 1);
  };

  const onSetProductsPerPAge = (e) => {
    //TODO  implement
    setProductsPerPage(productsPerPage);
  };

  return (
    <div className="container products">
      {currentProducts.map((product) => {
        return <Product key={product.id} details={product} />;
      })}
      <Button onClick={onPrevPage}>Prev</Button>
      <Button onClick={onNextPage}>Next</Button>
      <Button onClick={onSetProductsPerPAge}>P</Button>
    </div>
  );
}

// <div className="container">
//   <div className="row">
//     {this.state.films.map((film) => (
//       <div key={film.id} id="cardItem" className="col-xs-1">
//         <MovieCard film={film} />
//       </div>
//     ))}
//   </div>
// </div>;
