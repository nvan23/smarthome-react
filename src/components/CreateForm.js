import React from 'react'

import {
  Modal,
  Form,
  Input,
  Card,
  Collapse,
} from 'antd';

import {
  PlusOutlined,
  CloseOutlined,
} from '@ant-design/icons';

const addLightIcon = () => (
  <PlusOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

const removeLightIcon = () => (
  <CloseOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

const addEFanIcon = () => (
  <PlusOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

const removeEFanIcon = () => (
  <CloseOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

const CreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const { Panel } = Collapse;

  return (
    <Modal
      visible={visible}
      title="Add new room"
      centered
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal_to_add_room"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="roomName"
          label="Room name"
          rules={[
            {
              required: true,
              message: 'Please input the room name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Adding light field */}
        <Form.Item>
          <Collapse
          // defaultActiveKey={['1']}
          >
            <Panel
              header="Light"
              key="1"
              extra={addLightIcon()}
            >
              <Card
                size="small"
                title="Light"
                extra={removeLightIcon()}
              >
                <Form.Item name="lightName" label="Light name">
                  <Input type="textarea" placeholder="Light name" />
                </Form.Item>
                <Form.Item name="lightPath" label="Light path">
                  <Input type="textarea" placeholder="Light path" />
                </Form.Item>
              </Card>
            </Panel>
          </Collapse>
        </Form.Item>

        {/* Adding e-fan field */}
        <Form.Item>
          <Collapse
          // defaultActiveKey={['1']}
          >
            <Panel
              header="Electric Fan"
              key="1"
              extra={addEFanIcon()}
            >
              <Card
                size="small"
                title="Electric Fan"
                extra={removeEFanIcon()}
              >
                <Form.Item name="eFanName" label="Electric Fan name">
                  <Input type="textarea" placeholder="Electric Fan name" />
                </Form.Item>
                <Form.Item name="eFanPath" label="Electric Fan path">
                  <Input type="textarea" placeholder="Electric Fan path" />
                </Form.Item>
              </Card>
            </Panel>
          </Collapse>
        </Form.Item>

        {/* Adding temperature path */}
        <Form.Item
          name="temperaturePath"
          label="Temperature path"
        >
          <Input />
        </Form.Item>

        {/* Adding humidity path */}
        <Form.Item
          name="humidityPath"
          label="Humidity path"
        >
          <Input />
        </Form.Item>

      </Form>
    </Modal>
  );
};

export default CreateForm