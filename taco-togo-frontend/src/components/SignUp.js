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
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
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
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Button content="Sign up" icon="signup" size="big" onClick={""} />
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </div>
    </div>
  );
};

export default SignUp;
