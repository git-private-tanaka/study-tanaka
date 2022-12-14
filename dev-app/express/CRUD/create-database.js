import { createConnection } from 'mysql2'

const connection = createConnection({
  host: '127.0.0.1',
  user: 'root', // mysqlと合わせる
  password: ''// mysqlと合わせる
})

// mysqlに接続してデータベース作成(成功するとconsoleに'database created'と出る)
connection.connect(function (err) {
  if (err) throw err
  console.log('Connected')
  connection.query('CREATE DATABASE express_db', function (err, result) {
    if (err) throw err
    console.log('database created')
  })
})
