import React, { useEffect, useState } from "react";
import "./SearchList.css";
import Loader from "./Loader";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function SearchList() {
  const [{ basket, user, searchValue }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const [searchProducts, setSearchProducts] = useState([]);

  // let search = items.filter((product) => {
  //   if (searchValue.length === 0) {
  //     return "";
  //   } else {
  //     return product.title.toLowerCase().includes(searchValue?.toLowerCase());
  //   }
  // });

  let search;

  useEffect(() => {
    setLoader(true);
    setSearchProducts([]);
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product;
        });
        let search = newProductsState.filter((product) => {
          if (searchValue.length === 0) {
            return "";
          } else {
            return product.title
              .toLowerCase()
              .includes(searchValue?.toLowerCase());
          }
        });
        setSearchProducts(search);
        setLoader(false);
      });
  }, [searchValue]);

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products`)
  //     .then((res) => res.json())
  //     .then((productsArray) => {
  //       const newProductsState = productsArray.map((product) => {
  //         return product;
  //       });
  //       setItems(newProductsState);
  //       const search = items.filter((product) => {
  //         if (searchValue.length === 0) {
  //           return "";
  //         } else {
  //           return product.title
  //             .toLowerCase()
  //             .includes(searchValue?.toLowerCase());
  //         }
  //       });

  //       setTimeout(() => {
  //         setSearchProducts(search);
  //       }, 2000);
  //     });
  // }, [setItems]);

  console.log(items);

  // useEffect(() => {
  //   items.filter((product) => {
  //     if (searchValue.length === 0) {
  //       const search = "";
  //     } else {
  //       const search = product.title
  //         .toLowerCase()
  //         .includes(searchValue?.toLowerCase());
  //     }
  //     setSearchProducts(search);
  //     setLoader(false);
  //   });
  // }, [searchValue]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchProducts(search);
  //   }, 2000);
  // }, [search]);

  const hasProducts = searchProducts.length === 0;

  //   useEffect(() => {
  //     dispatch({
  //       type: "SET_SEARCH_VALUE",
  //       searchValue: "",
  //     });
  //   }, []);

  // <p>{`We didnt find any results for "${searchValue}"`}</p>

  console.log(searchProducts);
  console.log(searchValue);
  // console.log(search);

  return (
    <div className="searchList">
      <img
        className="searchList__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazon banner"
      />

      {loader && <Loader />}

      {hasProducts && !loader ? (
        <p>We didn't find any results for "{searchValue}"</p>
      ) : (
        searchProducts.map((product) => (
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
  );
}

export default SearchList;
