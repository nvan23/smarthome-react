import React, { useState } from 'react';

import { Table, Tag, Space, Typography, Button, List } from 'antd';
import {
  SyncOutlined,
  BulbOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartTwoTone,
} from '@ant-design/icons';

import AddRoom from './AddRoom';

import storage from "../../utils/storage";
import data from '../../fake-data/home';

const HomeTable = () => {

  const { Column, ColumnGroup } = Table;
  const { Text, Link } = Typography;

  const [dataHomeTable, setHomeTableData] = useState(storage.get().reverse());

  if (dataHomeTable.length === 0) {
    storage.set(data)
    setHomeTableData(storage.get().reverse())
  }

  function handleChangeDataTableSource (newValue) {
    setHomeTableData(newValue.reverse());
  }

  return (
    <>
      <AddRoom homData={dataHomeTable} onChangeDataTableSource={handleChangeDataTableSource} />
      <Table dataSource={dataHomeTable} bordered>
        <Column
          title="Room"
          dataIndex="roomName"
          key="id"
          align='center'
        />

        <ColumnGroup title="Devices">
          {/* The Light */}
          <Column
            title="Light(s)"
            dataIndex="devices.lights"
            key="devices.lights"
            align='center'
            render={(devices, record, index) => (
              <>
                <Space direction="vertical">
                  {
                    record.devices.lights.map(eFan =>
                      <Tag
                        key={eFan.id}
                        icon={eFan.active && <SyncOutlined spin />}
                        color={eFan.active ? "gold" : "cyan"}
                      >
                        {eFan.name}
                      </Tag>
                    )
                  }
                </Space>
              </>
            )
            }
          />

          {/* Electric Fan */}
          <Column
            title="Electric Fan"
            dataIndex="devices.eFans"
            key="devices.eFans"
            align='center'
            render={(devices, record, index) => (
              <>
                <Space direction="vertical">
                  {
                    record.devices.eFans.map(eFan =>
                      <Tag
                        key={eFan.id}
                        icon={eFan.active && <SyncOutlined spin />}
                        color={eFan.active ? "gold" : "cyan"}
                      >
                        {eFan.name}
                      </Tag>
                    )
                  }
                </Space>
              </>
            )
            }
          />
        </ColumnGroup>

        <ColumnGroup title="Sensors">
          <Column
            title="Temperature"
            dataIndex="sensors.temperatures"
            key="sensors.temperatures"
            align='center'
            render={(sensors, record, index) => (
              <>
                <List itemLayout="horizontal">
                  {record.sensors.temperatures.length > 0
                    ? record.sensors.temperatures.map(
                      temperature => (
                        <List.Item>
                          {
                            temperature.values.length > 0
                              ? <Text>{temperature.id}: {temperature.values[temperature.values.length - 1] + '°C'}</Text>
                              : <Text>Sensor not added.</Text>
                          }
                        </List.Item>
                      ))
                    : 'Sensor not added.'
                  }
                </List>
              </>
            )
            }
          />
          <Column
            title="Humidity"
            dataIndex="sensors.humidities"
            key="sensors.humidities"
            align='center'
            render={(sensors, record, index) => (
              <>
                <List itemLayout="horizontal">
                  {record.sensors.humidities.length > 0
                    ? record.sensors.humidities.map(
                      humidity => (
                        <List.Item>
                          {
                            humidity.values.length > 0
                              ? <Text>{humidity.id}: {humidity.values[humidity.values.length - 1] + '°C'}</Text>
                              : <Text>Sensor not added.</Text>
                          }
                        </List.Item>
                      ))
                    : 'Sensor not added.'
                  }
                </List>
              </>
            )
            }
          />
        </ColumnGroup>

        <Column
          title="Action"
          key="action"
          align='center'
          render={(text, record) => (
            <Space size="middle">
              <Link href="" target="_blank">
                <HeartTwoTone twoToneColor="#eb2f96" />
              </Link>
              <Link href="" target="_blank">
                <EditOutlined />
              </Link>
              <Link href="" target="_blank" type='danger'>
                <DeleteOutlined />
              </Link>
            </Space>
          )}
        />
      </Table>,

    </>
  )
}

export default HomeTable;