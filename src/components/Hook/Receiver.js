import React, { useEffect, useState, useRef } from 'react';
import { Card, List } from 'antd';
import { Line } from '@ant-design/charts';

const Receiver = ({ payload }) => {
  const [messages, setMessages] = useState([])
  let counter = 0;

  useEffect(() => {
    console.log(payload)
    if (payload.topic) {
      setMessages(messages => [...messages, payload])
    }
  }, [payload])

  const data = messages.map(message => {
    let newMessage = {
      value: parseInt(message.message),
      year: message.topic + counter++,
    }
    return newMessage;
  })

  const config = {
    data,
    yField: 'value',
    xField: 'year',
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };

  const renderListItem = (item) => (
    <List.Item>
      <List.Item.Meta
        title={item.topic}
        description={item.message}
      />
    </List.Item>
  )

  return (
    <>
      <Card
        title="Receiver"
      >
        <Line key={payload.topic} {...config} />
        <List
          size="small"
          bordered
          dataSource={messages}
          renderItem={renderListItem}
        />
      </Card>
    </>
  );
}

export default Receiver;
