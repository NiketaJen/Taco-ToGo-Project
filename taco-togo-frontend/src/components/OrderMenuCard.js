import React from "react";
import Order from "../components/Order";
import { Card, Feed, Button } from "semantic-ui-react";

class OrderMenuCard extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div className="OrderMenuCard">
        <Feed>
          <Feed.Event>
            <Feed.Label image={item.image} />
            <Feed.Content>
              <Feed.Summary>{item.name}</Feed.Summary>
              <i>
                <Feed.Content>was added to your order</Feed.Content>
              </i>
              <Button.Group size="mini">
                <Button positive>Edit</Button>
                <Button.Or />
                <Button onClick={() => this.props.removeItem(item)}>
                  Remove
                </Button>
              </Button.Group>
            </Feed.Content>
            <div>
              <Card.Content extra>${item.price}</Card.Content>
            </div>
          </Feed.Event>
        </Feed>
      </div>
    );
  }
}

export default OrderMenuCard;
