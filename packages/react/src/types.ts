import { ReactChildren, Dispatch, SetStateAction } from "react";
import type { Theme } from "./components/defaultTheme";
import { defaultTheme } from "./components/defaultTheme";

export type { Theme } from "./components/defaultTheme";

export type Lookup = {
  open: boolean;
  level: number;
  value: Array<unknown>;
  children: Array<Node>;
  theme: Theme;
  nth: number;
  cellLength: number;
  name: "SRC" | "QUOTE";
  meta: Record<string, unknown>;
  uri: { raw: string; protocol: string };
  desc: string;
  parent: {
    type: "list.item" | string;
  };
};

export type Common = Pick<Lookup, "open" | "level">;

export const Tag = {
  Root: "root",
  Text: "text",
  Code: "code",
  Verbatim: "verbatim",
  Link: "link",
  Paragraph: "paragraph",
  Italic: "italic",
  Bold: "bold",
  Underline: "underline",
  StrikeThrough: "strikeThrough",
  Headline: "headline",
  Section: "section",
  List: "list",
  ListItem: "list.item",
  Block: "block",
  Table: "table",
  TableRow: "table.row",
  TableSeparator: "table.separator",
  TableCell: "table.cell",
  SourceCode: "sourceCode",
} as const;
export type _Tag = typeof Tag[keyof typeof Tag];

export interface RootNode extends Common {
  tag: typeof Tag.Root;
  theme: typeof defaultTheme;
  children: ReactChildren;
  level: Lookup["level"];
  meta: Lookup["meta"];
}

export interface TextNode extends Common {
  tag: typeof Tag.Text;
}

export interface CodeNode extends Common {
  tag: typeof Tag.Code;
  children: ReactChildren;
}

export interface VerbatimNode extends Common {
  tag: typeof Tag.Verbatim;
  children: ReactChildren;
}

export interface LinkNode extends Common {
  tag: typeof Tag.Link;
  children: ReactChildren;
  meta: Lookup["meta"];
  uri: Lookup["uri"];
  desc: Lookup["desc"];
}

export interface ParagraphNode extends Common {
  tag: typeof Tag.Paragraph;
  children: ReactChildren;
}

export interface ItalicNode extends Common {
  tag: typeof Tag.Italic;
  children: ReactChildren;
}

export interface BoldNode extends Common {
  tag: typeof Tag.Bold;
}

export interface UnderlineNode extends Common {
  tag: typeof Tag.Underline;
}

export interface StrikeThroughNode extends Common {
  tag: typeof Tag.StrikeThrough;
}

export interface HeadlineNode extends Common {
  tag: typeof Tag.Headline;
  toggleSection: (state: boolean) => Dispatch<SetStateAction<boolean>>;
}

export interface SectionNode extends Common {
  tag: typeof Tag.Section;
}

export type ListNode = {
  tag: typeof Tag.List;
  nth: Lookup["nth"];
  ordered: boolean;
  parent: {
    type: "list.item" | string;
  };
};

export type ListItemNode = {
  tag: typeof Tag.ListItem;
  nth: Lookup["nth"];
  parent: Lookup["parent"];
  level: Lookup["level"];
  value: Lookup["value"];
};

export type BlockNode = {
  tag: typeof Tag.Block;
  name: "SRC" | "QUOTE";
  level: Lookup["level"];
  value: Lookup["value"];
};

export type TableNode = {
  tag: typeof Tag.Table;
  maxLengths: Array<number>;
  level: Lookup["level"];
  value: Lookup["value"];
};

export interface TableSeparatorNode extends Common {
  tag: typeof Tag.TableRow;
  children: ReactChildren;
  value: Lookup["value"];
  cellIndex: number;
}

export interface TableSeparatorNode extends Common {
  tag: typeof Tag.TableSeparator;
  value: Lookup["value"];
}

export type TableCellNode = {
  tag: typeof Tag.TableCell;
  level: Lookup["level"];
  value: Lookup["value"];
  open: Lookup["open"];
  maxLengths: Array<number>;
  cellIndex: number;
  children: ReactChildren;
  cellLength: number;
};

export type SourceNode = {
  tag: typeof Tag.SourceCode;
  open: Lookup["open"];
  params: Array<string>;
  value: string;
};

export type Node =
  | TextNode
  | RootNode
  | CodeNode
  | VerbatimNode
  | LinkNode
  | ParagraphNode
  | ItalicNode
  | BoldNode
  | UnderlineNode
  | StrikeThroughNode
  | HeadlineNode
  | SectionNode
  | ListNode
  | ListItemNode
  | BlockNode
  | TableNode
  | TableRowNode
  | TableSeparatorNode
  | TableCellNode
  | SourceNode;
