export const SITE_URL = "https://minpaku.stayble.jp/";

export const siteMeta = {
  name: "Stayble 乗り換え民泊管理",
  company: "株式会社Stayble",
  service: "乗り換え民泊管理",
  description:
    "札幌市中心の開業済み民泊向け「乗り換え民泊管理」。管理費は月額5,000円〜 + 売上5%。清掃・リネンサプライ・OTA運用・現地対応まで、清掃会社のStaybleがまとめて支えます。",
  ogImage: `${SITE_URL}ogp.png`,
  ogImageAlt: "今の管理会社、高すぎませんか？清掃会社が管理を請け負う時代へ。乗り換え民泊管理｜Stayble"
};

export const navItems = [
  { label: "料金", href: "/pricing/" },
  { label: "乗り換え", href: "/switching/" },
  { label: "サービス", href: "/services/" },
  { label: "清掃・リネンサプライ", href: "/cleaning-linen/" },
  { label: "駆け付け", href: "/emergency/" },
  { label: "FAQ", href: "/faq/" }
];

export const pageMeta = {
  home: {
    path: "/",
    title: "札幌の民泊管理会社乗り換え｜管理費が高いなら Stayble",
    description:
      "札幌市中心の開業済み民泊向け「乗り換え民泊管理」。管理費は月額5,000円〜 + 売上5%。清掃・リネンサプライ・OTA運用・現地対応まで、清掃会社のStaybleがまとめて支えます。小樽・千歳・恵庭・北広島・江別も対応。"
  },
  pricing: {
    path: "/pricing/",
    title: "札幌の民泊管理費・料金｜手残り比較シミュレーション Stayble",
    description:
      "Staybleの乗り換え民泊管理は、管理費が月額5,000円〜 + 売上5%。清掃費・リネンサプライ費などの費用構造と、既存管理会社から乗り換えた場合の管理控除後シミュレーションを紹介します。"
  },
  switching: {
    path: "/switching/",
    title: "民泊管理会社の乗り換え手順｜札幌の開業済み物件向け Stayble",
    description:
      "既存管理会社の管理費や清掃品質に不満がある札幌の民泊オーナーへ。Staybleは初期費用0円、写真撮影0円、OTA初期立ち上げ0円で、開業済み物件の乗り換え管理を支援します。"
  },
  services: {
    path: "/services/",
    title: "札幌の住宅宿泊管理サービス｜清掃・OTA・現地対応 Stayble",
    description:
      "Staybleの乗り換え民泊管理は、清掃・リネンサプライ・OTA運用・宿泊者名簿・現地対応・定期報告まで、開業済み民泊の運用に必要な業務を支援します。札幌市中心の運用中物件に特化しています。"
  },
  cleaning: {
    path: "/cleaning-linen/",
    title: "札幌の民泊清掃・リネンサプライ｜清掃会社の管理 Stayble",
    description:
      "清掃品質まで責任を持つため、Staybleの乗り換え民泊管理では清掃・リネンサプライをセット契約にしています。民泊清掃管理約240室、年間清掃約15,000件の現場実績をもとに、札幌の民泊運営を支えます。"
  },
  emergency: {
    path: "/emergency/",
    title: "札幌の民泊駆け付け対応｜現地対応付き管理 Stayble",
    description:
      "Staybleの現地対応は8:00〜22:00を基本に、22時以降は火災・水漏れ・ガス・鍵トラブルなど緊急性の高い事案に限定して対応。固定料金制で、対応後はオーナー様へ報告します。"
  },
  faq: {
    path: "/faq/",
    title: "札幌の民泊管理会社乗り換えFAQ｜料金・清掃・対応エリア Stayble",
    description:
      "Staybleの乗り換え民泊管理に関するよくある質問。料金、清掃・リネンサプライ、OTA立ち上げ、駆け付け対応、宿泊者名簿、対応エリアなど、開業済み民泊オーナー向けに分かりやすく整理しています。"
  },
  contact: {
    path: "/contact/",
    title: "お問い合わせ｜札幌の乗り換え民泊管理 Stayble",
    description:
      "札幌市中心の開業済み民泊向けに、乗り換え民泊管理の相談を受け付けています。物件所在地、売上平均、清掃・リネンサプライ・現地対応の課題が分かる範囲でご相談ください。"
  }
};

export const areas = [
  "札幌市全区（一部郊外を除く）",
  "小樽市",
  "千歳市",
  "恵庭市",
  "北広島市",
  "江別市"
];

export const pricePlans = [
  {
    name: "規模A",
    tag: "小〜中規模",
    range: "1R〜1LDK / 概ね30〜45㎡",
    fixed: "月額5,000円",
    commission: "売上5%",
    price: "月額5,000円 + 売上5%",
    bestFor: "単身向け・小型マンションの乗り換えに"
  },
  {
    name: "規模B",
    tag: "標準",
    range: "2LDK / 概ね40〜60㎡",
    fixed: "月額8,000円",
    commission: "売上5%",
    price: "月額8,000円 + 売上5%",
    bestFor: "ファミリー滞在や複数ベッド運用に"
  },
  {
    name: "規模C",
    tag: "大型",
    range: "3LDK以上 / 60㎡以上",
    fixed: "月額15,000円",
    commission: "売上5%",
    price: "月額15,000円 + 売上5%",
    bestFor: "大型物件・戸建て・特殊導線の確認に",
    note: "一部要見積もり"
  }
];

export const cleaningReferencePrices = [
  { layout: "1R", price: "¥4,200" },
  { layout: "1LDK", price: "¥4,800" },
  { layout: "2LDK", price: "¥5,800" },
  { layout: "3LDK", price: "¥6,800" },
  { layout: "戸建て", price: "¥9,400" }
];

