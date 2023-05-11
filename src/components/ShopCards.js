import React, { Component } from "react";
import ShopCard from "./ShopCard";

export class ShopCards extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <ShopCard key={el.id} item={el} />
        ))}
      </main>
    );
  }
}

export default ShopCards;
