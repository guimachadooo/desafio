import React, { Component } from 'react';
import './Header.css';
import { Layout, Avatar, Input, Row, Col } from 'antd';

const AntHeader = Layout;
const Search = Input;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.props.onResult) {
      this.props.onResult(this.state.value);
    }
  }

  render(){
    
    return(
      <AntHeader className="header">
        <Row gutter={10}>
          <Col span={20}>
            <form onKeyUp={this.handleSubmit}>
              <Col span={30}>
                <Search
                  placeholder="Busque por clientes"
                  size="large" 
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </Col>
            </form>
          </Col>

          <Col span={4}>
            <Avatar icon="user" className="avatar" />
          </Col>
        </Row>
      </AntHeader>
    )
  }
}