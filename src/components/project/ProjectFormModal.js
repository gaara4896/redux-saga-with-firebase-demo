import React, { useEffect, useRef } from 'react'
import { Button, Form, Input, Modal } from 'antd'

const ProjectFormModal = ({
  visible,
  onFinish,
  onCancel
}) => {
  const form = useRef(null)

  useEffect(() => {
    if (form.current) form.current.resetFields();
  }, [visible])

  return (
    <Modal
      title="Add project"
      visible={visible}
      footer={null}
      onCancel={onCancel}
    >
      <Form
        onFinish={onFinish}
        ref={form}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Name cannot be empty" }]}
          hasFeedback
        >
          <Input placeholder="Name"/>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ProjectFormModal
