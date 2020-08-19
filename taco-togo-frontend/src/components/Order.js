import React from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { Card, Button } from "semantic-ui-react";

import OrderMenuCard from "../components/OrderMenuCard";

class Order extends React.Component {
  render() {
    return (
      <div className="Order">
        <Card>
          <Card.Content>
            <Card.Header>Your Order</Card.Header>
          </Card.Content>
          <Card.Content>
            {this.props.orderItems.map((item) => (
              <OrderMenuCard item={item} key={item.id} />
            ))}
          </Card.Content>
          <Card.Content>
            Total: ${this.props.orderItems.reduce((a, b) => a + b.price, 0)}
            <Button positive onClick={() => this.props.checkOut}>
              Checkout{" "}
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Order;
