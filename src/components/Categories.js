import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "armchair",
          name: "Armchairs",
        },
        {
          key: "table",
          name: "Tables",
        },
        {
          key: "sofa",
          name: "Sofas",
        },
        {
          key: "coffee table",
          name: "Coffee tables",
        },
        {
          key: "bed",
          name: "Beds",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
