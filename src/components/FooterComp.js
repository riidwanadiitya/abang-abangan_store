import React, { Component } from 'react'
import { Icon, Segment,Popup } from 'semantic-ui-react'

export default class FooterComp extends Component {
    render() {
        return (
            <div className="App">
                <Segment inverted>
                    Contact Us <br/>
                    <Popup content='+62-857-1889-5449' on="click" pinned trigger={<Icon name="whatsapp"/>} />
                    <Popup content='@abang-abangan_store' on="click" pinned trigger={<Icon name="instagram"/>} />
                      <br/>
                    <Icon name="copyright outline"/>Abang-Abangan Store 2021 <br/>
                </Segment>
            </div>
        )
    }
}
