import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ProductDetail = (props) => {
  const [id] = useState(props.match.params.id);
  const baseUrl = `https://606db7c4603ded001750472a.mockapi.io/Products/${id}`;
  const [product, setProduct] = useState();

  useEffect(() => {
    try {
      console.log("fetching pne product from remote server");
      axios.get(baseUrl).then((res) => {
        console.log(res.data);
        setProduct(res.data);
      });
      //   localStorage.setItem("products", JSON.stringify(products));
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>This is a product: {product.name}</div>;
};

export default ProductDetail;
