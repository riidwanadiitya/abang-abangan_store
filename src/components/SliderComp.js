import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container,Image } from "semantic-ui-react";
import  foto1 from '../images/foto1.jpg';
import  foto2 from '../images/foto2.jpg';
import fotoAbang from '../images/SliderAbang.jpg';

export default class SliderComp extends Component {
  render() {
    return (
      <div>
        <Container>
          <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
            <div>
              <Image src={fotoAbang} />
            </div>
            <div>
              <Image src={foto2} />
            </div>
            <div>
              <Image src={foto1} />
            </div>
          </Carousel>
        </Container>
      </div>
    );
  }
}
