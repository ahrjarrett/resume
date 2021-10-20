import React, { FC, Component } from "react";
import { Tree } from "./Tree";
import { OrgList, OrgListItem, Src } from "./Org";
import { Common, Lookup ListItemNode, ListNode, Node, SourceNode } from "../types";
import { renderChildren } from "../utils";

export const List<ListNode> = props =>
  !props.open ? null : (
  <OrgList
    ordered={props.ordered}
    style={{
      marginLeft: props.parent.type === "list.item" ? "1rem" : "inherit",
    }}
  >
    {renderChildren(props)}
  </OrgList>
  );

  export const ListItem: FC<ListItemNode> = props =>
    !props.open ? null : (
    <OrgListItem char={props.parent.ordered ? props.nth : "-"}>
      {renderChildren(props)}
    </OrgListItem>
    );

    export const Source: FC<SourceNode> = props =>
      !props.open ? null : (
      <Src lang={props.params.join(" ")}> {renderChildren(props)} </Src>
      );

      export class Section extends Component {
        constructor(props) {
        super(props);
      this.state = {
        display: this.props.open,
    };
  }

  toggleSection = node => e => {
        this.setState({ display: !this.state.display });
  };

      render() {
    const {node, open} = this.props;
      return (
      <div className="org__section">
        {!open
          ? null
          : node.children.map((child, i) => (
            <Tree
              node={child}
              level={node.level}
              key={i}
              open={this.state.display}
              toggleSection={this.toggleSection}
            />
          ))}
      </div>
      );
  }
  }
