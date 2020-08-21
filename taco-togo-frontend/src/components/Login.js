import React from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import { useHistory } from "react-router";

const Login = (props) => {
  let history = useHistory();

  const loggedIn = () => {
    localStorage.setItem("loggedIn", true);
    history.push("/");
  };

  return (
    <div className="LoginPageContainer">
      <div className="LoginPage">
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

                <Button className="LoginButton" onClick={() => loggedIn()} content="Login" primary />
              </Form>
          
    
        </Segment>
      </div>
    </div>
  );
};

export default Login;
