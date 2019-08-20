import React from 'react';
import './Main.css';

import { Layout } from 'antd';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Clients from  '../components/Clients';
import Footer from '../components/Footer';

export default class Main extends React.Component{

  state = {
    data: ""
  };

  render(){
    return(
      <Layout>
          <Sidebar></Sidebar>
  
          <Layout className="layout-content">
            <Header 
              onResult={data => {
                this.setState({ data });
            }}/>
  
            <Clients search={this.state.data}></Clients>
  
            <Footer></Footer>
          </Layout>
        </Layout>
    );
  }
  
}
