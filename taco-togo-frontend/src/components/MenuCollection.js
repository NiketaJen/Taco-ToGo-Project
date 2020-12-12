import React from "react";
import "../css/MenuCollection.css";
import MenuCard from "../components/MenuCard";
import Payment from "../components/Payment";
import { Message, Button } from "semantic-ui-react";

class MenuCollection extends React.Component {
  render() {
    return this.props.confirmationDisplay ? (
      <Message
        style={{
          opacity: 0.8,
          backgroundImage: "url('https://i.imgur.com/bHHntQm.jpg')",
        }}
      >
        <Message.Header
          className="MessageHeader"
          style={{ fontSize: "30px", margin: "30px" }}
        >
          Confirm your Order and Checkout or Cancel
        </Message.Header>
        <br></br>
        <br></br>
        <br></br>
        <div className="CheckOrBack">
          <Button.Group size="massive">
            <Button positive onClick={() => this.props.checkOut()}>
              Checkout
            </Button>
            <Button.Or />
            <Button negative onClick={() => this.props.cancelOrder()}>
              Cancel Order
            </Button>
          </Button.Group>
        </div>
      </Message>
    ) : this.props.display ? (
      <Payment
        submitPayment={this.props.submitPayment}
        paymentSuccess={this.props.paymentSuccess}
        restart={this.props.restart}
      />
    ) : (
      <div className="MenuCollection">
        {this.props.menuItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            addToOrder={this.props.addToOrder}
          />
        ))}
      </div>
    );
  }
}

export default MenuCollection;
