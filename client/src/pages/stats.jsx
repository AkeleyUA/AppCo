import React from 'react';
import SmallHeader from '../components/small-header/small-header';
import SmallFooter from '../components/small-footer/small-footer';
import Stepper from '../components/stepper/stepper';
import UsersStatistic from '../components/users-statistic/users-statistic';

const routeToStats = [{path: '/', name: 'Home page'}, {path: '/stats', name: 'Users satistics'}]

const StatsPage = () => (
  <>
    <SmallHeader />
    <Stepper route={routeToStats}/>
    <UsersStatistic />
    <SmallFooter/>
  </>
)

export default StatsPage;