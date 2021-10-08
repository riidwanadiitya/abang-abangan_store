import React, { Component } from "react";
import { Card, Header } from "semantic-ui-react";

const items = [
  {
    header: "36 Diamonds",
    description: "Rp. 13.000",
  },
  {
    header: "86 Diamonds",
    description: "Rp. 22.000",
  },
  {
    header: "172 Diamonds",
    description: "Rp. 42.000",
  },
  {
    header: "257 Diamonds",
    description: "Rp. 63.000",
  },
  {
    header: "344 Diamonds",
    description: "Rp. 83.000",
  },
  {
    header: "429 Diamonds",
    description: "Rp. 105.000",
  },
  {
    header: "514 Diamonds",
    description: "Rp. 123.000",
  },
  {
    header: "600 Diamonds",
    description: "Rp. 145.000",
  },
  {
    header: "706 Diamonds",
    description: "Rp. 165.000",
  },
  {
    header: "878 Diamonds",
    description: "Rp. 205.000",
  },
  {
    header: "963 Diamonds",
    description: "Rp. 225.000",
  },
  {
    header: "1412 Diamonds",
    description: "Rp. 327.000",
  },
  {
    header: "2195 Diamonds",
    description: "Rp. 490.000",
  },
];

export default class PricelistComp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header as="h1" style={{color:"white"}}>List Harga</Header>
            <Card.Group items={items} centered stackable/>
          <Header as="h3" style={{color:"white"}}>Note: Apabila harga berubah, akan kami konfimasikan kembali</Header>
        </div>
      </div>
    );
  }
}
