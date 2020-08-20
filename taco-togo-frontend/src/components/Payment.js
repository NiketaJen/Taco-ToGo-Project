import React from "react";
import { Button, Form, Icon, Message, Label } from "semantic-ui-react";

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
      </div>
    ) : (
      <div className="Payment">
        <div>
          <Label color="blue" size="massive">
            Pay via Credit Card
          </Label>
        </div>
        <Form className="attached fluid segment">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
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
          <Form.Checkbox
            inline
            label="I agree to allowing you to charge my card for $100,000,000.00"
          />
          <Button color="blue" onClick={() => this.props.submitPayment()}>
            Process Payment
          </Button>
        </Form>
      </div>
    );
  }
}

export default Payment;
