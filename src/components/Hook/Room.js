import React from 'react';

import {
  Collapse,
} from 'antd';

import Light from './Light';
import TempGauge from './TempGauge';
import HumidityLiquid from './HumidityLiquid';

import './layout.css';
import './room.css';

const { Panel } = Collapse;

const Room = ({ roomName, lights = [] }) => {

  return (
    <div className="homeTabItem">
      <Collapse collapsible="header" defaultActiveKey={['1']}>
        <Panel header={roomName} key="1">
          <div className='room'>
            {
              lights.length > 0 && lights.map((light, index) => <Light lightName={light} key={index} />)
            }
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
  )
}

export default Room;