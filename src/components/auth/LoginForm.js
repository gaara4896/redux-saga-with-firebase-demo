import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { actionTypes, useFirebase } from 'react-redux-firebase';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const firebaseState = useSelector(state => state.firebase)

  // Watch auth error change
  useEffect(() => {
    if (firebaseState.authError) message.error(firebaseState.authError.message)

    // Clear error after showing
    dispatch({ type: actionTypes.LOGIN_ERROR, authError: null })
  }, [firebaseState.authError])

  const onLogin = (data) => {
    firebase.login({
      email: data.email,
      password: data.password
    })
  }

  return (
    <Form onFinish={onLogin}>
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
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" className="full-width">Login</Button>
        Not a member yet? <Link to="/register">Register</Link>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
