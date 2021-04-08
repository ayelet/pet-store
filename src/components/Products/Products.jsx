import "./products.css";
import React, { useState, useEffect } from "react";
// import { useContext } from "react";
// import productsList from "../../assets/img/productsDB.js";
import ProductCard from "../Product/ProductCard";
// import Pagination from "../Paginationa/Pagination";
import axios from "axios";
// import Cart from "../Cart/CartDB";
// import CartContext from "../CartContext/CartContext";

export default function Products() {
  const baseUrl = "https://606db7c4603ded001750472a.mockapi.io/Products";

  // const [products, setProducts] = useState(
  //   localStorage.getItem("products") || []
  // );
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // const [filteredProducts] = useState(productsList);
  const [currentPage, setCurrentPage] = useState(1);
  // const [disablePrev, setDisablePrev] = useState(true);
  // const [disableNext, setDisableNext] = useState(false);
  const [productsPerPage] = useState(3);
  const [currentProducts, setCurrentProducts] = useState([]);

  // const [indexOfLastProd] = useState(currentPage * productsPerPage);

  useEffect(() => {
    try {
      // if (
      //   !localStorage.getItem("products") ||
      //   localStorage.getItem("prodcuts") === "[]"
      // ) {
      console.log("fetching from remote server");
      axios.get(baseUrl).then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setCurrentProducts(products.slice(0, productsPerPage));
        console.log("JSON", JSON.stringify(products));
        localStorage.setItem("products", JSON.stringify(products));
      });
      // } else {
      //   console.log("fetching from local storage");
      //   let storedProducts = localStorage.getItem("products");
      //   setProducts(JSON.parse(storedProducts));
      // }
    } catch (err) {
      setError(err);
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /////////////////////////////

  /////////////////////////////
  // calc the products to show
  const calcPages = () => {
    const indexOfLastProd = currentPage * productsPerPage;
    const indexOfFirstProd = indexOfLastProd - productsPerPage;
    setCurrentProducts(products.slice(indexOfFirstProd, indexOfLastProd));
    console.log("calculating pages", currentProducts);
  };

  const onNextPage = (e) => {
    // dont forget to check limits first
    setCurrentPage(currentPage + 1);
    calcPages();
  };
  const onPrevPage = (e) => {
    // dont forget to check limits first
    setCurrentPage(currentPage - 1);
    calcPages();
  };

  const onAddProduct = (id) => {
    console.log("adding to cart", id);
  };

  const onRemoveProduct = (id) => {
    console.log("removing from cart");
  };

  // const onChangePage = (pageNumber, minPgNum, maxPgNum) => {
  //   console.log("onChangePage", pageNumber);
  //   setCurrentPage(pageNumber);
  //   setDisablePrev(pageNumber <= minPgNum);
  //   setDisableNext(pageNumber >= maxPgNum);
  //   console.log(pageNumber, disablePrev, disableNext, minPgNum, maxPgNum);
  // };
  return (
    <div className="d-flex flex-row">
      <input
        className="order-1 btn-info prev-page"
        type="button"
        onClick={onPrevPage}
        value="<"
      ></input>
      <div className="content">
        <div className="container text-center products">
          {currentProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                details={product}
                onAdd={onAddProduct}
                onRemove={onRemoveProduct}
              />
            );
          })}
        </div>
      </div>
      <input
        className="order-3 btn-info next-page"
        type="button"
        onClick={onNextPage}
        value=">"
      ></input>
      {/* <Pagination
        itemsPerPage={productsPerPage}
        totalItemsNumber={products.length}
        // currentPage={currentPage}
        onChangePage={onChangePage}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        disabledPrev={disablePrev}
        disabledNext={disableNext}
      /> */}
    </div>
  );
}
