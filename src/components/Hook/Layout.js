import React, { useState } from 'react';

import {
  Layout,
  Menu,
  Tabs,
  Row,
  Col,
  Collapse,
  Space,
  Switch,
} from 'antd';

import {
  BulbOutlined,
} from '@ant-design/icons';

import Room from './Room';
import HomeTable from './HomeTable';
import TempGauge from './TempGauge';
import HumidityLiquid from './HumidityLiquid';
import RoomSelection from './RoomSelection';
import LineChart from './LineChart';

import './layout.css';
import './room.css';

import mainLogo from '../../assets/img/smart-home-logo.png';

const { Header, Content } = Layout;
const { TabPane } = Tabs;
const { Panel } = Collapse;



const onChangeSwitch = (checked) => {
  console.log(`switch to ${checked}`);
}

const MainLayout = () => {
  let home = [
    {
      roomName: 'Living',
      lights: [
        "Light number 1",
        "Light number 2",
      ],
    },
    {
      roomName: 'Bedroom',
      lights: [
        "Light number 3",
        "Light number 4",
      ],
    },
    {
      roomName: 'Kitchen',
      lights: [
        "Light number 5",
        "Light number 6",
      ],
    }
  ];

  return (
    <Layout>
      {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" >
          <img src={mainLogo} alt="smart home logo" />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Management</Menu.Item>
          <Menu.Item key="3">Logger</Menu.Item>
        </Menu>
      </Header> */}
      <Content className="site-layout" style={{ padding: '0 20px' }}>
        <div className="site-layout-background" style={{ marginTop: 20, minHeight: 790 }}>
          <div className="card-container">
            <Tabs defaultActiveKey="2" size="middle" style={{ marginBottom: 32 }}>
              <TabPane tab="Home" key="1">
                <div className="containerHomeTab">
                  {
                    home.length && home.map((h, index) => <Room roomName={h.roomName} lights={h.lights} key={index} />)
                  }
                </div>
              </TabPane>
              <TabPane tab="Management" key="2">
                <HomeTable />
              </TabPane>
              <TabPane tab="Logger" key="3">
                <RoomSelection />
                <LineChart />
              </TabPane>
            </Tabs>
          </div>,
        </div>
      </Content>
    </Layout>
  );
}

export default MainLayout;