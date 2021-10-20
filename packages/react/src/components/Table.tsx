import React, { Component, useEffect, useState, FC } from "react";
import { Tree } from "./Tree";
import { TableStyles } from "./Org.styles";
import { Node, TableCellNode, TableRowNode, TableNode } from "../types";
import { renderChildren } from "../utils";

type Inhabitants = string;

// const getCellLength = (node: TableCellNode) => {
//   let len = 0;
//   const recurse = ({ children, tag, value }: TableCellNode) => {
//     if (tag === Tag.Text) len = len + value.length;
//     children.forEach(recurse);
//   };

//   recurse(node);
//   return len;
// };

// type Props = {
//   node: Node;
//   open: boolean;
//   maxLengths: Array<number>;
// };

const Table: FC<TableNode> = props => {
  const { open, maxLengths, children } = props;
  const separators = maxLengths.map(len => "-".repeat(len));
  const separatorIndices = Array.isArray(children)
    ? children.reduce(
        (acc, { type }, i) =>
          type === "table.separator" ? acc.concat(i) : acc,
        [] as Array<number>,
      )
    : void 0;

  // constructor(props) {
  //   super(props);

  //   const tableAst = this.props.node;
  //   const rows = children.filter(row => row.type === "table.row");

  //   this.separatorIndexes = children.reduce(
  //     (acc, curr, i) => (curr.type === "table.separator" ? acc.concat(i) : acc),
  //     []
  //   );

  //   this.maxLengths = rows.reduce((acc, curr) => {
  //     const cellLengths = curr.children.map(getCellLength);
  //     cellLengths.forEach((length, i) => {
  //       acc[i] = length > acc[i] ? length : acc[i];
  //     });
  //     return acc;
  //   }, new Array(rows[0].children.length).fill(0));
  // }

  return !open ? null : (
    <TableStyles className="org__table">
      <table>
        <tbody>
          {Array.isArray(props.children)
            ? props.children.map((child, i) => (
                <Tree
                  node={{ ...props, ...child }}
                  key={i}
                  nth={"nth" in props ? props.nth : i + 1}
                />
              ))
            : null}
        </tbody>
      </table>
    </TableStyles>
  );
};

// {props.children.map((child, i) => {
//   if (separatorIndices.includes(i)) {
//     return (
//       <tr className="org__table-separator-row" key={i}>
//         {separators.map((separator, index) => (
//           <td className="org__table-separator-cell" key={index}>
//             {separator}
//           </td>
//         ))}
//       </tr>
//     );
//   }
//   return (
//     <Tree
//       node={child}
//       level={node.level}
//       key={i}
//       tableRowIndex={i}
//       maxLengths={maxLengths}
//     />
//   );
// })}

const getNodeType = (node: Node): Node["type"] => {
  switch (node.type) {
    case "text":
    case "root":
    case "code":
    case "verbatim":
    case "link":
    case "paragraph":
    case "italic":
    case "bold":
    case "strikeThrough":
    case "headline":
  }
};

const Cell: React.FC<TableCellNode> = props => {
  const [whiteSpace, setWhiteSpace] = useState("");

  const cell = React.createRef();
  const textLength = 0;
  const padding = 0;

  // const { node } = props;
  const children = renderChildren(props);

  useEffect(() => {
    const { cellLength } = props;
    const innerText = cell.current.innerText;
  }, []);

  setWhiteSpace(`M`.repeat(padding));

  return (
    <td className="org__table-cell" ref={children}>
      {children}
      <span className="org__table-whitespace" style={{ opacity: 0 }}>
        {whiteSpace}
      </span>
    </td>
  );
};

// class Cell_Klass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       whiteSpace: "",
//     };
//     this.cell = React.createRef();
//     this.textLength = 0;
//     this.padding = 0;
//   }

//   componentDidMount() {
//     // window.cell = this.cell;

//     const { cellLength } = this.props;
//     const innerText = this.cell.current.innerText;

//     this.textLength = innerText ? innerText.length : 0;
//     this.padding = cellLength - this.textLength;
//     this.setState({ whiteSpace: `M`.repeat(this.padding) });
//   }

//   render() {
//     return null;
//   }
// }

const TableRow: FC<TableRowNode> = props => (
  <tr className="org__table-row">{renderChildren(props)}</tr>
);

export { Table, TableRow, Cell };
