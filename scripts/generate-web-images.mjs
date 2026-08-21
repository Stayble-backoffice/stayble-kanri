import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const jobs = [
  {
    input: "images/hero-sapporo-room-wide.png",
    output: "images/hero-sapporo-room-wide.webp",
    transform: (image) => image.webp({ quality: 78, effort: 6 })
  },
  {
    input: "images/stayble-logo-cropped.png",
    output: "images/stayble-logo-cropped.webp",
    transform: (image) => image.resize({ width: 440, withoutEnlargement: true }).webp({ lossless: true, effort: 6 })
  },
  {
    input: "images/hokkaido-admin-map-transparent.png",
    output: "images/hokkaido-admin-map-transparent.webp",
    transform: (image) => image.resize({ width: 960, withoutEnlargement: true }).webp({ quality: 84, effort: 6 })
  },
  {
    input: "ogp.png",
    output: "ogp.jpg",
    transform: (image) => image.flatten({ background: "#ffffff" }).jpeg({ quality: 86, progressive: true, mozjpeg: true })
  },
  {
    input: "favicon.png",
    output: "favicon-96x96.png",
    transform: (image) => image.resize(96, 96).png({ compressionLevel: 9, palette: true })
  }
];

for (const job of jobs) {
  const input = path.join(publicDir, job.input);
  const output = path.join(publicDir, job.output);
  const info = await job.transform(sharp(input)).toFile(output);
  console.log(`${job.output}: ${info.width}x${info.height}, ${info.size.toLocaleString()} bytes`);
}
