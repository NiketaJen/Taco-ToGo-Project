import React from "react";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import OrderMenuCard from "./components/OrderMenuCard";
import MenuCollection from "./components/MenuCollection";
import "./App.css";
import { Header, Image, Segment } from "semantic-ui-react";
import { Icon, Label } from "semantic-ui-react";
import Logo from "./Logo.png";
import Order from "./components/Order";

class App extends React.Component {
  state = {
    menuItems: [],
    orderItems: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/menu_items")
      .then((res) => res.json())
      .then((menuItems) => this.setState({ menuItems }));
  }

  addToOrder = (e, item) => {
    item.added = true;
    const orderItems = [...this.state.orderItems, item];
    this.setState({ orderItems });
  };

  checkOut = () => {};

  render() {
    return (
      <div className="App">
        <Header as="h2" attached="top">
          <div className="HeaderImage">
            <Image src="https://pbs.twimg.com/media/DQtcoZvUQAAWqMy?format=jpg&name=medium" />
          </div>
        </Header>
        <Segment attached>
          <div className="Logo">
            <img src={"https://i.imgur.com/Xh1dQoG.png"} alt="Logo" />
          </div>
          <div className="LoginIcon" onClick={this.handleClick}>
            <Label as="login">
              <Icon name="user outline" />
              Log in
            </Label>
          </div>
        </Segment>
        <div className="MainPage">
          <MenuCollection
            menuItems={this.state.menuItems}
            addToOrder={this.addToOrder}
          />
          <Order orderItems={this.state.orderItems} checkOut={this.checkOut} />
        </div>
      </div>
    );
  }
}

export default App;
