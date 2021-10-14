import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";

const beli = [
  "Gan%20beli%20diamond%20Mobile%20Legends%0aId%20:%20...%0aServer%20:%20...%0aJumlah%20Diamond%20:%20...%0a%0aPastikan%20*ID*%20dan%20*SERVER*%20sudah%20*Benar*.%20Kami%20*TIDAK%20BERTANGGUNG%20JAWAB*%20jika%20ada%20kesalahan.%20Terimakasih..",
];

export default class BuyComp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Grid>
            <Grid.Row columns="equal" >
              <Grid.Column>
                <Button
                  positive
                  size="massive"
                  as="a"
                  href={`https://wa.me/6285718895449?text=${beli}`}
                  target="_blank"
                >
                  Beli Diamond via Whatsapp
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button
                positive
                size="massive"
                as="a"
                href={`https://www.instagram.com/abangabangan.store/`}
                target="_blank">
                   
                  Beli Diamond via Instagram
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
