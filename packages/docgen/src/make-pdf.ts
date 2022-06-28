import { launch } from "puppeteer"
// import * as TE from "fp-ts/TaskEither"

// TODO: chain TaskEithers instead to make this a description of an effect
export const main = async (): Promise<void> => {
  try {
    const browser = await launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })
    const page = await browser.newPage()
    // TODO: pull this into environment variable
    await page.goto("http://localhost:3000/__make-pdf__", {
      waitUntil: "networkidle2",
    })
    await page.pdf({ path: "resume.pdf" })
    await browser.close()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
  process.exit(0)
}
