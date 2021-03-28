import React, { useState } from 'react';

import {
  Table,
  Tag,
  Space,
  Typography,
  List,
  Modal,
  message,
} from 'antd';

import {
  SyncOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartTwoTone,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

import AddRoom from './AddRoom';

import storage from "../utils/storage";
import data from '../fake-data/home';

const HomeTable = () => {

  const { Column, ColumnGroup } = Table;
  const { Text, Link } = Typography;
  const { confirm } = Modal;

  const [dataHomeTable, setHomeTableData] = useState(storage.get().reverse());

  if (dataHomeTable.length === 0) {
    storage.set(data)
    setHomeTableData(storage.get().reverse())
  }

  function handleChangeDataTableSource (newValue) {
    setHomeTableData(newValue.reverse());
  }

  function removeRoom (index) {
    let homeData = storage.get();
    homeData.splice(index, 1);
    setHomeTableData(homeData.reverse());
    storage.set(homeData);
    return true;
  }

  function deleteActionConfirm (index) {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'When clicked the OK button, You agree to the loss of data of this room.',
      onOk () {
        removeRoom(index)
          ? message.success('Room was successfully deleted.')
          : message.error('Room was unsuccessfully deleted.')
      },
      onCancel () { },
    });
  }


  return (
    <>
      <AddRoom homData={dataHomeTable} onChangeDataTableSource={handleChangeDataTableSource} />

      <Table key='homeTableData' dataSource={dataHomeTable} bordered>
        <Column
          title="Room"
          dataIndex="roomName"
          key="roomName"
          align='center'
        />

        <ColumnGroup title="Devices" key="columnGroupDevices">
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

        <ColumnGroup title="Sensors" key="columnGroupSensors">
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
                        temperature.values.length > 0
                          ? <List.Item key={temperature.id} >
                            <Text>{temperature.id}: {temperature.values[temperature.values.length - 1] + '°C'}</Text>
                          </List.Item>
                          : <Text key={temperature.id}>Sensor not added.</Text>

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
                        humidity.values.length > 0
                          ? <List.Item key={humidity.id}>
                            <Text>{humidity.id}: {humidity.values[humidity.values.length - 1] + '°C'}</Text>
                          </List.Item>
                          : <Text key={humidity.id}>Sensor not added.</Text>

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
          render={(text, record, index) => (
            <Space size="middle">
              <Link >
                <HeartTwoTone twoToneColor="#eb2f96" />
              </Link>
              <Link >
                <EditOutlined />
              </Link>
              <Link onClick={() => deleteActionConfirm(dataHomeTable.length - 1 - index)} type='danger'>
                <DeleteOutlined />
              </Link>
            </Space>
          )}
        />
      </Table>

    </>
  )
}

export default HomeTable;