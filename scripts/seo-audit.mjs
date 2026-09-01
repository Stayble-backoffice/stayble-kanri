import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const siteUrl = "https://minpaku.stayble.jp";
const lastUpdated = "2026-09-01";
const expectedHomeTitle = "札幌で民泊管理会社を乗り換えるなら｜月額5,000円〜＋売上5%｜国交大臣登録 Stayble";
const routes = ["/", "/pricing/", "/switching/", "/services/", "/cleaning-linen/", "/emergency/", "/area/", "/faq/", "/company/", "/contact/"];
const errors = [];

const routeFile = (route) =>
  route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html");
const addError = (route, message) => errors.push(`${route}: ${message}`);
const count = (source, pattern) => (source.match(pattern) || []).length;

if (!fs.existsSync(dist)) {
  console.error("dist がありません。先に npm run build を実行してください。");
  process.exit(1);
}

for (const route of routes) {
  const file = routeFile(route);
  if (!fs.existsSync(file)) {
    addError(route, "生成HTMLがありません");
    continue;
  }

  const html = fs.readFileSync(file, "utf8");
  const expectedCanonical = `${siteUrl}${route}`;
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "";
  const ogTitle = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i)?.[1]?.trim() ?? "";
  if (count(html, /<h1(?:\s|>)/gi) !== 1) addError(route, "h1が1件ではありません");
  if (count(html, /<title(?:\s|>)/gi) !== 1) addError(route, "titleが1件ではありません");
  if (route === "/") {
    if (title !== expectedHomeTitle) addError(route, "titleがトップページ指定値ではありません");
    if (ogTitle !== expectedHomeTitle) addError(route, "og:titleがトップページ指定値ではありません");
  } else {
    if (!title) addError(route, "ページ固有titleが空です");
    if (!ogTitle) addError(route, "ページ固有og:titleが空です");
  }
  if (count(html, /<meta\s+name="description"/gi) !== 1) addError(route, "meta descriptionが1件ではありません");
  if (!html.includes(`<link rel="canonical" href="${expectedCanonical}">`)) addError(route, "canonicalが不正です");
  if (!html.includes(`"dateModified":"${lastUpdated}"`)) addError(route, "dateModifiedが最新日ではありません");
  if (/FAQPage/.test(html)) addError(route, "廃止方針のFAQPage schemaが残っています");

  const schemaPattern = /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(schemaPattern)) {
    try {
      JSON.parse(match[1]);
    } catch {
      addError(route, "JSON-LDを解析できません");
    }
  }

  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const target = match[1];
    if (target === "/") continue;
    const localPath = target.endsWith("/")
      ? path.join(dist, target.slice(1), "index.html")
      : path.join(dist, target.slice(1));
    if (!fs.existsSync(localPath)) addError(route, `内部参照先がありません: ${target}`);
  }
}

const combinedHtml = routes
  .map((route) => (fs.existsSync(routeFile(route)) ? fs.readFileSync(routeFile(route), "utf8") : ""))
  .join("\n");

for (const prohibited of ["管理費5%", "5%の管理費", "管理費は売上の5%のみ"]) {
  if (combinedHtml.includes(prohibited)) addError("site", `禁止料金表現を検出: ${prohibited}`);
}

for (const prohibited of ["拡充準備", "手続き完了後", "申請中", "登録番号発行待ち", "事前相談として", "登録完了後に掲載"]) {
  if (combinedHtml.includes(prohibited)) addError("site", `登録前の表現を検出: ${prohibited}`);
}

for (const criticalFile of ["robots.txt", "sitemap.xml", "llms.txt", "CNAME", "02d4fa6a6cff66da8a7e56d9a62796d3.txt"]) {
  if (!fs.existsSync(path.join(dist, criticalFile))) addError("site", `必須ファイルがありません: ${criticalFile}`);
}

const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
if (count(sitemap, /<url>/g) !== routes.length) addError("sitemap", "URL件数が10件ではありません");
if (count(sitemap, new RegExp(`<lastmod>${lastUpdated}<\\/lastmod>`, "g")) !== routes.length) {
  addError("sitemap", "lastmodが全ページ最新日ではありません");
}

if (errors.length) {
  console.error(`SEO監査: ${errors.length}件のエラー`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`SEO監査: OK（${routes.length}ページ、title/meta/canonical/h1/JSON-LD/内部参照/重要ファイル）`);
