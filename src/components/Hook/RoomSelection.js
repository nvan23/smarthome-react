import React from 'react';

import { Select, DatePicker } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;

const roomData = ['Living', 'Kitchen', 'Bedroom'];
const sensorData = {
  Living: ['Temperature', 'Humidity'],
  Kitchen: ['1Temperature', 'Humidity'],
  Bedroom: ['2Temperature', 'Humidity'],
};

const RoomSelection = () => {
  const [sensor, setSensors] = React.useState(sensorData[roomData[0]]);
  const [secondSensor, setSecondSensor] = React.useState(sensorData[roomData[0]][0]);

  const handleRoomChange = value => {
    setSensors(sensorData[value]);
    setSecondSensor(sensorData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondSensor(value);
  };

  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  const onOk = (value) => {
    console.log('onOk: ', value);
  }

  return (
    <div style={{ marginBottom: 50 }}>
      <Select defaultValue={roomData[0]} style={{ width: 150 }} onChange={handleRoomChange}>
        {roomData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select style={{ width: 150, marginLeft: 10, }} value={secondSensor} onChange={onSecondCityChange}>
        {sensor.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
      <RangePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        style={{ marginLeft: 10, height: 32 }}
        onChange={onChange}
        onOk={onOk}
      />
    </div>
  );
};

export default RoomSelection;