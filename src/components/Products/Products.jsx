import "./products.css";
import React, { useState, useEffect } from "react";
// import productsList from "../../assets/img/productsDB.js";
import ProductCard from "../Product/ProductCard";
import Pagination from "../Paginationa/Pagination";
import axios from "axios";

export default function Products() {
  const baseUrl = "https://606db7c4603ded001750472a.mockapi.io/Products";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // const [products] = useState(productsList);
  // const [filteredProducts] = useState(productsList);
  const [currentPage, setCurrentPage] = useState(1);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  // const [productsPerPage, setProductsPerPage] = useState(3);
  const [productsPerPage] = useState(3);
  //////////////////////////////////////////////////
  const handleError = (err) => {
    setError(err);
    // toggleLoadingState(false);
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log("Error", error.message);
    }
    console.log(error);
  };
  //////////////////////////////////////////////////
  useEffect(() => {
    try {
      axios.get(baseUrl).then((res) => {
        console.log(res.data);
        setProducts(res.data);
        // setList(res.data.hits);
        // toggleSearch(false);
        // toggleLoadingState(false);
      });
    } catch (err) {
      handleError(err);
    }
  }, []);
  /////////////////////////////

  /////////////////////////////
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
