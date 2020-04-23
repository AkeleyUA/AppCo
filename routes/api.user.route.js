const { Router } = require('express')
const router = Router()
const sqlite = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.join('data', 'data.db')

router.post('/user', async (req, res) => {
  const db = new sqlite.Database(dbPath)
  const {currentUser, filterDate} = req.body;
  const data = {
    userInfo: await requestUserPersonalInfo(db, currentUser),
    userViews: await requsetUserViewInfo(db, currentUser, filterDate),
  }
  res.json(data);
  db.close()
})

validateDate = (value) => {
  var arrD = value.split(".");
  arrD[1] -= 1;
  var d = new Date(arrD[2], arrD[1], arrD[0]);
  if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
    return (
    `${d.getFullYear() < 10 ? `0${d.getFullYear()}` : d.getFullYear()}-${d.getMonth()+1 < 10 ? `0${d.getMonth()+1}` : d.getMonth()+1}-${d.getDate()}`)
  } else {
    console.log("Введена некорректная дата!");
    return false;
  }
}

requestUserPersonalInfo = (db, userId) => {
  const sqlRequest = `SELECT * FROM users WHERE id = ${userId}`
  return new Promise((resolve, reject) => {
    db.each(sqlRequest, [], (err, row) => {
      if (err) {
        reject('Error')
      } else {
        resolve(row)
      }
    })
  })
}

requsetUserViewInfo = (db, userId, date) => {
  const sqlRequest = `
    SELECT * FROM users_statistic
    WHERE user_id = ${userId}
    AND datetime(date) BETWEEN '${validateDate(date.startFilterDate)}'
    AND '${validateDate(date.endFilterDate)}'`
  return new Promise((resolve, reject) => {
    db.all(sqlRequest, [], (err, row) => {
      if (err) {
        reject('Error')
      } else {
        resolve(row)
      }
    })
  })
} 


module.exports = router