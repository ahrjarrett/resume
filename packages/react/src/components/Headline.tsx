import React, { FC } from "react";
import { Tree } from "./Tree";
import { HeadlineNode } from "../types";

export const Headline: FC<HeadlineNode> = ({
  level,
  open,
  toggleSection,
  children,
}) => (
  <div id={`org__headline-wrapper`} onClick={toggleSection(!open)}>
    {Array.isArray(children) ? (
      children.map((child, i) => (
        <Tree {...child} node={child} level={level} key={i} />
      ))
    ) : (
      <>{children}</>
    )}
  </div>
);
