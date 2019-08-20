import React, { useState, useEffect } from 'react';
import { Layout, Avatar, Table, Typography, Card, Col, Row } from 'antd';
import api from '../services/api';

const { Content } = Layout;
const { Title } = Typography;

const columns = [
  {
    title: 'Foto',
    dataIndex: 'photo_url',
    key: 'photo_url',
    render: text => <Avatar src={text} alt={text} />
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'id',
    render: (text, key) => <a href={`/clients/${key.id}`}>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Saldo Total',
    dataIndex: 'amount',
    key: 'amount',
    render: text => <div>R$ {text}</div>
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: text => (text === '0') ? <div>Adimplente</div> : <div style={{color: '#f90532'}}>Inadimplente</div>,
  },
]

export default function Clients(props){
  const [clients, setClients] = useState();
  const [results, setResults] = useState();
  const [total, setTotal] = useState();
  const [amount, setAmount] = useState();
  const [nonperforming, setNonperforming] = useState();
  const [defaulting, setDefaulting] = useState();


  useEffect(() => {
    getClients();
    
  }, []);

  const getClients = async () => {
    var response = null;
    var clients = null;

    response = await api.get("users/");
    clients = response.data.users;

    setClients(clients);
    setTotal(clients.length);
    
    function amount(arr, type) {
      return arr.reduce((total, obj) => {
        if (typeof obj[type] === 'string') {
          return total + Number(obj[type]);
        }
        return total + obj[type];
      }, 0);
    }
    
    let totalAmount = ( amount(clients, 'amount') ).toFixed(2); 
    setAmount(totalAmount);
    
    let totalNonperforming = clients.filter(p => p.status === '0');
    setNonperforming(totalNonperforming.length);

    let totalDefaulting = clients.filter(p => p.status === '1');
    setDefaulting(totalDefaulting.length);
  }
  

  if (props.search) {  

    var response = api.get(`search?q=${props.search}`)
      .then(function(response) {
        const results = response.data;

        setResults(results.search)
    });

    return (
      <Content className="content-container">
          <Title level={3}>| Clientes cadastrados</Title>
  
          <div className="main-content">
            <Table columns={columns} dataSource={results} rowKey='id' /> 
          </div>
        </Content>
    );
  }
  else if(props.search === ''){

    return (
      <div>
        <Content className="content-container">
          <Title level={3}>| Visão Geral</Title>
  
          <Row gutter={16}>
            <Col span={6}>
              <Card title="Total de clientes" bordered={false}>
                <Title level={3}>{total}</Title>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Clientes Adimplentes" bordered={false}>
                <Title level={3}>{nonperforming}</Title>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Clientes inadimplentes" bordered={false}>
                <Title level={3}>{defaulting}</Title>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Total arrecadado" bordered={false}>
                <Title level={3}>R$ {amount}</Title>
              </Card>
            </Col>
          </Row>
        </Content>
  
        <Content className="content-container">
          <Title level={3}>| Clientes cadastrados</Title>
  
          <div className="main-content">
            <Table columns={columns} dataSource={clients} rowKey='id' /> 
          </div>
        </Content>
      </div>
      
    );
  }
}
