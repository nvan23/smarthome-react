import React from 'react';
import { Card, Button, Form, Input, Row, Col } from 'antd';

import './base.css'

const ConnectionDefault = ({ connect, disconnect, connectBtn }) => {
  const [form] = Form.useForm();
  const record = {
    host: 'test.mosquitto.org',
    clientId: `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`,
    port: 8080,
  };
  const onFinish = (values) => {
    const {
      host = record.host,
      clientId = record.clientId,
      port = record.port,
      username = '',
      password = '',
    } = values;

    const url = `ws://${host}:${port}/mqtt`;

    const options = {
      keepalive: 30,
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
      },
      rejectUnauthorized: false
    };

    options.clientId = clientId;
    options.username = username;
    options.password = password;
    connect(url, options);
  };

  const handleConnect = () => {
    form.submit();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const ConnectionForm = (
    <Form
      layout="vertical"
      name="basic"
      form={form}
      initialValues={record}
      onFinish={onFinish}
    >
      <Row gutter={20}>
        <Col xs={{ span: 8 }}>
          <Form.Item
            label="Host"
            name="host"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={{ span: 8 }}>
          <Form.Item
            label="Port"
            name="port"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={{ span: 8 }}>
          <Form.Item
            label="Client ID"
            name="clientId"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={{ span: 8 }}>
          <Form.Item
            label="Username"
            name="username"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={{ span: 8 }}>
          <Form.Item
            label="Password"
            name="password"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )

  return (
    <>
      <Row>
        <Col span={24}>
          <Card
            title="Connection"
            className="ant-cart-full-width"
            actions={[
              <Button type="primary" onClick={handleConnect}>{connectBtn}</Button>,
              <Button danger onClick={handleDisconnect}>Disconnect</Button>
            ]}
          >
            {ConnectionForm}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ConnectionDefault;
