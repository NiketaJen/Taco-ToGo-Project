import React from "react";
import Footer from "./components/Footer";
import HeaderContent from "./components/HeaderContent";
import OrderMenuCard from "./components/OrderMenuCard";
import MenuCollection from "./components/MenuCollection";
import "./App.css";
import Order from "./components/Order";
import Login from "./components/Login";

class App extends React.Component {
  state = {
    menuItems: [],
    orderItems: [],
    display: false,
    paymentSuccess: false,
  };

  componentDidMount() {
    fetch("http://localhost:3000/menu_items")
      .then((res) => res.json())
      .then((menuItems) => this.setState({ menuItems }));
  }

  addToOrder = (e, item) => {
    item.added = true;
    item.qty = 1;
    const orderItems = [...this.state.orderItems, item];
    this.setState({ orderItems });
  };

  checkOut = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  // loggedIn = () => {
  //   let newBoolean = !this.state.displayLogin;
  //   this.setState({
  //     displayLogin: newBoolean,
  //   });
  // };

  isLoggedIn = () => {
    console.log("did i get here");
    let loggedIn = localStorage.getItem("loggedIn");
    return loggedIn;
  };

  removeItem = (item) => {
    item.added = !item.added;
    const orderItemsCopy = [...this.state.orderItems];
    const orderItems = orderItemsCopy.filter((i) => i.id !== item.id);
    this.setState({ orderItems });
  };

  submitPayment = () => {
    this.setState({ paymentSuccess: true });
  };

  addOne = (item) => {
    const orderItems = [
      ...this.state.orderItems.map((taco) => {
        const copyTaco = { ...taco };
        if (taco.id === item.id) {
          copyTaco.qty += 1;
        }
        return copyTaco;
      }),
    ];

    this.setState({ orderItems });
  };

  render() {
    return !this.isLoggedIn() ? (
      <Login />
    ) : (
      <div className="App">
        <HeaderContent isLoggedIn={this.isLoggedIn} />

        <div className="MainPage">
          <MenuCollection
            menuItems={this.state.menuItems}
            addToOrder={this.addToOrder}
            display={this.state.display}
            submitPayment={this.submitPayment}
            paymentSuccess={this.state.paymentSuccess}
          />
          <Order
            orderItems={this.state.orderItems}
            checkOut={this.checkOut}
            removeItem={this.removeItem}
            addOne={this.addOne}
          />
        </div>
      </div>
    );
  }
}

export default App;
