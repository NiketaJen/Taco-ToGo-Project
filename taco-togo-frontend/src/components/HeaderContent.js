import React from "react";
import { Header, Image, Segment, Icon, Button } from "semantic-ui-react";

import { useHistory } from "react-router";

const HeaderContent = (props) => {
  let history = useHistory();

  const loggedOut = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <div className="Header">
      <Header as="h2" attached="top">
        <div className="HeaderImage">
          <Image src="https://pbs.twimg.com/media/DQtcoZvUQAAWqMy?format=jpg&name=medium" />
        </div>
      </Header>
      <Segment attached>
        <div className="Subheader">
          <div className="Logo">
            <img src={"https://i.imgur.com/Xh1dQoG.png"} alt="Logo" />
          </div>
          <div className="LogoutIcon">
            <Button onClick={() => loggedOut()} as="logout">
              <Icon name="user outline" />
              Log out
            </Button>
          </div>
        </div>
      </Segment>
    </div>
  );
};

export default HeaderContent;
