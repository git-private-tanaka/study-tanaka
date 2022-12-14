import { createConnection } from 'mysql2'

const connection = createConnection({
  host: '127.0.0.1',
  user: 'root', // mysqlと合わせる
  password: '', // mysqlと合わせる
  database: 'express_db' // 先ほど作成したDBの名前
})

// テーブルの作成
connection.connect(function (err) {
  if (err) throw err
  console.log('Connected')
  const sql = 'CREATE TABLE items (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255) NOT NULL, text VARCHAR(255) NOT NULL)'
  connection.query(sql, function (err, result) {
    if (err) throw err
    console.log('table created')
  })
})
