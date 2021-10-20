import React, { FC } from "react";
import { Cell, Table, TableRow } from "./Table";
import { Headline } from "./Headline";
import { Root } from "./Root";
import { Section, List, ListItem, Source } from "./Section";
import {
  Text,
  Code,
  Verbatim,
  Link,
  Paragraph,
  Italic,
  Bold,
  Underline,
  StrikeThrough,
} from "./Text";
import { Tag, Node } from "../types";
import { useContext as useTheme } from "../context";

const defaultProps: {
  level: Node["level"]
  open: Node["open"]
}
level: 0,
  open: true,
};

export const Tree: FC<{ node: Node; nth: number }> = ({ node, nth }) => {
  // const level = props.node.level ?? 0;
  // const open = props.node.theme ?? true;
  const theme = useTheme();

  switch (node.tag) {
    case Tag.Root:
      return <Root {...defaultProps} {...node} />;

    case Tag.Text:
      return <Text {...defaultProps} {...node} />;

    case Tag.Code:
      return <Code {...defaultProps} {...node} />;

    case Tag.Verbatim:
      return <Verbatim {...defaultProps} {...node} />;

    case Tag.Link:
      return <Link {...defaultProps} {...node} />;

    case Tag.Paragraph:
      return <Paragraph {...defaultProps} {...node} />;

    case Tag.Italic:
      return <Italic {...defaultProps} {...node} />;

    case Tag.Bold:
      return <Bold {...defaultProps} {...node} />;

    case Tag.Underline:
      return <Underline {...defaultProps} {...node} />;

    case Tag.StrikeThrough:
      return <StrikeThrough {...defaultProps} {...node} />;

    case Tag.Headline:
      return <Headline {...defaultProps} {...node} />;

    case Tag.Section:
      return <Section {...defaultProps} {...node} />;

    case Tag.List:
      return <List {...defaultProps} {...node} />;

    case Tag.ListItem:
      return <ListItem {...defaultProps} {...node} nth={nth} />;

    case Tag.Block:
      switch (node.name) {
        case "SRC":
          return <Source {...defaultProps} {...node} />;
        case "QUOTE":
          return <Source {...defaultProps} {...node} />;
      }

    case Tag.Table:
      return <Table {...defaultProps} {...node} />;

    case Tag.TableRow:
      return <TableRow {...defaultProps} {...node} />;

    case Tag.TableSeparator:
      return null;

    case Tag.TableCell:
      const cellLength = node.maxLengths[node.cellIndex];
      return <Cell {...defaultProps} {...node} cellLength={cellLength} />;
    default:
      return null;
  }
};
