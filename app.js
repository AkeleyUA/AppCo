const express = require('express');
const config = require('config');
const dbCreator = require('./data/dbCreator');
const dataRoute = require('./routes/api.data.route');
const userRoute = require('./routes/api.user.route');

const app = express();
const PORT = config.get('port') || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api', dataRoute);
app.use('/api', userRoute);

app.listen(PORT, () => console.log(`server was started on port ${PORT}`));






  // const firstItemOnPage = currentPage * 50 - 50

  // const get50Users = await request50Users(db, firstItemOnPage)
  // const getTotalUsers = await requestTotalUsers(db)
  // const getTotalClicks = await requestTotalClicks(db, firstItemOnPage)
  // const getTotalViews = await requestTotalPageViews(db, firstItemOnPage)
  // const data = {
  //   users: get50Users,
  //   totalUsers: getTotalUsers,
  //   totalClicks: getTotalClicks,
  //   totalPageViews: getTotalViews
  // }