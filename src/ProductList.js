import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Product from "./Product";
import "./ProductList.css";
import SearchList from "./SearchList";
import { useStateValue } from "./StateProvider";

function ProductList() {
  const [{ basket, category, searchValue }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product;
        });
        setItems(newProductsState);
        setLoader(false);
      });
  }, [category]);

  return (
    <>
      {searchValue.length === 0 ? (
        <div className="productList">
          <img
            className="productList__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="Amazon banner"
          />

          {loader ? (
            <Loader />
          ) : (
            items.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            ))
          )}
        </div>
      ) : (
        <SearchList />
      )}
    </>
  );
}

export default ProductList;
