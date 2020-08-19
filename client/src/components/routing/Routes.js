import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Employees from '../Employees';
import Alert from '../Alert';

const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/employees" component={Employees} /> 
      </Switch>
    </section>
  );
};

export default Routes;
