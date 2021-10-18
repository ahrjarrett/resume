import { launch } from "puppeteer";

async function main() {
  try {
    const browser = await launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/make-pdf", {
      waitUntil: "networkidle2",
    });
    await page.pdf({ path: "public/resume.pdf" });

    await browser.close();
  } catch (exception) {
    console.error(exception);
    process.exit(1);
  }

  process.exit(0);
}

main();
