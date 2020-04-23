import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HomePage from '../pages/home'
import StatsPage from '../pages/stats';
import ChartPage from '../pages/chart';

const routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/stats" component={StatsPage} />
    <Route exact path="/user/:id" component={ChartPage} />
    <Redirect path to="/"/>
  </Switch>
)

export default routes;