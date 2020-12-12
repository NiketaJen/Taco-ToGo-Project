import React from "react";
import "../css/Payment.css";
import {
  Button,
  Form,
  Menu,
  Dropdown,
  Message,
  Label,
} from "semantic-ui-react";

class Payment extends React.Component {
  render() {
    return this.props.paymentSuccess ? (
      <div>
        <Message positive>
          <Message.Header>Thank you for your order!</Message.Header>
          <p>
            Your order will be ready for pickup in <b>15 minutes</b>.
          </p>
        </Message>
        <Button color="gray" onClick={() => this.props.restart()}>
          Go Back
        </Button>
      </div>
    ) : (
      <div className="Payment">
        <div>
          <Label color="blue" size="massive">
            Pay via Credit Card
          </Label>
        </div>
        <Form className="attached fluid segment">
          <Form.Input
            fluid
            label="Name for Order"
            placeholder="Tesla"
            type="text"
          />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name on Card"
              placeholder="Antonio Reid"
              type="text"
            />
            <Form.Input
              fluid
              label="Credit Card Number"
              placeholder="2222 2222 2222 2222"
              type="text"
            />
          </Form.Group>
          <Form.Input label="Expiration Date" placeholder="12/23" type="text" />
          <Form.Input label="CVC" placeholder="222" type="text" />
          <Form.Checkbox inline label="I accept the Terms and Conditions." />
          <Button color="blue" onClick={() => this.props.submitPayment()}>
            Process Payment
          </Button>
        </Form>
      </div>
    );
  }
}

export default Payment;
