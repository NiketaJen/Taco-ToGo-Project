import React from "react";
import { useHistory } from "react-router";
import { Button } from "semantic-ui-react";

const Login = (props) => {
  let history = useHistory();
  return (
    <div className="Login">
      <Button.Group>
        <Button onClick={() => history.push("/signup")}>Login</Button>
        <Button.Or />
        <Button onClick={() => history.push("/signupform")} positive>
          Sign Up
        </Button>
      </Button.Group>
    </div>
  );
};

export default Login;
