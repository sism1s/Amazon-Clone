import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SearchList from "./SearchList";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user, searchValue }, dispatch] = useStateValue();

  return (
    <>
      {searchValue.length === 0 ? (
        <div className="checkout">
          <div className="checkout__left">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
              alt=""
              className="checkout__ad"
            />

            <div>
              <h3>Hello, {user ? user.email : "Guest"}</h3>
              <h2 className="checkout__title">Your shopping Basket</h2>

              {basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          <div className="checkout__right">
            <Subtotal />
          </div>
        </div>
      ) : (
        <SearchList />
      )}
    </>
  );
}

export default Checkout;
