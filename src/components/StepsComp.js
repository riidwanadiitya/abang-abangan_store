import React, { Component } from "react";
import { Button, Container, Header, Icon, Step } from "semantic-ui-react";

export default class StepsComp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Container>
            <Header as="h1" style={{color:"white"}}>Langkah-Langkah Pembelian</Header>
            <Step.Group stackable="tablet" size="big" fluid vertical>
              <Step>
                <Icon name="hand pointer" />
                <Step.Content>
                  <Step.Title>
                    Klik Tombol <Button color="green">Beli</Button>
                  </Step.Title>
                </Step.Content>
              </Step>

              <Step>
                <Icon name="whatsapp" />
                <Step.Content>
                  <Step.Title>Kirim Id + Server kalian</Step.Title>
                  <Step.Description>Pastikan mengisi dengan <strong>Benar</strong></Step.Description>
                </Step.Content>
              </Step>

              <Step>
                <Icon name="info" />
                <Step.Content>
                  <Step.Title>Konfirmasi Pembelian</Step.Title>
                </Step.Content>
              </Step>

              <Step>
                <Icon name="payment" />
                <Step.Content>
                  <Step.Title>Pembayaran</Step.Title>
                  <Step.Description>Kirim bukti transfer</Step.Description>
                </Step.Content>
              </Step>

              <Step>
                <Icon name="clock" />
                <Step.Content>
                  <Step.Title>Tunggu Diamond Masuk</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
          </Container>
        </div>
      </div>
    );
  }
}
