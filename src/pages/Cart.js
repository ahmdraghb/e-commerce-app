import React from "react";
import Product from "../components/ProductItem.js";
const cart = ({ products, Increment, decremnt, del, reset }) => {
  return (
    <>
      {products.length === 0 && <h1>Cart is Empty</h1>}
      {products.map((x) => (
        <Product
          key={x.name}
          product={x}
          increment={Increment}
          decremnt={decremnt}
          del={del}
        />
      ))}
      {products.length !== 0 && (
        <button className="reset" onClick={reset}>
          reset
        </button>
      )}
    </>
  );
};

export default cart;
