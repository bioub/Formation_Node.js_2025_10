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

await fs.rm(distPath, { force: true, recursive: true });
await fs.mkdir(distPath);

const horlogeBuffer = await fs.readFile(horlogeJsPath);
await fs.writeFile(appJsDistPath, horlogeBuffer);

const indexBuffer = await fs.readFile(indexJsPath);
await fs.appendFile(appJsDistPath, indexBuffer);

let htmlString = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });
htmlString = htmlString
  .replace(
    '<script src="./js/horloge.js"></script>',
    '<script src="./app.js"></script>'
  )
  .replace('<script src="./js/index.js"></script>', "");

await fs.writeFile(indexHtmlDistPath, htmlString);

