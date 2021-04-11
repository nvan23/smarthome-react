import React, { useState } from 'react';
import {
  Button,
  message,
} from 'antd';

import CreateForm from './CreateForm';

import handleAddRoom from '../store/addRoom';
import storage from "../utils/storage";

const AddRoom = (props) => {
  const [visible, setVisible] = useState(false);

  let home = storage.get();

  const onCreate = (values) => {
    setVisible(false);

    let newRoom = handleAddRoom(values);

    home.push(newRoom);

    storage.set(home);

    props.onChangeDataTableSource(home);

    message.success('Room added successfully.')
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={() => {
          setVisible(true);
        }}
      >
        Add Room
      </Button>
      <CreateForm
        visible={visible}
        // visible={true}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
          message.error('Room added unsuccessfully.')
        }}
      />
    </div>
  );
}

export default AddRoom;