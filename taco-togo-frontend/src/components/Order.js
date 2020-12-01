import React from "react";
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
              <OrderMenuCard
                orderItems={this.props.orderItems}
                item={item}
                key={item.id}
                removeItem={this.props.removeItem}
                addOne={this.props.addOne}
                removeOne={this.props.removeOne}
              />
            ))}
          </Card.Content>

          <Card.Content>
            Total: $
            {this.props.orderItems.reduce((a, c) => a + c.price * c.qty, 0)}
            <div className="SomeButtons">
              <Button
                positive
                align="right"
                onClick={() => this.props.showConfirmation()}
              >
                Checkout{" "}
              </Button>
              <Button
                negative
                align="left"
                onClick={() => this.props.deleteOrder()}
              >
                Cancel{" "}
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Order;
