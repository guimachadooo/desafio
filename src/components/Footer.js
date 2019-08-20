import React from 'react';
import { Layout } from 'antd';
import './Footer.css';

const { Footer } = Layout;

export default function setFooter(){
  return(
    <Footer className="footer">
      <p>
        <span style={{color: '#D0031C'}}>♥</span>  EAD Plataforma
      </p>
    </Footer>
  )
}