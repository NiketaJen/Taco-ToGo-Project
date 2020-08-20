import React from "react";
import { Header, Image, Segment, Icon, Button } from "semantic-ui-react";
import { useState } from "react-router";
import { useHistory } from "react-router";
import Login from "../components/Login";

class HeaderContent extends React.Component {
  state = {
    refresh: false,
  };

  loggedOut = () => {
    window.localStorage.clear();
    if (this.props.isLoggedIn() === false) {
      return <Login />;
    }
  };

  render() {
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
              <Button onClick={() => this.loggedOut()} as="logout">
                <Icon name="user outline" />
                Log out
              </Button>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default HeaderContent;
