var mysql = require('mysql2')
require("dotenv").config();

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DBNAME
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})