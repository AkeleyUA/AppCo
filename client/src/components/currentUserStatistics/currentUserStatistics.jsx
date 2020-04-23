import React from 'react';
import './currentUserStatistics.scss';
import DateFilter from '../date-filter/date-filter';

import Chart from '../chart/chart';

const CurrentUserStatistics = ({userFullName, userViews}) => {
  return (
    <div className="current-user-main">
      <div className="name-and-filter-wrapper">
        <h3 className="user-name">{userFullName}</h3>
        <DateFilter />
      </div>
      <h4 className="chart-title">Clicks</h4>
      <Chart userViews={userViews} dataKey="clicks" />
      <h4 className="chart-title">Views</h4>
      <Chart userViews={userViews} dataKey="views" />
    </div>
  )
}
export default CurrentUserStatistics;