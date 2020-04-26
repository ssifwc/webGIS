import React, { Component } from 'react';
import { Layout, Button } from 'antd'
import {FacebookFilled, GoogleCircleFilled, HomeFilled, MailFilled} from '@ant-design/icons'

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
                    <FacebookFilled/>
                </Button>
                <Button type="primary" shape="circle" size={'large'} href={'https://drive.google.com/drive/u/0/my-drive'}>
                    <GoogleCircleFilled/>
                </Button>
                <Button type="primary" shape="circle" size={'large'} href={'http://www.ssiwaterpreservationsociety.ca'}>
                    <HomeFilled/>
                </Button>
                <Button type="primary" shape="circle" size={'large'} href={'mailto:ssifwc@gmail.com?Subject=Hello'}>
                    <MailFilled/>
                </Button>
          </Footer>
      )
  }
}

export default PageFooter;
