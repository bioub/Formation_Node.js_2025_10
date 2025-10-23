import fs from "node:fs/promises";
import path from "node:path";
import md5 from "md5";
import { minify } from "terser";

const distPath = path.resolve(import.meta.dirname, "dist");
const srcPath = path.resolve(import.meta.dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function emptyDir(dirPath) {
  await fs.rm(dirPath, { force: true, recursive: true });
  await fs.mkdir(dirPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  const buffer = Buffer.concat(buffers);
  await fs.writeFile(appJsDistPath, buffer);
}

async function buildHtml() {
  let htmlString = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });
  htmlString = htmlString
    .replace(
      '<script src="./js/horloge.js"></script>',
      '<script src="./app.js"></script>'
    )
    .replace('<script src="./js/index.js"></script>', "");

  await fs.writeFile(indexHtmlDistPath, htmlString);
}

try {
  await emptyDir(distPath);
  await Promise.all([buildJs(), buildHtml()]);
} catch (err) {
  console.log(err);
}