export const cleaningCostRows = [
  {
    layout: "1R",
    cleaning: "¥4,200",
    linen: "単価×枚数 + 集配¥550〜",
    supplies: "任意",
    waste: "運用確認",
    total: "¥4,200 + 個別費用"
  },
  {
    layout: "1LDK",
    cleaning: "¥4,800",
    linen: "単価×枚数 + 集配¥550〜",
    supplies: "任意",
    waste: "運用確認",
    total: "¥4,800 + 個別費用"
  },
  {
    layout: "2LDK",
    cleaning: "¥5,800",
    linen: "単価×枚数 + 集配¥550〜",
    supplies: "任意",
    waste: "運用確認",
    total: "¥5,800 + 個別費用"
  },
  {
    layout: "3LDK",
    cleaning: "¥6,800",
    linen: "単価×枚数 + 集配¥550〜",
    supplies: "任意",
    waste: "運用確認",
    total: "¥6,800 + 個別費用"
  },
  {
    layout: "戸建て",
    cleaning: "¥9,400",
    linen: "単価×枚数 + 集配¥550〜",
    supplies: "任意",
    waste: "運用確認",
    total: "¥9,400 + 個別費用"
  }
];

export const linenUnitRows = [
  { item: "バスタオル", size: "-", price: "¥112" },
  { item: "フェイスタオル", size: "-", price: "¥42" },
  { item: "バスマット", size: "-", price: "¥63" },
  { item: "ピロー", size: "-", price: "¥52" },
  { item: "デュベ", size: "S", price: "¥215" },
  { item: "デュベ", size: "D", price: "¥237" },
  { item: "デュベ", size: "Q", price: "¥271" },
  { item: "デュベ", size: "K", price: "¥288" },
  { item: "シーツ", size: "S", price: "¥154" },
  { item: "シーツ", size: "D", price: "¥180" },
  { item: "シーツ", size: "Q", price: "¥223" },
  { item: "シーツ", size: "K", price: "¥247" }
];

export const switchingFlow = [
  {
    title: "無料相談",
    text: "現在の管理費、物件所在地、月間売上、清掃状況を分かる範囲で共有ください。"
  },
  {
    title: "物件・運用確認",
    text: "清掃導線、リネンサプライ、鍵、OTA、PMS、現地対応範囲を確認します。"
  },
  {
    title: "管理控除後シミュレーション",
    text: "現在の管理費と比較し、Staybleへ乗り換えた場合に管理費・清掃費の控除後に残る金額を試算します。"
  },
  {
    title: "OTA立ち上げ・撮影",
    text: "Stayble側でOTAを新規立ち上げ、標準撮影も行います。"
  },
  {
    title: "運用開始",
    text: "清掃・リネンサプライ・OTA運用・現地対応をセットで開始します。"
  }
];

export const faqs = [
  {
    category: "OTA",
    question: "既存のOTAアカウントは引き継げますか？",
    answer:
      "原則として既存OTAアカウントの引き継ぎは行いません。Stayble側で新しく運用環境を立ち上げ、オーナー様には補助ホストとして必要な確認に参加いただく形を想定しています。"
  },
  {
    category: "清掃・リネンサプライ",
    question: "清掃会社は今のままでも契約できますか？",
    answer:
      "できません。清掃品質まで責任を持つため、清掃・リネンサプライはStaybleセット契約となります。"
  },
  {
    category: "料金",
    question: "初期費用はかかりますか？",
    answer:
      "初期費用は0円です。通常の乗り換え導入に必要な範囲で、写真撮影・OTA初期立ち上げ・簡易収益シミュレーションも標準対応します。"
  },
  {
    category: "撮影",
    question: "写真撮影はプロ撮影ですか？",
    answer:
      "プロカメラマン撮影ではなく、Stayble側の標準撮影です。必要十分な掲載用写真として整備します。"
  },
  {
    category: "駆け付け",
    question: "駆け付け対応はいくらですか？",
    answer:
      "固定料金制です。具体的な料金は契約前のご案内で提示します。移動費実費や22時以降の深夜割増が発生する場合があります。"
  },
  {
    category: "駆け付け",
    question: "22時以降も対応できますか？",
    answer:
      "22時以降は、火災・水漏れ・ガス・鍵トラブルなど緊急性の高い事案に限定して対応します。通常の現地対応は8:00〜22:00です。"
  },
  {
    category: "消耗品",
    question: "消耗品補充は含まれますか？",
    answer:
      "消耗品サービスは任意オプションです。利用する場合は、対象ラインナップ内で在庫管理・補充に対応します。"
  },
  {
    category: "契約前相談",
    question: "申請代行はできますか？",
    answer:
      "申請代行は行っていません。必要に応じて専門家の紹介は可能です。"
  }
];

export const requiredPriceNotes = [
  "※月額5,000円〜は管理費の月額固定部分です。管理費は、物件規模別の月額固定費と売上歩合5%で構成されます。",
  "※清掃費・リネンサプライ費・消耗品費・ゴミ処理関連費・駆け付け費・その他実費は別途発生します。",
  "※物件規模・所在地・運用内容により、個別見積もりとなる場合があります。"
];

export const simulationNotes = [
  "※上記は一定条件に基づく概算シミュレーションです。売上・稼働率・最終利益を保証するものではありません。",
  "※比較対象の管理費率は一例であり、すべての管理会社に該当するものではありません。",
  "※清掃費・リネンサプライ費・消耗品費・ゴミ処理関連費・駆け付け費・その他実費は物件条件や運用内容により変動します。",
  "※管理控除後の手残りは、管理費と清掃費を控除した比較用の金額です。オーナー側の借上賃料、税金、ローン、保険料等は含みません。"
];
