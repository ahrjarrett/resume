import React, { Component, FC, useState, useEffect, useContext, createContext } from "react";
import { parse, Document } from "orga";
import { Tree } from "./Tree";
import { Theme } from "./defaultTheme";
import { Node, Lookup } from "../types";
import { defaultTheme, Theme } from "./defaultTheme"

type Props = {
  theme: Theme;
  orgfile: string;
};

const Context = createContext<Theme>(defaultTheme)

const AST_: FC<Props> = props => {
  const [state, setState] = useState<Document | null>(null);
  const { theme } = props;

  useEffect(() => {
    setState(parse(props.orgfile));
  }, []);

  return (
    <div className="AST">
      {state && state.children && state.children.length > 0 ? (
        <DOM node={state as unknown as Node} theme={theme} />
      ) : null}
    </div>
  )
};

class AST extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      ast: null,
    };
  }
  async componentDidMount() {
    const ast = await parse(this.props.orgfile);
    this.setState({ ast });
  }

  render() {
    const { ast } = this.state;
    const { theme } = this.props;
    return (
    );
  }
}

const DOM: FC<& { theme: Theme }> = ({ node, theme }) => {
  return <Tree node={node} theme={theme} />;
};

export default AST;
