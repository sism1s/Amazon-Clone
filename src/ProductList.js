import React, { useEffect } from "react";
import "./ProductList.css";
import { useStateValue } from "./StateProvider";

function ProductList() {
  const [{ basket, category }, dispatch] = useStateValue();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return <div className="productList">Hello</div>;
}

export default ProductList;
