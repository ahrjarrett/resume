import React, { FC } from "react";
import { Tree } from "./Tree";
import { OrgLink } from "./Org";
import {
  CodeNode,
  ItalicNode,
  LinkNode,
  BoldNode,
  ParagraphNode,
  TextNode,
  VerbatimNode,
  Node,
  UnderlineNode,
  StrikeThroughNode,
} from "../types";
import { renderChildren } from "../utils";

export const Code: FC<CodeNode> = props =>
  !props.open ? null : (
    <span className="org__code">{renderChildren(props)}</span>
  );

export const Text: FC<TextNode> = props =>
  !props.open ? null : <span className="org__text"> {props.value} </span>;

export const Verbatim: FC<VerbatimNode> = props =>
  !props.open ? null : (
    <span className="org__verbatim">{renderChildren(props)}</span>
  );

export const Link: FC<LinkNode> = props =>
  !props.open ? null : (
    <OrgLink
      to={props.uri.raw}
      newTab={props.uri.protocol === "file" ? false : true}
    >
      {props.desc}
    </OrgLink>
  );

export const Paragraph: FC<ParagraphNode> = props =>
  !props.open ? null : (
    <p className="org__paragraph">{renderChildren(props)}</p>
  );

export const Italic: FC<ItalicNode> = props =>
  !props.open ? null : <i className="org__italic">{renderChildren(props)}</i>;

export const Bold: FC<BoldNode> = props =>
  !props.open ? null : <b className="org__bold">{renderChildren(props)}</b>;

export const Underline: FC<UnderlineNode> = props =>
  !props.open ? null : (
    <span className="org__underline">{renderChildren(props)}</span>
  );

export const StrikeThrough: FC<StrikeThroughNode> = props =>
  !props.open ? null : (
    <b className="org__strike-through">{renderChildren(props)}</b>
  );
