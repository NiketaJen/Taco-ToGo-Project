import React from "react";
import MenuCard from "../components/MenuCard";
import Payment from "../components/Payment";

class MenuCollection extends React.Component {
  render() {
    return this.props.display ? (
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
