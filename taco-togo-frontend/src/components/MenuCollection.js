import React from "react";
import MenuCard from "../components/MenuCard";
import { Grid, Image, Card } from "semantic-ui-react";

class MenuCollection extends React.Component {
  render() {
    return (
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
