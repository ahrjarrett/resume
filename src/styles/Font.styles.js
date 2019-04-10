import { css } from "styled-components"

export const fontStyles = css`
  @font-face {
    font-family: "Source Sans Pro";
    src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),
      url("/fonts/SourceSansPro-Bold.woff2") format("woff2");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: local("Source Sans Pro Italic"), local("SourceSansPro-Italic"),
      url("/fonts/SourceSansPro-Italic.woff2") format("woff2");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),
      url("/fonts/SourceSansPro-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`
