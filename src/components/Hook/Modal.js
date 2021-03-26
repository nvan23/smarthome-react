import React, { useState } from 'react';

import { Table, Tag, Space, Typography, Button } from 'antd';
import {
  SyncOutlined,
} from '@ant-design/icons';

const Modal = () => {

  return (
    <Modal
      title="Vertically centered modal dialog"
      centered
      visible={this.state.modal2Visible}
      onOk={() => this.setModal2Visible(false)}
      onCancel={() => this.setModal2Visible(false)}
    >

    </Modal>
  )
}

export default Modal;