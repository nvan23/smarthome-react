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

const MainLayout = ({ payload }) => {
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
            <Tabs defaultActiveKey="3" size="middle" style={{ marginBottom: 32 }}>
              <TabPane tab="Home" key="1">
                <div className="containerHomeTab">
                  <div className="homeTabItem">
                    <Collapse collapsible="header" defaultActiveKey={['1']}>
                      <Panel header="Living room" key="1">
                        <div className='room'>
                          <div className='light'>
                            <BulbOutlined className='lightIcon' />
                            <span style={{ fontSize: 20, }}>Light number 1</span>
                            <Switch
                              className='switchForLight'
                              onChange={() => console.log('Turn on or off the light.')} />
                          </div>
                          <div className='light'>
                            <BulbOutlined className='lightIcon lightIcon--active' />
                            <span style={{ fontSize: 20, }}>Light number 2</span>
                            <Switch
                              defaultChecked
                              className='switchForLight'
                              onChange={() => console.log('Turn on or off the light.')} />
                          </div>
                        </div>
                        <div className="temperatureAndHumidity">
                          <div className="temperature">
                            <TempGauge />
                          </div>
                          <div className="humidity">
                            <HumidityLiquid />
                          </div>
                        </div>
                      </Panel>
                    </Collapse>
                  </div>
                  <div className="homeTabItem">
                    <Collapse collapsible="header" defaultActiveKey={['1']}>
                      <Panel header="Kitchen" key="1">
                        <div className='room'>
                          <div className='light'>
                            <BulbOutlined className='lightIcon' />
                            <span style={{ fontSize: 20, }}>Light number 1</span>
                            <Switch
                              className='switchForLight'
                              onChange={() => console.log('Turn on or off the light.')} />
                          </div>
                          <div className='light'>
                            <BulbOutlined className='lightIcon lightIcon--active' />
                            <span style={{ fontSize: 20, }}>Light number 2</span>
                            <Switch
                              defaultChecked
                              className='switchForLight'
                              onChange={() => console.log('Turn on or off the light.')} />
                          </div>
                        </div>
                        <div className="temperatureAndHumidity">
                          <div className="temperature">
                            <TempGauge />
                          </div>
                          <div className="humidity">
                            <HumidityLiquid />
                          </div>
                        </div>
                      </Panel>
                    </Collapse>
                  </div>
                  <div className="homeTabItem">
                    <Collapse collapsible="header">
                      <Panel header="Bedroom" key="1">
                        <div className='room'>
                          <div className='light'>
                            <BulbOutlined className='lightIcon' />
                            <span style={{ fontSize: 20, }}>Light number 1</span>
                            <Switch
                              className='switchForLight'
                              onChange={() => console.log('Turn on or off the light.')} />
                          </div>
                          <div className='light'>
                            <BulbOutlined className='lightIcon lightIcon--active' />
                            <span style={{ fontSize: 20, }}>Light number 2</span>
                            <Switch
                              defaultChecked
                              className='switchForLight'
                              onChange={() => console.log('Turn on or off the light.')} />
                          </div>
                        </div>
                        <div className="temperatureAndHumidity">
                          <div className="temperature">
                            <TempGauge />
                          </div>
                          <div className="humidity">
                            <HumidityLiquid />
                          </div>
                        </div>
                      </Panel>
                    </Collapse>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Management" key="2">
                Content of tab 2
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