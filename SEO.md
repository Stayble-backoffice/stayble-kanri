# SEO.md

株式会社Stayble「乗り換え民泊管理」サイトのSEOルールです。  
ページ別title/meta、schema、sitemap、doorway回避を定義します。

---

## 1. SEO基本方針

初期サイトは、札幌市中心の「開業済み民泊オーナー」「管理会社からの乗り換え」「管理費見直し」を狙う。

主要検索意図:

- 民泊 管理会社 高い
- 民泊 管理費 高い
- 民泊 管理会社 乗り換え
- 民泊 管理会社 変更
- 札幌 民泊 管理会社
- 札幌 住宅宿泊管理
- 札幌 民泊 清掃 リネン
- 民泊 清掃 管理会社
- 民泊 駆け付け 対応
- 民泊 OTA 運用代行

---

## 2. URL設計

```txt
/
/pricing/
/switching/
/services/
/cleaning-linen/
/emergency/
/area/
/faq/
/contact/
```

---

## 3. トップページ title/meta

### title

```txt
今の管理会社、高すぎませんか？｜札幌の乗り換え民泊管理 Stayble
```

または

```txt
札幌の乗り換え民泊管理｜月額5,000円〜+売上5%の管理費ならStayble
```

### description

```txt
札幌市中心の開業済み民泊向け「乗り換え民泊管理」。管理費は月額5,000円〜+売上5%。清掃・リネン・OTA運用・現地対応まで、清掃会社のStaybleがまとめて支えます。小樽・千歳・恵庭・北広島・江別も対応。
```

注意: 「管理費5%」と書かない。

---

## 4. `/pricing/` title/meta

### title

```txt
民泊管理費を見直すなら｜料金表・手残りシミュレーション Stayble
```

### description

```txt
Staybleの乗り換え民泊管理は、管理費が月額5,000円〜+売上5%。清掃費・リネン費などの費用構造と、既存管理会社から乗り換えた場合の手残りシミュレーションを分かりやすく紹介します。
```

---

## 5. `/switching/` title/meta

### title

```txt
民泊管理会社の乗り換えならStayble｜開業済み民泊向け管理サービス
```

### description

```txt
既存管理会社の管理費や清掃品質に不満がある民泊オーナーへ。Staybleは初期費用0円、写真撮影0円、OTA初期立ち上げ0円で、開業済み民泊の乗り換え管理をサポートします。
```

---

## 6. `/services/` title/meta

### title

```txt
乗り換え民泊管理のサービス内容｜清掃・OTA・現地対応まで Stayble
```

### description

```txt
Staybleの乗り換え民泊管理は、清掃・リネン・OTA運用・宿泊者名簿・現地対応・定期報告まで、開業済み民泊の運用に必要な業務を支援します。申請代行ではなく、運用中物件の管理に特化しています。
```

---

## 7. `/cleaning-linen/` title/meta

### title

```txt
札幌の民泊清掃・リネン込み管理｜清掃会社が請け負う民泊管理 Stayble
```

### description

```txt
清掃品質まで責任を持つため、Staybleの乗り換え民泊管理では清掃・リネンをセット契約にしています。民泊清掃管理約240室、年間清掃約15,000件の現場実績をもとに、札幌の民泊運営を支えます。
```

---

## 8. `/emergency/` title/meta

### title

```txt
民泊の駆け付け・緊急対応｜札幌の乗り換え民泊管理 Stayble
```

### description

```txt
Staybleの現地対応は8:00〜22:00を基本に、22時以降は火災・水漏れ・ガス・鍵トラブルなど緊急性の高い事案に限定して対応。固定料金制で、対応後はオーナー様へ報告します。
```

---

## 9. `/area/` title/meta

### title

```txt
対応エリア｜札幌・小樽・千歳・恵庭・北広島・江別の民泊管理 Stayble
```

### description

