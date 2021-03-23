import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Amazon banner"
        />

        <div className="home__row">
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
            id="3254354345"
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
        </div>
      </div>
    </div>
  );
}

export default Home;
