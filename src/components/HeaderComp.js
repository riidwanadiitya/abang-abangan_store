import React, { Component } from "react";
import { Header, Segment, Image } from "semantic-ui-react";
import headerImg from '../images/header.png';
import '../App.css';

export default class HeaderComp extends Component {
  render() {
    return (
      <div>
        <Segment inverted>
          <Header as="h2" inverted>
            <Image src={headerImg} className="header-pic"/>
          </Header>
        </Segment>
      </div>
    );
  }
}
