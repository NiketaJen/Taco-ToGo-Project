import React from "react";
import "../css/OrderMenuCard.css";
import { Card, Feed, Button, Popup, Header } from "semantic-ui-react";

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
                <Popup
                  trigger={<Button positive>Edit</Button>}
                  content={
                    <Button.Group>
                      <Button
                        circular
                        color="red"
                        icon="minus"
                        onClick={() => this.props.removeOne(item)}
                      />
                      <Button
                        circular
                        color="green"
                        icon="plus"
                        onClick={() => this.props.addOne(item)}
                      />
                    </Button.Group>
                  }
                  on="click"
                />

                <Button.Or />
                <Button onClick={() => this.props.removeItem(item)}>
                  Remove
                </Button>
              </Button.Group>
            </Feed.Content>
            {/* 
            <Popup
        trigger={<Button icon='add' content='Add a friend' />}
        content='Sends an email invite to a friend.'
        on='hover'
      /> */}

            <div>
              <b>
                <i>
                  <Card.Content extra>qty. {item.qty}</Card.Content>
                </i>
              </b>
            </div>
            <div>|</div>
            <div>
              <Card.Content extra>${item.price * item.qty}</Card.Content>
            </div>
          </Feed.Event>
        </Feed>
      </div>
    );
  }
}

export default OrderMenuCard;
