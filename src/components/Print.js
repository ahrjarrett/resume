import React, { Component } from "react"
import { GlobalStyles } from "styled/GlobalStyles"
import * as S from "styled"
import Web from "components/Web"

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
      <S.Styled>
        <GlobalStyles />
        <Web
          classNames={
            this.makePdf ? "print-container makePdfOverride" : "print-container"
          }
          hideSidebar={true}
        />
      </S.Styled>
    )
  }
}
