import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Your cart is empty</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">Furnish Me</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contancs</li>
          <li>Personal cabinet</li>
        </ul>
        <FiShoppingCart
          className={`cart-icon-button ${cartOpen && "active"}`}
          onClick={() => {
            setCartOpen((cartOpen = !cartOpen));
          }}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}