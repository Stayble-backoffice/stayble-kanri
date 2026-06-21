# UIDESIGN.md

株式会社Stayble「乗り換え民泊管理」サイトのUI/デザイン指針です。  
初回生成したLPイメージの洗練感を維持しながら、コピーと構成を乗り換え管理向けに再設計します。

---

## 1. デザイン方針

デザインは合格済み。  
最初に生成したLPイメージの方向性をそのまま使う。

キーワード:

- 清潔
- 信頼
- 札幌らしさ
- 現場に強い
- 管理費が軽い
- 清掃会社らしい実体感
- BtoB向けの安心感
- 安っぽくない

コピーは鋭く、デザインは上品にする。

---

## 2. 避ける方向

- 安っぽい激安LP
- 不動産投資セミナー風
- 「楽して儲かる」系
- 観光サイト風
- AIサービス風
- SaaS製品サイト風
- 高級ホテル風に寄せすぎる
- ゴミ回収を強く見せるデザイン

---

## 3. カラーパレット

### Navy

```css
--color-navy-900: #071A33;
--color-navy-800: #0B2A52;
--color-navy-700: #103B70;
```

### Teal / Cyan

```css
--color-teal-600: #0F8FA8;
--color-teal-500: #19A9C8;
--color-teal-100: #E6F7FB;
```

### Light Blue

```css
--color-blue-50: #F3FAFD;
--color-blue-100: #EAF6FB;
```

### Neutral

```css
--color-white: #FFFFFF;
--color-gray-900: #111827;
--color-gray-700: #374151;
--color-gray-500: #6B7280;
--color-gray-200: #E5E7EB;
--color-gray-100: #F3F4F6;
```

### Attention

料金差や手残りで使うアクセント。  
赤を使う場合は控えめにし、安売り感を出しすぎない。

```css
--color-red-600: #DC2626;
--color-orange-500: #F97316;
```

---

## 4. フォント

推奨:

```css
body {
  font-family: "Noto Sans JP", system-ui, sans-serif;
}

.heading-serif {
  font-family: "Noto Serif JP", serif;
}
```

ヒーローや大見出しは少し品よく、本文は読みやすく。

---

## 5. ロゴ

リポジトリ直下にある添付ロゴを使用。  
勝手に再生成しない。

候補:

```txt
logo.png
logo (1).png
stayble-logo.png
```

ロゴは横長のため、ヘッダーでは高さを抑える。

推奨:

```css
.logo img {
  height: 44px;
  width: auto;
}
```

スマホでは高さ32〜36px程度。

---

## 6. レイアウト

### PCファースト

- 最大幅: 1440px
- コンテンツ幅: 1120〜1200px
- ヒーローは16:9で映えること
- 1440×810, 1366×768, 1920×1080で崩れない

### セクション余白

```css
section {
  padding: 88px 24px;
}

@media (max-width: 768px) {
  section {
    padding: 56px 20px;
  }
}
```

---

## 7. ヘッダー

構成:

- 左: ロゴ
- 中央: ナビ
- 右: CTA

ナビ:

- 料金
- 乗り換え
- サービス
- 清掃・リネン
- 駆け付け
- FAQ
- お問い合わせ

CTA:

```txt
無料相談する
```

---

## 8. ヒーロー

### 見せ方

左:

- キャッチコピー
- サブコピー
- 料金バッジ
- CTA
- 無料対応バッジ

右:

- 札幌らしい街並み
- 清潔な部屋
- 手残りシミュレーション風カード

### ヒーローコピー

```txt
今の管理会社、高すぎませんか？
清掃会社が管理を請け負う時代へ。
```

---

## 9. 料金シミュレーションUI

添付スケッチのような積み上げ比較にする。

要件:

- 左右比較
- 手取り部分を大きく表示
- 管理費を分かりやすく表示
- Stayble側は「管理費（月額固定 + 売上5%）」と表示
- 清掃費は必要費用として表示
- 管理費5%とは絶対に書かない

推奨UI:

```txt
売上 300,000円 の場合

一般的な管理会社の例        Stayble
[手取り]                     [手取り]
[清掃費]                     [清掃費]
[管理費 20%]                 [管理費（月額固定 + 売上5%）]
```

注釈は必ず近くに表示。

---

## 10. カードデザイン

```css
.card {
  background: #fff;
  border: 1px solid rgba(15, 143, 168, 0.12);
  border-radius: 24px;
  box-shadow: 0 16px 40px rgba(7, 26, 51, 0.08);
}
```

---

## 11. CTAボタン

Primary:

```css
.btn-primary {
  background: #0B2A52;
  color: #fff;
  border-radius: 14px;
  padding: 18px 28px;
  font-weight: 700;
}
```

Secondary:

```css
.btn-secondary {
  background: #fff;
  color: #0B2A52;
  border: 1px solid #0F8FA8;
  border-radius: 14px;
}
```

---

## 12. サブページ共通デザイン

各サブページはトップと同じトーン。

- 上部に小さめヒーロー
- ページ主題を明確に
- 本文はカード/表/FAQで整理
- 最下部にCTA
- フッターは共通

---

## 13. アニメーション

控えめに。

OK:

- フェードイン
- カードhover
- FAQ開閉
- ボタンhover

NG:

- 派手なスクロール演出
- パララックス過多
- 大量アニメーション

---

## 14. アクセシビリティ

- 見出し階層を守る
- 画像altを入れる
- フォームlabelを入れる
- 色のコントラストを確保
- CTAはaまたはbuttonで明確に
- FAQ開閉はariaを使う
