# 管理事業LPの復元手順

対象: `Stayble-backoffice/stayble-kanri` の `main`。このLPはStayble本体とは独立しており、今回はWindowsでの開発を継続します。

## 新しいPCで復元する

1. Gitを用意してリポジトリをcloneする。
2. `.nvmrc` に記載されたNode.jsを使用する。2026-10-23の基準版は `22.23.4`。
3. 次のコマンドを実行する。

```sh
git clone https://github.com/Stayble-backoffice/stayble-kanri.git
cd stayble-kanri
git switch main
npm ci
npm run check
npm run build
npm run seo:audit
npm run dev
```

開発画面はコマンドに表示されるローカルURL（通常 `http://localhost:4321/`）で確認する。画像とソースはGitに含まれる。旧PCの `node_modules`、`dist`、`.astro` は移さず再生成する。

### Windowsのアプリ制御でコンパイラーが止まる場合

2026-10-23の新規clone検証では、依存関係のインストール後にWindowsのApplication ControlがAstroのネイティブ部品 `astro.win32-x64-msvc.node` の読み込みを拒否した。同じ基準コミットのGitHub Actions（Ubuntu）での型検査とビルドは成功している。

`Cannot find native binding` の後に `An Application Control policy has blocked this file` と出る場合、ファイル欠落と判断してロックファイルを消さない。端末の管理方針に従って原因を確認し、確認中の公開ビルドは既存のGitHub Actionsを利用する。この端末での新規cloneからのローカル起動は、この制限を解消してから確認する。

## 公開と外部設定

- `main` へのプッシュは `.github/workflows/deploy.yml` によりGitHub Pagesへ自動公開される。
- 公開ドメインは `minpaku.stayble.jp`。`public/CNAME` とGitHub Pages設定、ドメイン側DNSの組み合わせで成立する。
- 問い合わせの確認は外部フォームへの送信を伴う。復元確認では意図せず実送信しない。
- GitHub・DNS・フォームサービス等の管理アカウントは新しいPCで再認証する。管理用の秘密情報はリポジトリへ入れない。
- 公開リポジトリのため、内部資料や顧客情報をまとめて追加しない。

## 2026-10-23の整理

Node更新用の追加ワークツリーはGitHubのmainへの反映済みを確認したうえで、Windowsの `Documents/Stayble-recovery/2026-10-23/retired-worktrees/stayble-kanri/` に保管した。通常の作業場所は `C:\Users\hurin\stayble-kanri` の1つ。

整理前のGit履歴をGit bundleとして同じ復元用保管先に保存している。新しい作業は正本から始め、古いフォルダを開発場所にしない。
