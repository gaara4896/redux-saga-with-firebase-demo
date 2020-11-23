import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useFirebase, actionTypes } from 'react-redux-firebase';
import { useDispatch, useSelector } from 'react-redux';

const RegisterForm = () => {
  const form = useRef(null)
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const firebaseState = useSelector(state => state.firebase)

  // Watch auth error change
  useEffect(() => {
    if (firebaseState.authError) message.error(firebaseState.authError.message)

    // Clear error after showing
    dispatch({ type: actionTypes.LOGIN_ERROR, authError: null })
  }, [firebaseState.authError])

  const onRegister = (data) => {
    firebase.createUser({
      email: data.email,
      password: data.password
    })
  }

  return (
    <Form ref={form} onFinish={onRegister}>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Email cannot be empty" },
          { type: "email", message: "Invalid email format" }
        ]}
        hasFeedback
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Password cannot be empty" }]}
        hasFeedback
      >
        <Input
          type="password"
          prefix={<LockOutlined />}
          placeholder="Password"
          onChange={() => form.current && form.current.validateFields(["password2"])}
        />
      </Form.Item>
      <Form.Item
        name="password2"
        rules={[
          {
            required: true,
            message: 'Please input your confirm password.',
            whitespace: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('Password does not match.');
            },
          }),
        ]}
        hasFeedback
      >
        <Input
          type="password"
          prefix={<LockOutlined />}
          placeholder="Confirm Password"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" className="full-width">Register</Button>
        Already has account? <Link to="/login">Login</Link>
      </Form.Item>
    </Form>
  )
}

export default RegisterForm
