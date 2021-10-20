import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { defaultTheme } from "./defaultTheme";

type T = { theme: typeof defaultTheme };

export const OrgTheme = ({ children, theme = defaultTheme }) => (
  <ThemeProvider theme={theme}>
    <OrgThemeStyles>{children} </OrgThemeStyles>
  </ThemeProvider>
);

export const fontDeclarations = css`
  /* No italic for Fira Code */
  @font-face {
    font-family: "Fira Code";
    src: url("./fonts/FiraCode-Bold.otf") format("otf");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: url("./fonts/FiraCode-Bold.otf") format("otf");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: url("./fonts/FiraCode-Retina.otf") format("otf");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: url("./fonts/FiraCode-Light.otf") format("otf");
    font-weight: 300;
    font-style: normal;
  }
`;

export const fontMixin = css`
  div * {
    font-family: Fira Code;
  }
`;

export const Wrapper = styled.div`
  ${fontDeclarations};
  ${fontMixin};
  font-family:

background: ${({ theme }: T) => theme.bg};
  li,
  .org__paragraph {
color: ${({ theme }: T) => theme.color};
    margin-bottom: 1rem;
  }
  .org__list-item {
    margin-bottom: 0rem;
  }
font-family: ${(props: T) => props.theme.font};
  font-weight: 400;
  line-height: 1.25;
  li {
    list-style: none;
  }
  ol,
  ul {
    padding-left: 0;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  b,
  strong {
    font-weight: 700;
  }

  i,
  em {
    font-style: italic;
  }
  span.org__underline {
    text-decoration: underline;
  }
  span.org__strike-through {
    text-decoration: line-through;
  }

  & ::selection {
background: ${({ theme }: T) => theme.selection};
  }

  .org__meta {
    margin-bottom: 2.5rem;
  }
`;

export const Meta = styled.div`
  .org__meta-key {
    color: ${({ theme }: T) => theme.meta.key.color};
    background: ${({ theme }: T) => theme.meta.key.bg};
    display: inline-block;
  }
  .org__meta-value {
    color: ${({ theme }: T) => theme.meta.value.color};
    background: ${({ theme }: T) => theme.meta.value.bg};
    padding-left: 0.75rem;
  }

  &.org__meta-title {
    display: flex;
    line-height: 1.125;
    .org__meta-key {
      display: flex;
      align-items: flex-end;
      padding-bottom: 0.1875rem;
    }
    .org__meta-value {
      color: ${({ theme }: T) => theme.meta.title.color};
      font-size: ${({ theme }: T) => theme.meta.title.fontSize};
      font-weight: 600;
    }
  }
`;

export const StyledList = styled.div`
  margin-bottom: 1.25rem;
`;

export const StyledListItem = styled.li`
  position: relative;
  margin-left: 1.125rem;
  &::before {
    content: "${props => props.char}";
    position: absolute;
    left: -1.125rem;
  }
  &.org__list_item-char-n {
    margin-left: 1.8125rem;
    &::before {
      left: -1.8125rem;
    }
  }
`;

export const StyledLink = styled.a`
  &.org__link {
    color: ${({ theme }: T) => theme.link.color};
    background: ${({ theme }: T) => theme.link.bg};
    text-decoration-color: ${({ theme }) => theme.link.textDecoration};
    &:hover {
      color: ${({ theme }) => theme.linkHover.color};
      background: ${({ theme }) => theme.linkHover.bg};
      text-decoration-color: ${({ theme }) => theme.linkHover.textDecoration};
    }
  }
`;

export const Tree = styled.ul`
  padding-inline-start: 0;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  & > .org__section {
    margin-left: 0;
  }
`;

export const SourceBlockStyles = styled.div`
  .org__src-block {
    max-width: 600px;
  }
  .org__src-lang {
    color: ${({ theme }) => theme.src.lang.color};
    background: ${({ theme }) => theme.src.lang.bg};
  }
  .org__src-body {
    color: ${({ theme }) => theme.src.body.color};
    background: ${({ theme }) => theme.src.body.bg};
  }
`;

