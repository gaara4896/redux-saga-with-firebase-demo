import { DatePicker } from 'antd'
import React, { useEffect } from 'react'
import { useFirebase } from 'react-redux-firebase'

const Main = () => {
  const firebase = useFirebase()
  useEffect(() => {
    firebase.logout()

  }, [])

  return (
    <div>
      <DatePicker />
    </div>
  )
}

export default Main
