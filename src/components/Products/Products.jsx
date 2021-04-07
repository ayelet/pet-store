import "./products.css";
import React, { useState, useEffect } from "react";
import productsList from "../../assets/img/productsDB.js";
import ProductCard from "../Product/ProductCard";
import Pagination from "../Paginationa/Pagination";

export default function Products() {
  const [products] = useState(productsList);
  const [currentPage, setCurrentPage] = useState(1);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  // const [productsPerPage, setProductsPerPage] = useState(3);
  const [productsPerPage] = useState(3);

  useEffect(() => {}, [products]);
  // useEffect(() => {}, [currentPage]);

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

  const onChangePage = (pageNumber, minPgNum, maxPgNum) => {
    console.log("onChagenPage", pageNumber);
    setCurrentPage(pageNumber);
    setDisablePrev(pageNumber <= minPgNum);
    setDisableNext(pageNumber >= maxPgNum);
    console.log(pageNumber, disablePrev, disableNext, minPgNum, maxPgNum);
  };
  return (
    <>
      <div className="container text-center products">
        {currentProducts.map((product) => {
          return <ProductCard key={product.id} details={product} />;
        })}
      </div>
      <Pagination
        itemsPerPage={productsPerPage}
        totalItemsNumber={products.length}
        // currentPage={currentPage}
        onChangePage={onChangePage}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        disabledPrev={disablePrev}
        disabledNext={disableNext}
      />
    </>
  );
}
