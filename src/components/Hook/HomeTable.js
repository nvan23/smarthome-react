import React from 'react';

import { Table, Tag, Space } from 'antd';

const HomeTable = () => {

  const columns = [
    {
      title: 'Room Name',
      dataIndex: 'roomName',
      key: 'roomName',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Lights',
      key: 'lights',
      dataIndex: 'lights',
      render: (lights) => (
        <>
          {lights.map(light => {
            return (
              <Tag key={light}>
                {light}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Default devices',
      key: 'othersDevices',
      dataIndex: 'othersDevices',
      render: (othersDevices) => (
        <>
          {othersDevices.map(device => {
            return (
              <Tag key={device}>
                {device}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      roomName: 'Living',
      lights: [
        "Light number 1",
        "Light number 2",
      ],
      othersDevices: [
        "Temperature Sensor",
        "Humidity Sensor",
      ],
    },
    {
      roomName: 'Bedroom',
      lights: [
        "Light number 3",
        "Light number 4",
      ],
      othersDevices: [
        "Temperature Sensor",
        "Humidity Sensor",
      ],
    },
    {
      roomName: 'Kitchen',
      lights: [
        "Light number 5",
        "Light number 6",
      ],
      othersDevices: [
        "Temperature Sensor",
        "Humidity Sensor",
      ],
    }
  ];

  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default HomeTable;