import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './Config.css';
import { Layout, Steps } from 'antd';
const { Content } = Layout;

const { Step } = Steps;

export default function Config(){
  return(
    <Layout>
      <Sidebar></Sidebar>

      <Layout className="layout-content">
        <Content className="content-container">
          <div className="main-content">
            <Steps current={1}>
              <Step title="Config 1" description="Dados do EAD atualizados." />
              <Step title="Config 2" description="Cadastrar conta bancária do Recebedor." />
              <Step title="Config 3" description="Definir formas de pagamento." />
            </Steps>
          </div>
        </Content>

        <Footer></Footer>
      </Layout>
    </Layout>
  );
}
