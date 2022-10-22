# [Node.js](https://nodejs.org/ja/)

## 目次
1. [このドキュメントで解消したい疑問](#1このドキュメントで解消したい疑問)
2. [Node.jsとは](#2nodejsとは)
3. [Node.jsのメリット](#3nodejsのメリット)
4. [Node.jsのデメリット](#4nodejsのデメリット)
5. [npmについて](#5npmについて)
8. [その他](#8その他)

## 1.このドキュメントで解消したい疑問
* Node.jsってなに。(役割、使い方等)
* npmってなに。(役割、使い方等)

## 2.Node.jsとは
> Node.jsとはWebページ作成などの際に使われるJavaScriptを、サーバー側で動作させるプラットフォームです。

[公式ドキュメント](https://nodejs.org/ja/about/)では以下のように説明されている。

スケーラブルなネットワークアプリケーション構築のための非同期型イベント駆動のJavaScript環境。
以下の「Hello World」を出力する例では、たくさんの接続を同時に処理することができます。
各接続ごとに[コールバック](https://developer.mozilla.org/ja/docs/Glossary/Callback_function)は発火され、何もすることがない場合、Node.jsはスリープします。

```
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

### req, res, next(詳しくは[こちら](https://expressjs.com/ja/guide/using-middleware.html))

req：リクエスト  
res：レスポンス  
next：次のアクションに移る

[理解しやすいのはこれかも](https://qiita.com/syumiwohossu/items/f9ee317f31adc3ad387b)、、。  
↑このサイトで使用されている「[expressの雛形生成コマンド](https://qiita.com/t_skri/items/48948c0c2bfd535cf7d2)」について


## 3.Node.jsのメリット

* 大量アクセスに強く、リアルタイムでの処理が可能

Node.jsは「ノンブロッキングI/O」方式※を採用し大量なアクセスに強い上に、求められる処理をリアルタイムで実行可能
  
__ノンブロッキングI/O方式__ とは

> 通常、コンピューターは現在の処理が完了するのを待ってから次の処理に移ります。この場合、前の処理が終わるまで次の処理に移れないので、大量なアクセスが生じると処理しきれなくなるのです。ノンブロッキングI/O方式では、前の処理が完了しない状態でも次の処理を開始できます。そのため大量のアクセスも処理できるわけです。

* 「C10K問題」を解決できる

C10K問題とはサーバー同時接続数が一定数を超えると、ハードウェアのスペック的には余裕があっても処理が遅くなってしまうことです。C10K問題は略語で、より正式には「Client 10K(＝1万)問題」と書きます。

C10K問題の原因はいくつかありますが、その1つがプロセス数の上限です。一般的には1つのプロセスごとに1つの処理が行われ、プロセス数が上限に達すると処理に遅延が発生してしまいます。

一方Node.jsではノンブロッキングI/O方式の採用により、1つのプロセスで複数の処理を実行可能です。Node.jsならプロセス上限をはじめとした、C10K問題の原因は避けられます。そのためNode.jsを採用し適切な設定を行うことで、C10K問題を解決できるわけです。


* クライアントサイドからサーバーサイドまで同じスクリプト（言語）が使える

これはこのままの意味。本来サーバーサイドの言語はPHPやPythonなどを選んで、フレームワークはLaravelやDjangoなどを選ぶところを、言語はJavaScriptをサーバーサイド向けにしたNode.jsでフレームワークはExpressを選ぶことができるということ。JavaScriptとNode.jsの書き方の規則にそこまで大した差はないので、JavaScriptの書き方を覚えるだけでクライアントサイドはもちろん、サーバーサイドも比較的簡単に開発することが可能。

## 4.Node.jsのデメリット

そこまで重要そうなデメリットは見つけられなかったので説明はスキップ。

一応、メリットを紹介する際に参照したサイトにデメリットも説明されていたのでリンクのみの共有とします。

[参考リンク](https://www.kagoya.jp/howto/it-glossary/develop/nodejs/)

## 5.npmについて

[このサイト](https://zenn.dev/ikuraikura/articles/71b917ab11ae690e3cd7)が分かりやすく説明してくれている。

## 8.その他

情報の誤りや不備がある場合はプルリクエストを出していただけると幸いです。
