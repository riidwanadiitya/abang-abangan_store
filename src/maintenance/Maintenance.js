import React, { Component } from "react";
import { Header } from "semantic-ui-react";

export default class Maintenance extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-maintenance">
          <Header as="h1" style={{color:"white"}}>
            Mohon maaf, server sedang maintenance. Silahkan coba beberapa saat
            lagi.
          </Header>
        </div>
      </div>
    );
  }
}
