import { main } from "./make-pdf"

const logSuccessfulRun = () =>
  console.log("Successfully ran docgen script: main")

main().then(logSuccessfulRun)
