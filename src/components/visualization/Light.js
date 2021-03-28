import React from 'react';

import {
  Switch,
} from 'antd';

import {
  BulbOutlined,
} from '@ant-design/icons';

import '../../components/room.css';

const Light = ({ lightName }) => {
  return (
    <div className='light'>
      <BulbOutlined className='lightIcon' />
      <span style={{ fontSize: 20, }}>{lightName}</span>
      <Switch
        className='switchForLight'
        onChange={() => console.log('Turn on or off the light.')}
      />
    </div>
  )
}

export default Light;