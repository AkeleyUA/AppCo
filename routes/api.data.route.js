const { Router } = require('express')
const router = Router()
const sqlite = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.join('data', 'data.db')

router.post('/data', async (req, res) => {
  const db = new sqlite.Database(dbPath)
  const { currentPage, usersAmount } = req.body;
  const firstItemOnPage = currentPage * usersAmount - usersAmount;

  const get50Users = await request50Users(db, firstItemOnPage, usersAmount)
  const getTotalUsers = await requestTotalUsers(db)
  const getTotalClicks = await requestTotalClicks(db, firstItemOnPage, usersAmount)
  const getTotalViews = await requestTotalPageViews(db, firstItemOnPage, usersAmount)
  const data = {
    users: get50Users,
    totalUsers: getTotalUsers,
    totalClicks: getTotalClicks,
    totalPageViews: getTotalViews
  }
  res.send(JSON.stringify(data))
  db.close()
})

request50Users = (db, firstItemOnPage, usersAmount) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM users LIMIT ${firstItemOnPage}, ${usersAmount}`, [], (err, row) => {
      if (err) {
        reject('Error')
      } else {
        resolve(row)
      }
    })
  })
}

requestTotalUsers = (db) => {
  return new Promise((resolve, reject) => {
    db.each('SELECT COUNT(*) AS allUsers FROM users', [], (err, data) => {
      if (err) {
        reject('Error')
      } else {
        resolve(data.allUsers)
      }
    })
  })
}

requestTotalClicks = (db, firstItemOnPage, usersAmount) => { 
  const sqlRequest = `SELECT user_id, SUM(clicks) AS clicks FROM users_statistic GROUP BY user_id LIMIT ${firstItemOnPage}, ${usersAmount}`
  return new Promise((resolve, reject) => {
    db.all(sqlRequest, [], (err, data) => {
      if (err) {
        reject('Error')
      } else {
        resolve(data)
      }
    })
  })
}

requestTotalPageViews = (db, firstItemOnPage, usersAmount) => { 
  const sqlRequest = `SELECT user_id, SUM(page_views) AS views FROM users_statistic GROUP BY user_id LIMIT ${firstItemOnPage}, ${usersAmount}`
  return new Promise((resolve, reject) => {
    db.all(sqlRequest, [], (err, data) => {
      if (err) {
        reject('Error')
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = router