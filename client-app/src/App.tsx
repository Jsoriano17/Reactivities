import React, { Component } from 'react';
import logo from './logo.svg';
import axios from "axios"
import { PageHeader } from 'antd';
import { List, Typography, Divider } from 'antd';
import { RobotOutlined } from '@ant-design/icons';


class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values').then(res => {
      console.log(res)
      this.setState({
        values: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <div style={{display:"flex", margin: "20px", alignItems: "center"}}>
          <RobotOutlined spin style={{ fontSize: '50px', color: '#08c' }} />
          <PageHeader
            className="site-page-header"
            title="Reactivities"
            subTitle="best social media app"
          />
        </div>
        <Divider orientation="left">Values</Divider>
        <List
          header={<div>name</div>}
          bordered
        >
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    )
  }
}

export default App;
