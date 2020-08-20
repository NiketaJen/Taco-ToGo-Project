import React from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import { useHistory } from "react-router";

const SignUp = (props) => {
  let history = useHistory();

  const loggedIn = () => {
    localStorage.setItem("loggedIn", true);
    history.push("/");
  };

  return (
    <div className="SignUpPageContainer">
      <div className="SignUpPage">
        <Segment placeholder>
          <Form>
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Username"
              placeholder="Username"
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              label="Password"
              type="password"
            />

            <Button onClick={() => loggedIn()} content="Login" primary />
          </Form>
        </Segment>
      </div>
    </div>
  );
};

export default SignUp;
