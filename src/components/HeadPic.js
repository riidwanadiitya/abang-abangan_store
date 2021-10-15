import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import foto from '../images/SliderAbang.jpg';
import '../App.css'


export default class HeadPic extends Component {
  render() {
    return (
      <div className="header-picture">
        <Container fluid>
            <Image src={foto}/>
        </Container>
      </div>
    );
  }
}
