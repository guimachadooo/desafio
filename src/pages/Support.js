import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './Support';
import { Layout } from 'antd';
const { Content } = Layout;

export default function Support(){
  return(
    <Layout>
      <Sidebar></Sidebar>

      <Layout className="layout-content">
        <Content className="content-container">
          <div className="main-content">
            teste
          </div>
        </Content>

        <Footer></Footer>
      </Layout>
    </Layout>
  );
}
