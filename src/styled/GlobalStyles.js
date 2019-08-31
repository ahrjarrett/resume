import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: Source Sans Pro, Trebuchet MS, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-variant-ligatures: common-ligatures;
    font-variant-ligatures: common-ligatures;
    -webkit-font-kerning: normal;
    font-kerning: normal;
    -webkit-font-feature-settings: "liga", "pnum", "kern";
    font-feature-settings: "liga", "pnum", "kern";
  }

  body {
    margin: 0;
  }

  article,
  aside,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  h1, h2, h3, h4, h5, h6,
    p, li, ul, span, a {
    color: ${props => props.theme.header};
  }

`