export const TableStyles = styled.div`
  table {
    background: ${({ theme }) => theme.table.bg};
    color: ${({ theme }) => theme.table.color};
    margin-bottom: 1.25rem;
  }

  td {
    padding: 0;
  }

  tr.org__table-separator-row {
    td:not(:first-child) {
      &::before {
        content: "-+-";
        margin-left: -0.625rem;
      }
    }

    td:first-child {
      &::before {
        content: "|-";
      }
    }
    td:last-child {
      &::after {
        content: "-|";
      }
    }
  }

  tr.org__table-row {
    td {
      &::before {
        content: "| ";
      }
      &::after {
        content: "M";
        display: inline-block;
        opacity: 0;
      }
    }
    td:last-child {
      &::after {
        content: " |";
        opacity: 1;
        display: unset;
      }
    }
  }
`;

export const OrgThemeStyles = styled.div`
  .org__section {
    margin-bottom: 1.25rem;
    margin-left: 1rem;
    &:first-of-type {
      margin-left: 0;
    }
  }

  .org__section > * {
    /* IMPORTANT: Indent sibling after headline */
    margin-left: 1.25rem;
  }
  .org__section > :first-child {
    margin-left: 0;
  }
  .org__headline {
    position: relative;
    margin-bottom: 1.25rem;
    p:first-of-type {
      margin-left: 1.25rem;
    }
    cursor: pointer;
  }
  .org__headline-open-icon {
    font-size: 85%;
    margin-top: 1px;
    display: inline-block;
    margin-left: 1rem;
  }

  [class^="org__bullet-"] {
    display: flex;
    flex-direction: row;
    line-height: 1.2;
    font-size: 1rem;
    font-weight: 500;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }

  .org__bullet-1 {
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.headline1.color};
    background: ${({ theme }) => theme.headline1.bg};
    border-top: ${({ theme }) => theme.headline1.border};
    font-weight: 600;
    &::before {
      content: "◉";
      position: absolute;
      margin-top: -0.1rem;
    }
    p:first-of-type {
      margin-left: 1.875rem;
    }
  }

  .org__bullet-2 {
    color: ${({ theme }) => theme.headline2.color};
    background: ${({ theme }) => theme.headline2.bg};
    border-top: ${({ theme }) => theme.headline2.border};
    &::before {
      content: "○";
      position: absolute;
      margin-top: -0.09375rem;
    }
  }

  .org__bullet-3 {
    color: ${({ theme }) => theme.headline3.color};
    background: ${({ theme }) => theme.headline3.bg};
    border-top: ${({ theme }) => theme.headline3.border};
    &::before {
      content: "✸";
      position: absolute;
      /* margin-top: -0.1rem; */
      /* transform: rotate(20deg); */
    }
  }

  .org__bullet-4 {
    color: ${({ theme }) => theme.headline4.color};
    background: ${({ theme }) => theme.headline4.bg};
    border-top: ${({ theme }) => theme.headline4.border};
    &::before {
      content: "✿";
      position: absolute;
      /* margin-top: -0.1rem; */
      /* transform: rotate(20deg); */
    }
  }

  .org__verbatim {
    text-decoration: underline;
    border: ${({ theme }) => theme.verbatim.border};
    background: ${({ theme }) => theme.verbatim.bg};
    color: ${({ theme }) => theme.verbatim.color};
    text-decoration-color: ${({ theme }) => theme.verbatim.textDecoration};
    &:hover {
      border: ${({ theme }) => theme.verbatimHover.border};
      background: ${({ theme }) => theme.verbatimHover.bg};
      color: ${({ theme }) => theme.verbatimHover.color};
      text-decoration-color: ${({ theme }) =>
        theme.verbatimHover.textDecoration};
    }
  }

  .org__code {
    color: ${({ theme }) => theme.code.color};
    background: ${({ theme }) => theme.code.bg};
  }
`;
