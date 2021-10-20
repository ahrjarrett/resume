import { Tree } from "./components/Tree";
import { Node } from "./types";

export const renderChildren = (node: Node) =>
  "children" in node ? (
    Array.isArray(node.children) ? (
      node.children.map((child, i) => (
        <Tree node={{ ...node, ...child }} key={i} nth={i + 1} />
      ))
    ) : (
      <>{node.children} </>
    )
  ) : null;
