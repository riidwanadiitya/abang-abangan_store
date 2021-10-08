import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";

export default class HeaderComp extends Component {
  render() {
    return (
      <div>
        <Segment inverted>
          <Header as="h2" inverted>
            Abang-Abangan Store
          </Header>
        </Segment>
      </div>
    );
  }
}
