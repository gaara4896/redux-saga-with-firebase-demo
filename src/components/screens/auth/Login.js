import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'

import LoginForm from '../../auth/LoginForm'

const Login = () => {
  const authState = useSelector(state => state.firebase.auth)
  const history = useHistory()

  // Watch firebase authenticated
  useEffect(() => {
    if(!isEmpty(authState)) history.push('/')
  }, [authState])

  return (
    <div className="float-center-container">
      <LoginForm />
    </div>
  )
}

export default Login
