import "./products.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import productsList from "../../assets/img/productsDB.js";
import Product from "../Product/Product";

export default function Products() {
  const [products] = useState(productsList);

  useEffect(() => {}, [products]);

  return (
    <div className="container products">
    
        {products.map((product) => {
          return (
            
              <Product key={product.id} details={product} />
        
          );
        })}

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
