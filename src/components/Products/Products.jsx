import "./products.css";
import React, { useState, useEffect } from "react";
import productsList from "../../assets/img/productsDB.js";
import Product from "../Product/Product";
import Pagination from "../Pagination";

export default function Products() {
  const [products] = useState(productsList);
  const [currentPage, setCurrentPage] = useState(1);
  // const [productsPerPage, setProductsPerPage] = useState(3);
  const [productsPerPage] = useState(3);

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

  // const onSetProductsPerPAge = (e) => {
  //   //TODO  implement
  //   setProductsPerPage(productsPerPage);
  // };

  const onChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="container products">
        {currentProducts.map((product) => {
          return <Product key={product.id} details={product} />;
        })}
      </div>
      <Pagination
        itemsPerPage={productsPerPage}
        totalItemsNumber={products.length}
        onChangePage={onChangePage}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    </>
  );
}
