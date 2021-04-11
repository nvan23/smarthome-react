import React from 'react';

import {
  Layout,
  Tabs,
} from 'antd';

import Room from '../Room';
import HomeTable from '../HomeTable';
import RoomSelection from '../RoomSelection';
import LineChart from '../visualization/LineChart';

import HookMqtt from '../Hook/'

// import '../../components/room.css';

const { Content } = Layout;
const { TabPane } = Tabs;

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
      {/* Header */}

      {/* Content */}
      <Content className="site-layout" style={{ padding: '0 20px' }}>
        <div className="site-layout-background" style={{ marginTop: 20, minHeight: 790 }}>
          <div className="card-container">
            <Tabs
              defaultActiveKey="4"
              size="middle"
              style={{ marginBottom: 32 }}
              centered>
              <TabPane tab="Home" key="1">
                <div className="containerHomeTab">
                  {
                    home.length && home.map(
                      (h, index) =>
                        <Room
                          key={index}
                          roomName={h.roomName}
                          lights={h.lights}
                        />)
                  }
                </div>
              </TabPane>
              <TabPane tab="Management" key="2">
                <HomeTable key="homeTable" />
              </TabPane>
              <TabPane tab="Logger" key="3">
                <RoomSelection />
                <LineChart />
              </TabPane>
              <TabPane tab="Hook MQTT" key="4">
                <HookMqtt />
              </TabPane>
            </Tabs>
          </div>,
        </div>
      </Content>
    </Layout>
  );
}

export default MainLayout;