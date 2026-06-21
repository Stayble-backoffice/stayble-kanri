# stayble-kanri

株式会社Staybleの住宅宿泊管理LP「乗り換え民泊管理」用リポジトリです。  
公開予定URLは `https://minpaku.stayble.jp/` です。

---

## 1. プロジェクト概要

このリポジトリでは、札幌市を中心とした開業済み民泊向けの「乗り換え民泊管理」サイトを制作します。

メインコピー:

```txt
今の管理会社、高すぎませんか？
清掃会社が管理を請け負う時代へ。
```

主な訴求:

- 既存管理会社からの乗り換え
- 管理費 月額5,000円〜 + 売上5%
- 初期費用0円
- 写真撮影0円
- OTA初期立ち上げ0円
- 清掃・リネンサプライはStaybleセット
- 清掃会社が管理を請け負う合理性
- 札幌市中心、小樽・千歳・恵庭・北広島・江別対応

---

## 2. 予定ドメイン

```txt
https://minpaku.stayble.jp/
```

関連サイト:

```txt
清掃事業サイト: https://www.ww-sapporo-minpaku.com
システムサイト: https://www.stayble.jp
```

---

## 3. mdファイル一覧

| ファイル | 役割 |
|---|---|
| `AGENTS.md` | Codexの指令塔。守るルール・禁止事項・参照順序 |
| `BUSINESS.md` | 会社情報・実績・対応エリア・既存事業の事実 |
| `SERVICE.md` | 乗り換え民泊管理のサービス定義 |
| `PRICING.md` | 管理費、料金表、手残りシミュレーション、注釈 |
| `OPERATIONS.md` | OTA、PMS、宿泊者名簿、駆け付け、清掃・リネンサプライ運用 |
| `LP_STRUCTURE.md` | ページ構成、サブディレクトリ、セクション設計 |
| `LP_COPY.md` | LPコピー、CTA、FAQ、注釈 |
| `UIDESIGN.md` | デザイン、フォント、色、ロゴ、UI方向性 |
| `SEO.md` | title/meta/schema/sitemap/doorway回避 |
| `CONTRACT.md` | 契約書用論点。LPには出さない情報あり |
| `LEGAL_REFERENCES.md` | 公式法令情報の参照先 |
| `README.md` | リポジトリ概要・開発/デプロイ方針 |

---

## 4. 推奨技術構成

空リポジトリから始める場合は、Astroを第一候補にします。

```txt
Astro + TypeScript + CSS
```

理由:

- 静的LPに向いている
- SEO実装がしやすい
- GitHub Pagesに載せやすい
- コンポーネント管理できる

---

## 5. 推奨ディレクトリ構成

```txt
stayble-kanri/
├─ public/
│  ├─ CNAME
│  ├─ robots.txt
│  ├─ sitemap.xml
│  ├─ ogp.jpg
│  └─ images/
├─ src/
│  ├─ components/
│  ├─ layouts/
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ pricing.astro
│  │  ├─ switching.astro
│  │  ├─ services.astro
│  │  ├─ cleaning-linen.astro
│  │  ├─ emergency.astro
│  │  ├─ area.astro
│  │  ├─ faq.astro
│  │  └─ contact.astro
│  └─ styles/
├─ AGENTS.md
├─ BUSINESS.md
├─ SERVICE.md
├─ PRICING.md
├─ OPERATIONS.md
├─ LP_STRUCTURE.md
├─ LP_COPY.md
├─ UIDESIGN.md
├─ SEO.md
├─ CONTRACT.md
├─ LEGAL_REFERENCES.md
└─ README.md
```

---

## 6. ローカル開発

Astroの場合:

```bash
npm create astro@latest .
npm install
npm run dev
```

ビルド:

```bash
npm run build
```

プレビュー:

```bash
npm run preview
```

### このリポジトリでの初期実装後の確認手順

依存関係のインストール:

```bash
npm install
```

型チェック:

```bash
npm run check
```

静的ビルド:

```bash
npm run build
```

ローカル起動:

```bash
npm run dev
```

ブラウザで以下を確認します。

```txt
http://localhost:4321/
```

GitHub Pagesで公開する前提のため、`public/CNAME` には以下を配置しています。

```txt
minpaku.stayble.jp
```

---

## 7. GitHub Pages

`public/CNAME` に以下を置く。

```txt
minpaku.stayble.jp
```

GitHub ActionsでビルドしてPagesへデプロイする。

---

## 8. 初回実装の最低要件

- PCファースト
- スマホ対応
- `/` `/pricing/` `/switching/` `/services/` `/cleaning-linen/` `/emergency/` `/area/` `/faq/` `/contact/`
- 共通ヘッダー/フッター
- ロゴ使用
- 料金シミュレーションUI
- title/meta/canonical/OGP
- JSON-LD
- sitemap.xml
- robots.txt
- CNAME
- 問い合わせは外部フォームサービス前提
- 未確定事項を残す

---

## 9. 未確定事項

公開前に確認。

- 住宅宿泊管理業の登録番号
- 外部問い合わせフォームURL
- 公開電話番号
- OGP画像
- 駆け付け固定料金の契約前案内用金額
- エリア別駆け付けSLA
- プライバシーポリシー本文
- 特定商取引法表記の要否
- 最新本社住所

---

## 10. Codexへの初回依頼文

```txt
このリポジトリのAGENTS.mdを最初に読み、BUSINESS.md / SERVICE.md / PRICING.md / OPERATIONS.md / LP_STRUCTURE.md / LP_COPY.md / UIDESIGN.md / SEO.md / CONTRACT.md / LEGAL_REFERENCES.md / README.mdに従って、Astroで「乗り換え民泊管理」サイトの初期実装を作成してください。

要件:
- 公開予定URLは https://minpaku.stayble.jp/
- GitHub Pagesで公開する前提
- PCファースト、スマホ対応
- メインコピーは「今の管理会社、高すぎませんか？ 清掃会社が管理を請け負う時代へ。」
- サービス名は「乗り換え民泊管理」
- 管理費は「月額5,000円〜 + 売上5%」と表記
- 絶対に「管理費5%」と書かない
- 初期費用0円、写真撮影0円、OTA初期立ち上げ0円を訴求
- 清掃・リネンサプライはStaybleセット契約
- WindWoods名はLPに出さない
- AIはLPに出さない
- 違約金はLPに出さない
- 登録番号は捏造しない
- 清掃実績と住宅宿泊管理実績を混同しない
- ゴミ回収を前面訴求しない
- /pricing /switching /services /cleaning-linen /emergency /area /faq /contact を作成
- SEO基本実装、JSON-LD、sitemap、robots、CNAMEまで作成
```
