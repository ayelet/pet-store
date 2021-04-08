import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const tempProd = {
  id: "3",
  name:
    "Blue Buffalo Life Protection Formula Natural Adult Small Breed Dry Dog Food",
  imgUrl:
    "https://images-na.ssl-images-amazon.com/images/I/817Hq08ZiKL._AC_SL1500_.jpg",
  description:
    "This dry food recipe helps maintain a healthy lifestyle with antioxidants, vitamins, and minerals, in the delicious, meaty steak flavor dogs love",
  Weight: 16,
  Form: "dry",
  Age: "Age 3",
  Price: "25.00",
  ProductCategory: "food",
  Pet: "cat",
  Brand: "Blue Buffalo",
  Flavor: ["chicken", "brown rice"],
  Health: "Adult",
};

const ProductDetail = (props) => {
  const [id] = useState(props.match.params.id);
  const baseUrl = `https://606db7c4603ded001750472a.mockapi.io/Products/${id}`;
  console.log(baseUrl);
  const [product, setProduct] = useState(tempProd);

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

  return (
    <div className="container product-detail">
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <img
          src={product.imgUrl}
          style={{ height: "300px" }}
          alt={product.name}
        />
        <span>Weight: {product.weight}</span>
        <span>Specialized for: {product.name}</span>
        <span>Category: {product.name}</span>
        <span>Category: {product.name}</span>
      </div>
    </div>
  );
};

export default ProductDetail;
