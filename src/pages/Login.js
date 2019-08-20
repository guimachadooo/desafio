import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './Login.css';

export default function Login(){
  const size= 'large';

  return (
    <div className="login-container">
      <div className="button-box">
        <Link to="/main">
          <Button type="primary" size={size}>Acessar Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}