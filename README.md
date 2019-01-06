# nico-chat

[niconico-Display](https://github.com/UC-SADA/niconico-Display)でスタンプを押した回数をリアルタイムにグラフに描画したかたので作った機能になります。

### 使い方

https://github.com/UC-SADA/socket-chart　からクローンをダウンロードして

```bash
$ node index.js .
```

足りていない、モジュールがあったら npm install でインストールしてください。

あとは、 localhost:2525/controller にアクセスしてスタンプを押して

localhost:2525/chart にグラフが描画されればOK

localhost:2525/display にはスタンプが表示されえうはず。

electron実装する際には、それぞれでウインドウを作成してそれぞれスタンプ／コメントが表示されるレイヤー、グラフ表示のレイヤーのようにs使おうかと思ってます。
