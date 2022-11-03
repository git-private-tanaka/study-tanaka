## Laravel、React、MySQL、Dockerについて最近知ったことの共有

1. [なぜReactをアプリに使うのか？](https://zenn.dev/uxpin_official/articles/28d7cf249fff17)

1. Reactで入力されたパラメータを使って、LaravelでAPIを叩き、結果をReactに返したい。
 
1. バックエンドとフロントエンドそれぞれにサーバーを立てる

1. 使うコンテナはバックエンド（PHP）、フロントエンド（Node.js）、データベース（MySQL）

1. MySQLのパスワード、ユーザ名などの情報をdocker-compose書いて、GitHubにあげるのは良くない。→ `.env`に記載。

    1. docker-composeのMySQLの情報欄は変数化。

    1. docker-composeでデータベースの.env指定する。

    1. .envは.gitignoreに記載してgitHubにあげない。（これは今までと変わらないかも）

1. バックエンドサーバは立つが、フロントエンドサーバ使い始めたらAPI以外に使わないので、`routes/web.php`には何も記載しない。

1. Laravelでルーティング記載するのは、`routes/api.php`だけになるはず。（`routes/auth.php`を使うのかはイマイチまだ理解していない。）

1. コンテナで作業するときは`docker exec`ではなく、`docker run`。プロセス毎にrunを実行するべき。（良い資料が見つからないけど。）

    1. [参考１](https://qiita.com/soicchi/items/c307ca7042c136292925)
    
    1. [参考２](https://docs.docker.jp/v19.03/compose/faq.html)

## その他
情報が誤っていたり不足している箇所を発見した場合は、PRを作成していただけると幸いです。
