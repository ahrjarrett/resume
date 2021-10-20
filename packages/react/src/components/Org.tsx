import React, { ReactChildren, FC } from "react";
import { defaultTheme } from "./defaultTheme";
import {
  OrgTheme,
  SourceBlockStyles,
  StyledList,
  StyledListItem,
  Tree,
  StyledLink,
  Wrapper,
} from "./Org.styles";

type OutlineProps = { children: ReactChildren; theme: typeof defaultTheme };
export const Outline: FC<OutlineProps> = props => (
  <OrgTheme theme={props.theme}>
    <Wrapper className="Wrapper">
      <Tree className="Tree"> {props.children} </Tree>
    </Wrapper>
  </OrgTheme>
);

export type SrcProps = { children: Array<Node>; lang: string };
export const Src: FC<SrcProps> = props => (
  <SourceBlockStyles>
    <div className="org__src-block">
      {props.lang && (
        <p className="org__src-lang">
          <span>{props.lang} </span>
        </p>
      )}
      <p className="org__src-body">{props.children} </p>
    </div>
  </SourceBlockStyles>
);

type OrgLinkProps = {
  children: ReactChildren;
  to: string;
  newTab: boolean;
};
export const OrgLink: FC<OrgLinkProps> = props => (
  <>
    {props.newTab && (
      <StyledLink
        className="org__link org__link-external"
        href={props.to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </StyledLink>
    )}
    {!props.newTab && (
      <StyledLink className="org__link org__link-internal" href={props.to}>
        {props.children}
      </StyledLink>
    )}
  </>
);

type OrgListProps = { children: ReactChildren; ordered: boolean };
export const OrgList: FC<OrgListProps> = props => (
  <StyledList className="org__list">
    {props.ordered ? (
      <ol className="org__list-ordered"> {props.children} </ol>
    ) : (
      <ul className="org__list-unordered">{props.children}</ul>
    )}
  </StyledList>
);

type OrgListItem = { children: ReactChildren; char: string };
export const OrgListItem: FC<OrgListItem> = props => (
  <StyledListItem
    char={typeof props.char === "number" ? `${props.char}. ` : `${props.char} `}
    className={`org__list-item org__list_item-char-${
      props.char === "-" ? "-" : "n"
    }`}
  >
    {props.children}
  </StyledListItem>
);
