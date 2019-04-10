import React, { Component } from "react"
import { GlobalStyles } from "./styles/Global.styles"
import { PaperStyles } from "./styles/Paper.styles"
import Web from "./Web"

export default class Print extends Component {
  constructor(props) {
    super(props)
    this.makePdf = props.makePdf
  }

  componentDidMount() {
    if (this.makePdf) this.print()
  }

  print() {
    window.print()
  }

  render() {
    return (
      <PaperStyles>
        <GlobalStyles />
        <Web
          classNames={
            this.makePdf ? "print-container makePdfOverride" : "print-container"
          }
          hideSidebar={true}
        />
      </PaperStyles>
    )
  }
}
