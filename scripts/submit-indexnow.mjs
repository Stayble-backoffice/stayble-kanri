const host = "minpaku.stayble.jp";
const key = "02d4fa6a6cff66da8a7e56d9a62796d3";
const routes = ["/", "/pricing/", "/switching/", "/services/", "/cleaning-linen/", "/emergency/", "/area/", "/faq/", "/company/", "/contact/"];
const payload = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: routes.map((route) => `https://${host}${route}`)
};

if (process.argv.includes("--dry-run")) {
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload)
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`IndexNow submission failed: ${response.status} ${body}`);
}

console.log(`IndexNow accepted ${payload.urlList.length} URLs (${response.status}).`);
