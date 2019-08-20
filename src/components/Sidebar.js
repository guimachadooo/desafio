import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-ead.jpg';
import './Sidebar.css';

import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

const items = [
  {
    key: "1",
    type: "appstore-o",
    text: "Painel",
    link: "/main"
  },
  {
    key: "2",
    type: "setting",
    text: "Configurações",
    link: "/config"
  },
  {
    key: "3",
    type: "wechat",
    text: "Suporte",
    link: "support"
  },
]

export default function Sidebar(){

  return (
    <Sider className="sider-config">
          
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="ead" />
        </Link>
      </div>

      <Menu theme="dark" mode="inline">
        {items.map(item => (
          <Menu.Item key={item.key}>
            <Icon type={item.type} />
            <span className="nav-text"> 
              <Link to={item.link} className="nav-link">{item.text}</Link>
            </span>              
          </Menu.Item>
          ))
        }
      </Menu>
    </Sider>
  );
}