import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import ShopCards from "./components/ShopCards";
import { Categories } from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Little Petra VB1 Lounge Chair",
          img: "Little Petra VB1 Lounge Chair.jpg",
          description:
            "Low, enfolding, and soft, Little Petra VB1 expresses the warm essence of a lounge chair, ensuring a unique comfort experience",
          category: "armchair",
          price: 3124,
        },
        {
          id: 2,
          title: "Jeanneret 053 Capitol Complex Armchair",
          img: "Jeanneret 053 Capitol Complex Armchair.jpg",
          description:
            "Majestic, imposing and refined, this armchair recalls an immediate idea of comfort, elegance and simplicity",
          category: "armchair",
          price: 2100,
        },
        {
          id: 3,
          title: "Wulff ATD2 Lounge Chair",
          img: "Wulff ATD2 Lounge Chair.jpg",
          description:
            "Lounge chair whose upholstered form pays tribute to the hand-crafted designs of the 1930's",
          category: "armchair",
          price: 3251,
        },
        {
          id: 4,
          title: "Pacha Lounge Chair",
          img: "Pacha Lounge Chair.jpg",
          description:
            "Pacha Lounge Chair is an ergonomic and comfortable seat created in 1975 by designer Pierre Paulin",
          category: "armchair",
          price: 2707,
        },
        {
          id: 5,
          title: "527 Mexique Table",
          img: "527 Mexique Table.jpg",
          description:
            "Mexique is a high and dining table designed by Charlotte Perriand in 1952 for Cassina",
          category: "table",
          price: 750,
        },
        {
          id: 6,
          title: "Copenhague Deux CPH220",
          img: "Copenhague Deux CPH220.jpg",
          description:
            "Copenhague Deux is a Collection of Tables for compact spaces, designed by Ronan & Erwan Bouroullec for Hay",
          category: "table",
          price: 1100,
        },
        {
          id: 7,
          title: "Simpòdio Table 260x120",
          img: "Simpòdio Table 260x120.jpg",
          description:
            "Simpòdio is a crystal table created by the designer Pinuccio Borgonovo",
          category: "table",
          price: 650,
        },
        {
          id: 8,
          title: "Shiro Oval Table",
          img: "Shiro Oval Table.jpg",
          description:
            "A natural elegance, characterized by the warmth of wood and the softness of its curves",
          category: "table",
          price: 940,
        },
        {
          id: 9,
          title: "Rico 3 Seaters Sofa",
          img: "Rico 3 Seaters Sofa.jpg",
          description:
            "Rico Bouclé is a comfortable sofa designed and created by the Ferm Living brand",
          category: "sofa",
          price: 3200,
        },
        {
          id: 10,
          title: "Chester Moon Three Seater Sofa",
          img: "Chester Moon Three Seater Sofa.jpg",
          description:
            "Chester Moon is an elegant and refined Sofa Collection designed by Paola Navona for Baxter",
          category: "sofa",
          price: 2900,
        },
        {
          id: 11,
          title: "Chester One 4 Seater Sofa",
          img: "Chester One 4 Seater Sofa.jpg",
          description:
            "Chester One is an elegant collection of sofas designed by Renzo Frau for Poltrona Frau",
          category: "sofa",
          price: 2800,
        },
        {
          id: 12,
          title: "Le Bambole - Granbambola Sofa",
          img: "Le Bambole - Granbambola Sofa.jpg",
          description:
            "The cover of Le Bambole is made of 100% biodegradable polyester, free of toxins, that does not release microplastic particles into the environment",
          category: "sofa",
          price: 2200,
        },
        {
          id: 13,
          title: "Coffee Table - Isamu Noguchi",
          img: "Coffee Table - Isamu Noguchi.jpg",
          description:
            "Coffee Table designed by the Japanese sculptor Isamu Noguchi for Vitra",
          category: "coffee table",
          price: 740,
        },
        {
          id: 14,
          title: "Lato Coffee Table",
          img: "Lato Coffee Table.jpg",
          description:
            "Lato is a coffee table designed by Luca Nichetto for & Tradition",
          category: "coffee table",
          price: 625,
        },
        {
          id: 15,
          title: "Palissade Cone Table",
          img: "Palissade Cone Table.jpg",
          description:
            "Palissade cone table is a coffee table for outdoor signed by Ronan and Erwan Bouroullec",
          category: "coffee table",
          price: 580,
        },
        {
          id: 16,
          title: "Epic Table",
          img: "Epic Table.jpg",
          description:
            "Epic is a collection of tables signed by the GamFratesi designers team for the Gubi brand",
          category: "coffee table",
          price: 930,
        },
        {
          id: 17,
          title: "Aurora Tre Bed",
          img: "Aurora Tre Bed.jpg",
          description:
            "Aurora Tre is a refined bed designed by Tito Agnoli for Poltrona Frau",
          category: "bed",
          price: 1400,
        },
        {
          id: 18,
          title: "Kelly Bed",
          img: "Kelly Bed.jpg",
          description:
            "Kelly is a bed designed by Emmanuel Gallina for the Poliform brand",
          category: "bed",
          price: 1470,
        },
        {
          id: 19,
          title: "Bamboletto Bed",
          img: "Bamboletto Bed.jpg",
          description:
            "The Bamboletto bed is part of the Le Bambole collection",
          category: "bed",
          price: 2500,
        },
        {
          id: 20,
          title: "Gentleman Bed",
          img: "Gentleman Bed.jpg",
          description:
            "Gentleman is a night collection designed by Marcel Wanders for Poliform",
          category: "bed",
          price: 1900,
        },
        {
          id: 21,
          title: "Max Beam Coffee Table Bed",
          img: "Max Beam Coffee Table.jpg",
          description:
            "Max Beam is a  table monolith in a transparent plastic material from the reduced dimensions",
          category: "cofeee table",
          price: 768,
        },
      ],
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <ShopCards items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
}

export default App;
