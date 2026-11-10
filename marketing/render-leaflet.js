// Renders leaflet.html to leaflet.png (2160 x 2700, for LinkedIn) and leaflet.pdf.
const { chromium } = require("playwright"); const path = require("path");
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });
  await p.goto("file://" + path.join(__dirname, "leaflet.html")); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  const over = await p.evaluate(() => { const f = document.querySelector(".foot").getBoundingClientRect(), n = document.querySelector(".nums").getBoundingClientRect(); return Math.round(f.top - n.bottom); });
  console.log("gap above footer:", over, "px");
  await p.screenshot({ path: path.join(__dirname, "leaflet.png") });
  await p.pdf({ path: path.join(__dirname, "leaflet.pdf"), width: "1080px", height: "1350px", printBackground: true, pageRanges: "1" });
  await b.close(); })();
