import React from "react";
import "../css/MenuCard.css";
import { Card, Icon, Image, Button, Popup } from "semantic-ui-react";

class MenuCard extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div className="MenuCard">
        <Card>
          <div className="MenuImage">
            <Image src={item.image} wrapped ui={false} />
          </div>

          <Card.Content>
            <Card.Header>{item.name}</Card.Header>

            <Card.Description>{item.description}</Card.Description>
          </Card.Content>
          <Card.Content>
            <div className="Price">${item.price}</div>
            <div align="right">
              <Popup
                content="Add to your order"
                trigger={
                  <Button
                    icon="add"
                    color="green"
                    onClick={
                      !item.added ? (e) => this.props.addToOrder(e, item) : null
                    }
                  />
                }
              />
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default MenuCard;
