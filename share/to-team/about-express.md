# [Express](https://expressjs.com/ja/)

## 目次
1. [このドキュメントで解消したい疑問](#1このドキュメントで解消したい疑問)
2. [Expressとは](#2expressとは)
3. [Expressの特徴](#3expressの特徴)
4. [Expressの使い方](#4expressの使い方)
5. [その他](#5その他)

## 1.このドキュメントで解消したい疑問
* expressってなに。(役割、使い方等)
* 静的ファイルの提供についての理解不足 // 特にここ

## 2.Expressとは
> Express は、Web アプリケーションとモバイル・アプリケーション向けの一連の堅固な機能を提供する最小限で柔軟な Node.js Web アプリケーション・フレームワークです。

## 3.Expressの特徴

* 良いところ
    * 利用実績やユーザー数が多いことから、情報量が多く日本語リソースも豊富

    * 軽量でありながらルーティング・クッキー・RESTfulなインターフェースを装備

    * 拡張モジュールが豊富にあり追加していくことで柔軟に対応できる

* 注意すべき点
    * 簡単な記述でサーバ制御が可能。その分、大規模開発時にリーダブルなコードが求められる。

## 4.Expressの使い方

> note
>
> ここではExpress公式ドキュメントの[概要](https://expressjs.com/ja/starter/installing.html)に沿って開発手順を説明します。

### 前提
Node.jsのインストールが完了している。

### インストール(ドキュメント作成時の最新は Express ５)

```
# アプリ開発のためのディレクトリを作成
mkdir myapp

# ディレクトリ移動
cd myapp

# package.jsonを作成
# 対話形式で入力していくがほとんどエンターでOK。
# メインファイルの名前を変更したい場合は entry point で任意の名前を入力(今回はapp.jsとした)
npm init
entry point: (index.js) app.js

最後にこの内容でpackage.jsonを作成してよろしいですか？と聞かれるので、yesと入力し、エンター

# Expressをmyappディレクトリにインストール
npm install express

# 一時的にインストール
npm install express --no-save
```

### Hello World
myappディレクトリでapp.jsというファイルを作成し、以下のコードを記述

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```

> note
> 
> req (要求) と res (応答) は、Node が提供するのとまったく同じオブジェクトであるため、Express が関与しない場合と同じように、req.pipe()、req.on('data', callback) などを呼び出すことができます。

次のコマンドを入力し、アプリを実行

```
node app.js
```

http://localhost:3000/ にアクセスして出力を確認する。

### Express Application Generator

アプリケーション “スケルトン” を作成するためのものとして Express Application Genetator というものがある。

```
# Express Application Genetatorのインストール
npm install express-generator -g

# コマンドやオプションの表示
express -h

# カレントディレクトリに myapp というExpressアプリを作成
# あくまで一例なので、ディレクトリ・ファイル内構造を自由に変更したり、ニーズに合わせて変更したりしてほしい。

express --view=pug myapp

   create : myapp
   create : myapp/package.json
   create : myapp/app.js
   create : myapp/public
   create : myapp/public/javascripts
   create : myapp/public/images
   create : myapp/routes
   create : myapp/routes/index.js
   create : myapp/routes/users.js
   create : myapp/public/stylesheets
   create : myapp/public/stylesheets/style.css
   create : myapp/views
   create : myapp/views/index.pug
   create : myapp/views/layout.pug
   create : myapp/views/error.pug
   create : myapp/bin
   create : myapp/bin/www

# 依存関係をインストール（node_modulesのこと？）
# アプリ作成時にpackage.jsonが生成されているのでそのままnpm installが可能
cd myapp
npm install

# アプリ実行
DEBUG=myapp:* npm start

http://localhost:3000 にアクセス
```

### ルーティングの基本

```
app.METHOD(PATH, HANDLER)
```

各部分の意味は次のとおりです。

* app は、express のインスタンスです。
* METHOD は、HTTP 要求メソッド です。
* PATH は、サーバー上のパスです。
* HANDLER は、ルートが一致したときに実行される関数です。

### 用途別ルーティングの例

```
# トップページでHello World
app.get('/', function(req, res){
    res.send('Hello World!')
})

# トップページでPOST要求に応答（作成アクション）
app.post('/', function(req, res){
    res.send('Got a PUT request at /user')
})

# /userに対するPUT要求に応答（編集アクション辺り？）
app.put('/user', function(req, res){
    res.send('Got a PUT request at /user')
})

# /userに対するDELETE要求に応答（削除アクション）
app.delete('/user', function(req, res){
    res.send('Got a DELETE request at /user')
})
```

詳しくは[こちら](https://expressjs.com/ja/guide/routing.html)

### Expressを用いた静的ファイルの提供

そもそも静的ファイルとは？

> HTMLファイルや画像ファイルなど，クライアントからの要求に対する応答に使用するファイルのうち，リクエスト内容に影響されないで常に同じ内容になるコンテンツを，静的コンテンツといいます。

[参考](http://itdoc.hitachi.co.jp/manuals/3020/30203M0461/EM040148.HTM#:~:text=HTML%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%84%E7%94%BB%E5%83%8F%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB,%E7%9A%84%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%A8%E3%81%84%E3%81%84%E3%81%BE%E3%81%99%E3%80%82)

つまり、画像やJavaScriptファイルなど、リクエストによって内容が変わらないものをサーバで処理する時に必要になる知識。

Expressに標準で実装されている、express.staticというミドルウェア関数を使用する。

静的ファイルを格納しているディレクトリをexpress.staticミドルウェア関数に渡してあげると、ファイルの直接提供ができます。

例えば、静的ファイルが格納されているディレクトリ名がpublicの場合、

```
app.use(express.static('public'))
```

これで、publicディレクトリ内のファイルのロードができます。

```
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
```

静的ディレクトリからの相対パスをURLにするため、静的ディレクトリの名前（今回はpublic）はURLに含まれません。

もしURLに含みたい場合は、

```
app.use('/static', express.static('public'));
```

このようにすると良いです。すると、指定した名前がURLに含まれていることが確認できます。

```
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
```

ただし、アプリを実行するディレクトリに対して相対的なので、別ディレクトリからアプリを実行する場合は、絶対パスを使用する方が良いです。

```
app.use('/static', express.static(__dirname + '/public'));
```

## 5.その他

情報の誤りや不備がある場合はプルリクエストを出していただけると幸いです。
