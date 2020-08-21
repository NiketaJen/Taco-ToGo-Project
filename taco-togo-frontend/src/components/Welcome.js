import React from "react";
import { useHistory } from "react-router";
import { Button } from "semantic-ui-react";

const Welcome = (props) => {
  let history = useHistory();
  return (
    <div className="Login">
      <Button.Group>
        <Button onClick={() => history.push("/login")}>Login</Button>
        <Button.Or />
        <Button onClick={() => history.push("/signupform")} positive>
          Sign Up
        </Button>
      </Button.Group>
    </div>
  );
};

export default Welcome;
