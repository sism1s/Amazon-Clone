import React, { useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import "./Home.css";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ basket, category }, dispatch] = useStateValue();

  const setCategory = (event) => {
    dispatch({
      type: "SET_CATEGORY",
      item: event,
    });
  };

  console.log(category);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Amazon banner"
        />

        <div className="home__category">
          <Link
            to="/ProductList"
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
            to="/ProductList"
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
            to="/ProductList"
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
            to="/ProductList"
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

        {/* <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Statup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.99}
            rating={4}
            image="https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kmix%20products/KMX750_1colour/Kmix_allred_800x600.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="HUAWEI Watch GT 2 2019 Bluetooth SmartWatch, Longer Lasting 2 Weeks Battery Life, Waterproof, Compatible with iPhone and Android, 46mm (Matte Black)"
            price={134.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71NCQcllSyL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.screwfix.com/is/image//ae235?src=ae235/969GX_A1&$prodImageMedium$"
          />
          <Product
            id="32543543"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_GEO_GB_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553717178"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung  LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440 "
            price={1094.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._AC_SL1500_.jpg"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
