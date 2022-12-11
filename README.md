# 開発者
Takuchan https://github.com/Takuchan
Yamamoto https://github.com/Yamamoto1012
# Rainy_jellyfish_project
学内の自習室の空き状況確認ウェブアプリ

## プログラム作成の注意！
- 他の人がわかりやすいように、コンパクトで短い関数に分けて書く。
例えば
```Python
def 素数判別から表示（）
ではなく
def 素数判別()
def 画面に表示()
```

## Githubにあげる方法
### 注意！
GitにPushするときは、必ず、自分のブランチに**あげる💔**

一連の流れ

```
git checkout ブランチの名前
git fetch
git pull

git status
//多分赤文字で変更があったファイルが一覧で表示される。
//一つずつ追加するなら
git add ファイル名.拡張子
//すべて追加するなら
git add .

git commit -m "何のファイルを追加して、何の変更をしたのかを記入"
git push -u origin ブランチの名前
```

## Githubのプルリクエストする
プルリクとは→mainのブランチに載せる前にリポジトリの管理者に確認をとってもらうこと