```txt
Staybleの乗り換え民泊管理は、札幌市全区（一部郊外を除く）を中心に、小樽・千歳・恵庭・北広島・江別まで対応。エリアや物件状況に応じて、清掃・リネン・現地対応の運用を設計します。
```

---

## 10. `/faq/` title/meta

### title

```txt
よくある質問｜乗り換え民泊管理・料金・清掃・OTA・駆け付け Stayble
```

### description

```txt
Staybleの乗り換え民泊管理に関するよくある質問。料金、清掃・リネン、OTA立ち上げ、駆け付け対応、宿泊者名簿、対応エリアなど、開業済み民泊オーナー向けに分かりやすく整理しています。
```

---

## 11. `/contact/` title/meta

### title

```txt
無料相談｜民泊管理会社の乗り換え・手残り試算 Stayble
```

### description

```txt
現在の管理費や月間売上をもとに、Staybleへ乗り換えた場合の手残りを試算します。札幌市中心の開業済み民泊向け、乗り換え民泊管理の無料相談はこちら。
```

---

## 12. canonical

各ページに正しいcanonicalを設定。

```txt
https://minpaku.stayble.jp/
https://minpaku.stayble.jp/pricing/
https://minpaku.stayble.jp/switching/
...
```

GitHub Pagesの一時URLがindexされないように注意。

---

## 13. OGP

共通OGP:

```txt
og:title: 今の管理会社、高すぎませんか？｜Stayble 乗り換え民泊管理
og:description: 管理費は月額5,000円〜+売上5%。清掃・リネン・OTA運用・現地対応まで、清掃会社のStaybleが支えます。
og:type: website
og:url: https://minpaku.stayble.jp/
og:image: https://minpaku.stayble.jp/ogp.jpg
```

OGP画像は未確定。公開前に作成。

---

## 14. 構造化データ

入れる候補:

- Organization
- LocalBusiness
- Service
- FAQPage
- BreadcrumbList

### Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "株式会社Stayble",
  "url": "https://minpaku.stayble.jp/",
  "sameAs": [
    "https://www.ww-sapporo-minpaku.com",
    "https://www.stayble.jp"
  ]
}
```

### Service

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "乗り換え民泊管理",
  "provider": {
    "@type": "Organization",
    "name": "株式会社Stayble"
  },
  "areaServed": ["札幌市", "小樽市", "千歳市", "恵庭市", "北広島市", "江別市"],
  "serviceType": "住宅宿泊管理、民泊管理、民泊清掃管理、OTA運用支援"
}
```

未確定情報をschemaに入れない。

---

## 15. robots.txt

本番:

```txt
User-agent: *
Allow: /

Sitemap: https://minpaku.stayble.jp/sitemap.xml
```

開発中に公開URLへ置く場合は noindex を検討。

---

## 16. sitemap.xml

初期URLをすべて含める。

```txt
https://minpaku.stayble.jp/
https://minpaku.stayble.jp/pricing/
https://minpaku.stayble.jp/switching/
https://minpaku.stayble.jp/services/
https://minpaku.stayble.jp/cleaning-linen/
https://minpaku.stayble.jp/emergency/
https://minpaku.stayble.jp/area/
https://minpaku.stayble.jp/faq/
https://minpaku.stayble.jp/contact/
```

---

## 17. Doorway回避

地域別ページ量産は禁止。  
初期では `/area/` に集約する。

将来的に地域別ページを作る場合、以下を地域ごとに必ず変える。

- 物件傾向
- 宿泊需要
- 清掃導線
- 駆け付け難易度
- 冬季移動
- 地域固有FAQ
- 事例

---

## 18. 注意表現

NG:

- 管理費5%
- 絶対に儲かる
- 必ず手残りが増える
- 完全代行
- すべて合法
- ゴミ回収完全対応
- 登録番号取得済み（番号未提供時）

OK:

- 月額5,000円〜 + 売上5%
- 手残りを試算
- 物件状況に応じて個別見積もり
- 管理費を抑えやすい
- 清掃品質まで責任を持つ
