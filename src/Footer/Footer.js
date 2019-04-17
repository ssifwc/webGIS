import React, { Component } from 'react';
import { Layout, Button, Icon } from 'antd'

import './Footer.css'

const { Footer } = Layout;


class PageFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render () {
    return (
          <Footer theme='dark' className='footer'>
                <Button type="primary" shape="circle" size={'large'} href={'https://www.facebook.com/groups/SSIFWCWSG/invited/'}>
                    <Icon type="facebook" theme="filled" />
                </Button>
                <Button type="primary" shape="circle" size={'large'} href={'https://drive.google.com/drive/u/0/my-drive'}>
                    <Icon type="google" />
                </Button>
                <Button type="primary" shape="circle" size={'large'} href={'http://www.ssiwaterpreservationsociety.ca'}>
                    <Icon type="home" theme="filled" />
                </Button>
                <Button type="primary" shape="circle" size={'large'} href={'mailto:ssifwc@gmail.com?Subject=Hello'}>
                    <Icon type="mail" theme="filled" />
                </Button>
          </Footer>
      )
  }
}

export default PageFooter;
