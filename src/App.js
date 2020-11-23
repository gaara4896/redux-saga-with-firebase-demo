import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.less';
import GuardedRoute from './hoc/GuardedRoute'
import Main from './components/screens/Main'
import Login from './components/screens/auth/Login'
import Register from './components/screens/auth/Register'



function App() {
  return (
    <Switch>
      <GuardedRoute exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}

export default App;
