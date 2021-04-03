import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductList.css";
import { useStateValue } from "./StateProvider";

function ProductList() {
  const [{ basket, category }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product;
        });
        setItems(newProductsState);
      });
  }, [category]);

  console.log(...items);

  return (
    <div className="productList">
      <img
        className="productList__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazon banner"
      />
      {items.map((product) => (
        <Product
          id={product.id}
          title={product.title}
          price={product.price.toFixed(2)}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
