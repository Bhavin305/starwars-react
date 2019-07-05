import React, { Fragment } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './containers/Login';
import NoMatch from './containers/NoMatch';
import Starwars from './containers/Starwars';
import history from './services/history';
import './index.css';

const Routers = (props) =>{
  console.log('props', props);
  return(
    <Switch>
      <Route path="/" exact component={Login}/>
      <Sample path="/starwars" exact component={Starwars}/>
      <Route component={NoMatch} />
    </Switch>
  );
}

const Sample = (props) => {
  if (localStorage.getItem('session')) {
    return <Route path={props.path} exact={props.exact} render={() => <props.component />} />;
  }
  return <Route path={props.path} exact={props.exact} render={() => <Redirect to="/" />} />;
};

const App = () => (
  <Fragment>
    <Router history={history}>
        <Routers />
    </Router>
  </Fragment>
);

export default App;