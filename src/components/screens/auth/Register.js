import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import RegisterForm from '../../auth/RegisterForm'
import { isEmpty } from 'react-redux-firebase'

const Login = () => {
  const authState = useSelector(state => state.firebase.auth)
  const history = useHistory()

  // Watch firebase authenticated
  useEffect(() => {
    if(!isEmpty(authState)) history.push('/')
  }, [authState])

  return (
    <div className="float-center-container">
      <RegisterForm />
    </div>
  )
}

export default Login
