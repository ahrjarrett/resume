import { css } from "styled-components"

export const printStyles = css`
  @media only print {
    @page {
      size: letter;
      margin: 0;
    }
  }

  @media only print {
    .print-container {
      display: flex;
      flex-direction: column;
    }
  }

  .print-container {
    display: none;
    min-height: 100vh;
  }

  .print-container .web-container {
    padding: 0;
  }

  .print-container .paper-wrapper {
    width: 100%;
  }

  .makePdfOverride {
    display: flex !important;
  }
`
