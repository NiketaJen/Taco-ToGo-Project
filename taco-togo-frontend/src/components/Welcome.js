import React from "react";
import "../css/Welcome.css";
import { useHistory } from "react-router";
import { Button } from "semantic-ui-react";

const Welcome = (props) => {
  let history = useHistory();
  return (
    <div className="Welcome" 
    style={{backgroundImage:"url('https://media0.giphy.com/media/l2JI1Yubq3MzRmLLy/giphy.gif?cid=ecf05e47by1xgt6woht000pgqww8hrnay362j6pdz31fnwtm&rid=giphy.gif')"}}>
    
    <div className="greeting" >
        <span className="greeting__LineOne">Welcome To</span>
        <span className="greeting__LineTwo">Taco ToGo!</span>
    </div>
    
      <div className="WelcomeButton">
      <Button.Group size='big'>
              <Button onClick={() => history.push("/login")}>Login</Button>
              <Button.Or />
              <Button onClick={() => history.push("/signupform")} positive>
                Sign Up
              </Button>
            </Button.Group>
      </div>
     
    </div>
  );
};

export default Welcome;
