import { Route, Switch } from 'react-router-dom';

import './App.less';
import Main from './components/screens/Main'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default App;
