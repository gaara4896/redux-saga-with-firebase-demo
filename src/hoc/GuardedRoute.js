import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { Spin } from 'antd';

// Ensure auth is loaded before performing guard
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="float-center-container"><Spin /></div>;
  return children
}

const GuardedRoute = ({ component: Component, ...rest }) => {
  const authState = useSelector(state =>  state.firebase.auth)

  return (
    <AuthIsLoaded>
      <Route {...rest} render={(props) => (
        !isEmpty(authState) ?
            <Component {...props} /> : <Redirect to={{ pathname: '/login'}} />
      )} />
    </AuthIsLoaded>
  )
};

export default GuardedRoute
