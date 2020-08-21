import React from "react";
import MenuCard from "../components/MenuCard";
import Payment from "../components/Payment";
import { Message, Button } from "semantic-ui-react";

class MenuCollection extends React.Component {
  render() {
    return this.props.confirmationDisplay ? (
      <Message info>
        <Message.Header>
          Confirm your Order and Checkout or Go Back
        </Message.Header>
        <Button.Group>
          <Button positive onClick={() => this.props.checkOut()}>
            Checkout
          </Button>
          <Button.Or />
          <Button onClick={() => this.props.goBack()}>Go Back</Button>
        </Button.Group>
      </Message>
    ) : this.props.display ? (
      <Payment
        submitPayment={this.props.submitPayment}
        paymentSuccess={this.props.paymentSuccess}
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
