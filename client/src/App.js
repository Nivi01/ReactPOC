import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Alert from './components/Alert';

const App = () => {
 
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert/>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
