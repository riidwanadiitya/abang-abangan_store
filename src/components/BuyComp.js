import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

const beli = ["Gan%20beli%20diamond%20Mobile%20Legends%0aId%20:%20...%0aServer%20:%20...%0aJumlah%20Diamond%20:%20...%0a%0aPastikan%20*ID*%20dan%20*SERVER*%20sudah%20*Benar*.%20Kami%20*TIDAK%20BERTANGGUNG%20JAWAB*%20jika%20ada%20kesalahan.%20Terimakasih.."];

export default class BuyComp extends Component {
  render() {
    return (
      <div className='App'>
        <div className="App-header">
          <Button positive size="massive" as="a" href={`https://wa.me/6285718895449?text=${beli}`}
          target="_blank">
           <Icon name="cart" /> Beli Diamond
          </Button>
        </div>
      </div>
    );
  }
}
