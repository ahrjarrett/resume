import styled from 'styled-components'

export const PaperStyles = styled.div`
  .job-title {
    margin-top: 0.6em;
    margin-bottom: 0.1em;
    font-size: 1.3em;
    color: ${props => props.theme.primary};
  }

  .resume--right-column {
    display: flex;
    flex-direction: column;
    flex-basis: 0em;
    flex-grow: 1.25;
    /* TEMPORARY: add more spacing btwn items in right column */
    .section-item {
      margin-bottom: 1.45em;
    }
  }

  .hr {
    margin-right: 2em;
    margin-left: 2em;
    margin-bottom: 0.8em;
    padding-bottom: 0.8em;
    border-bottom-style: solid;
    border-color: ${props => props.theme.primaryLite};
    border-width: 0.06em;
  }

  .section-item-title {
    display: flex;
    flex-direction: row;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1em;
    font-weight: normal;
  }

  .hl-regular {
    color: ${props => props.theme.primary};
  }

  .section-item-location {
    margin-left: -0.4em;
    font-style: italic;
  }

  .hr-left {
    border-color: ${props => props.theme.primaryLite};
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    margin-left: 0.7em;
    padding-left: 0.8em;
    border-left-style: solid;
    border-width: 0.06em;
  }
  .hr-bottom {
    color: ${props => props.theme.primaryLite};
    margin-right: 2em;
    margin-left: 2em;
    margin-top: 0.8em;
    margin-bottom: 0.8em;
    padding-bottom: 0.2em;
    border-bottom: solid;
    border-width: 0.06em;
  }

  .external-link {
    color: ${props => props.theme.text};
    text-decoration-skip: ink;
  }

  .Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.3em;
  }

  .skill {
    border-color: ${props => props.theme.primaryLite};
    color: ${props => props.theme.primary};
    border-style: solid;
    white-space: nowrap;
    margin-right: 0.25em;
    border-width: 0.06em;
    border-radius: 0.3em;
    padding-top: 0;
    padding-bottom: 0.1em;
    padding-right: 0.4em;
    padding-left: 0.4em;
  }

  .ellipses {
    overflow: hidden;
    opacity: 0.18000000000000005;
    display: flex;
    flex-direction: row;
    flex-basis: 0em;
    flex-grow: 1;
    height: 1.5999999999999999em;
    word-break: break-all;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${props => props.theme.black};
  }

  .section-item-subtitle-left {
    font-weight: bold;
    color: ${props => props.theme.header};
  }

  .section-item-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .web-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding-top: 1.8em;
    padding-bottom: 1.8em;
    min-height: 100vh;
    //background-color: ${props => props.theme.offWhite};
    //background-color: rgb(255, 255, 223);
    //background-color: #e2e0d4;
    //rgb(216, 222, 233);
background-color: white;
  }

  @media not all and (max-width: 77rem) {
    .web-container {
      padding-top: 4em;
      padding-bottom: 4em;
    }
  }

  @media all and (min-width: 45rem) and (max-width: 77rem) {
    .web-container {
      padding-top: 2.5em;
      padding-bottom: 2.5em;
    }
  }

  @media not all and (max-width: 77rem) {
    .web-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
  }

  .section-header {
    margin-top: 0;
    margin-bottom: 0.05em;
    font-size: 1.9em;
    font-weight: bold;
  }

  .svg-home {
    background-image: url(/svg/home.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-origin: content-box;
    display: inline-block;
    width: 24px;
    height: 24px;
    opacity: 0.9333333333333333;
    margin-left: -24px;
  }

  @media all and (min-width: 45rem) {
    .svg-home {
      margin-left: 0;
    }
  }

  .header-left {
    display: flex;
    flex-direction: column;
  }

  .action-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 1.5em;
    margin-bottom: 0.8em;
  }

  @media not all and (max-width: 77rem) {
    .action-button {
      margin-bottom: 1.2em;
    }
  }

  @media all and (min-width: 45rem) and (max-width: 77rem) {
    .action-button {
      margin-bottom: 1.9em;
    }
  }

  @media not all and (max-width: 77rem) {
    .action-button {
      margin-left: 0;
    }
  }

  @media not all and (max-width: 77rem) {
    .action-button {
      display: flex;
      flex-direction: row;
    }
  }

  @media all and (min-width: 45rem) and (max-width: 77rem) {
    .action-button {
      display: flex;
      flex-direction: column;
    }
  }

  .section-item-bullet {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0.8em;
  }

  .section-item-title ~ .section-item-bullet {
    margin-left: 1.6em;
  }

  .section-item-bullet::before {
    content: '-';
    position: absolute;
    margin-top: 0;
    margin-left: -0.8em;
    color: ${props => props.theme.primary};
  }

  .ellipses-spacer {
    flex-basis: 0.6em;
    flex-shrink: 0.2;
  }

  .section-item-title-left,
  .italics {
    font-style: italic;
  }

  .svg-print {
    background-image: url(/svg/print.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-origin: content-box;
    display: inline-block;
    width: 24px;
    height: 24px;
    opacity: 0.9333333333333333;
  }

  @media all and (min-width: 45rem) {
    .svg-pring {
      margin-left: 0;
    }
  }

  .section-footer {
    margin-top: 0;
    margin-bottom: 0.6em;
    margin-left: 0.8em;
    font-style: italic;
  }

  .svg-save {
    background-image: url(/svg/save.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-origin: content-box;
    display: inline-block;
    width: 24px;
    height: 24px;
    opacity: 0.9333333333333333;
    margin-left: -24px;
  }

  @media all and (min-width: 45rem) {
    .svg-save {
      margin-left: 0;
    }
  }

  .full-name {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1;
    font-size: 3.6em;
    font-weight: bold;
  }

  .footer-cta {
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    font-style: italic;
  }

  .nav-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0.3em;
    text-align: right;
    line-height: 1.9;
  }

  .paper-wrapper {
    overflow: hidden;
  }

  .resume-icon {
    width: 0.9em;
    height: 0.9em;
    margin-right: 0.3em;
    margin-left: 0.3em;
    margin-bottom: -0.1em;
  }

  .column-left {
    display: flex;
    flex-direction: column;
    flex-basis: 0em;
    flex-grow: 1;
    margin-right: 1.8em;
  }

  .Footer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 0.2em;
    flex-grow: 1;
  }

  .section-footer-link {
    color: ${props => props.theme.black};
   background: rgba(255, 255, 223, 0.5);
    text-decoration-skip: ink;
    font-style: normal;
  }

  .hl {
    font-weight: bold;
    color: ${props => props.theme.primary};
  }

  /* WEB & PRINT */
  .paper-wrapper {
    background-color: #ffffff;
    font-size: 1.6666666666666667vw;
  }

  /* WEB ONLY */
  .Web .paper-wrapper {
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 14px 0 #313131;
    width: 51em;
    animation: fadeIn 200ms ease-in;
  }

  @media not all and (max-width: 77rem) {
    .paper-wrapper {
      font-size: 1em;
    }
  }

  /* WEB ONLY */
  @media not all and (max-width: 77rem) {
    .Web .paper-wrapper {
      margin-right: 1em;
    }
  }

  .paper {
    display: flex;
    flex-direction: column;
    padding-top: 3.2em;
    padding-bottom: 3.2em;
    padding-right: 4.1em;
    padding-left: 4.1em;
    flex-grow: 1;
    line-height: 1.7;
    color: ${props => props.theme.black};
  }

  .action-button-link {
    border-style: solid;
    border-color: rgb(17, 17, 17);
    border-width: 2px;
    border-radius: 14px;
    box-shadow: 5px 5px 0 -1px #e2e1d5;
    padding-right: 0.8em;
    padding-left: 0.8em;
    line-height: 2.1;
    color: rgb(17, 17, 17);
    text-decoration: none;
    margin-right: 0.7em;
    margin-left: 0.7em;
    background-color: #ffffff;
  }

  @media not all and (max-width: 77rem) {
    .action-button-link {
      margin-top: 0;
      margin-right: 0;
      margin-left: 0.7em;
    }
  }

  @media all and (min-width: 45rem) and (max-width: 77rem) {
    .action-button-link {
      margin-top: 0.6em;
      margin-right: 0;
      margin-left: 0;
    }
  }

  @media all and (min-width: 45rem) {
    .action-button-link {
      padding-right: 1.1em;
      padding-left: 1.1em;
      line-height: 2.4;
    }
  }

  .section-item {
    display: flex;
    flex-direction: row;
    margin-top: 0;
    margin-bottom: 0.9em;
  }

  .header-cta {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.3em;
    font-style: italic;
  }

  .section-item-subtitle {
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
  }

  /* Only add left margin if subtitle is
   * general sibling of title */
  .section-item-title ~ .section-item-subtitle {
    margin-left: 0.8em;
  }

  .Web {
    display: flex;
    flex-direction: column;
    will-change: transform;
  }

  .Main {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 125%;
    margin-left: -1.5em;
    margin-bottom: 0.5em;
    animation: fromTop 500ms ease-out;
  }

  @media not all and (max-width: 77rem) {
    .action-buttons {
      animation: fromLeft 500ms ease-out;
    }
  }

  @media not all and (max-width: 77rem) {
    .action-buttons {
      margin-top: 1.8em;
      margin-right: 2.2em;
      margin-left: 0;
    }
  }

  @media all and (min-width: 45rem) {
    .action-buttons {
      margin-bottom: 0;
    }
  }

  @media not all and (max-width: 77rem) {
    .action-buttons {
      font-size: 145%;
    }
  }

  @media not all and (max-width: 77rem) {
    .action-buttons {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
    }
  }

  @media all and (min-width: 45rem) and (max-width: 77rem) {
    .action-buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }

  .skills-wrapper {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 0.2em;
    line-height: 2.1;
    color: ${props => props.theme.primary};
  }

  p.skills-wrapper {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.37em;
  }

  p.skills-wrapper span {
    margin-right: 0.45em;
    margin-top: 0.325em;
    margin-bottom: 0.325em;
    height: 1.3em;
  }
`
