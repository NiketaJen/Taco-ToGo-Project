import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import { Icon, Label } from "semantic-ui-react";


class HeaderContent extends React.Component {
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
            <div className="LoginIcon" onClick={this.handleClick}>
              <Label as="login">
                <Icon name="user outline" />
                Log in
              </Label>
            </div>
          </div>
       
        </Segment>
      </div>
    );
  }
}

export default HeaderContent;
