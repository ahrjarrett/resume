import React from "react";
import { Meta } from "./Org.styles";
import { Outline } from "./Org";
import { Tree } from "./Tree";
import { Node } from "../types";
import { defaultTheme } from "./defaultTheme";

export const Root: React.FC<Props> = ({ node, theme, level, children }) => {
  const keys = Object.keys(node.meta);
  return (
    <Outline theme={theme} className="org__root">
      {keys.length > 0 && (
        <div className="org__meta">
          {keys.map((key, i) => (
            <Meta className={`org__meta-${key}`} key={i}>
              <span className="org__meta-key"># + {key.toUpperCase()}:</span>
              <span className="org__meta-value"> {node.meta[key]} </span>
            </Meta>
          ))}
        </div>
      )}
      {node.children.map((child, i) => (
        <Tree node={child} level={level} key={i} children={children} />
      ))}
    </Outline>
  );
};
