import React, { Component } from "react";

export class ShopCard extends Component {
  render() {
    return (
      <div className="shop-card">
        <img
          src={"./img/" + this.props.item.img}
          alt="error"
          onClick={() => this.props.onShowItem(this.props.item)}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
        <b>{this.props.item.price} $</b>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          Buy
        </div>
      </div>
    );
  }
}

export default ShopCard;
