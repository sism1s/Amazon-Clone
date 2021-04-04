import React, { useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import "./Home.css";
import SearchList from "./SearchList";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ basket, category, searchValue }, dispatch] = useStateValue();

  const setCategory = (event) => {
    dispatch({
      type: "SET_CATEGORY",
      category: event,
    });
  };

  return (
    <div className="home">
      {searchValue.length === 0 ? (
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="Amazon banner"
          />

          <div className="home__category">
            <Link
              to="/productList"
              className={"home__category__link"}
              onClick={() => {
                setCategory("electronics");
              }}
            >
              <Category
                title="Electronics"
                image="https://canary.contestimg.wish.com/api/webimage/5d3be9d272c2ec7c278e2262-large.jpg?cache_buster=deef6c56979a6497a219e3ad513d4fd2"
              />
            </Link>
            <Link
              to="/productList"
              className={"home__category__link"}
              onClick={() => {
                setCategory("jewelery");
              }}
            >
              <Category
                title="Jewelery"
                image="https://cdn.pixabay.com/photo/2017/11/05/14/19/gold-jewelry-2920596_960_720.jpg"
              />
            </Link>
          </div>

          <div className="home__category">
            <Link
              to="/productList"
              className={"home__category__link"}
              onClick={() => {
                setCategory("men clothing");
              }}
            >
              <Category
                title="Men Clothing"
                image="https://ae01.alicdn.com/kf/UTB8snakDtoSdeJk43Owq6ya4XXa4/2018-New-Brand-Male-Long-Sleeve-Shirt-Autumn-Winter-New-Men-Fashion-Casual-Two-Colors-Long.jpg_640x640.jpg"
              />
            </Link>
            <Link
              to="/productList"
              className={"home__category__link"}
              onClick={() => {
                setCategory("women clothing");
              }}
            >
              <Category
                title="Women Clothing"
                image="https://www.dhresource.com/600x600/f2/albu/g9/M00/F4/CD/rBVaVVxuzgqADFRwAAIr2kjn96U205.jpg"
              />
            </Link>
          </div>
        </div>
      ) : (
        <SearchList />
      )}
    </div>
  );
}

export default Home;
