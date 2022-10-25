import express, { urlencoded } from 'express'
import { createConnection } from 'mysql2'
const app = express()
const port = 3000

app.use(express.static('public'))// 静的配信のフォルダを指定
app.use(urlencoded({ extended: false }))

const connection = createConnection({
  host: '127.0.0.1',
  user: 'root', // mysqlと合わせる
  password: '', // mysqlと合わせる
  database: 'express_db' // 先ほど作成したDBの名前
})

// viewsディレクトリ以下のejsファイル認識させる
app.set('views', './views')
app.set('view engine', 'ejs')

// hello world
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Express_app listening on port ${port}`)
})
