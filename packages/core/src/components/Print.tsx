import React, { Component } from "react"
import { Maybe } from "@ahrjarrett/resume-typelevel"

import * as S from "./styled"
import { GlobalStyles } from "./styled/GlobalStyles"
import Web from "./components/Web"

type Props = {
  makePdf: Maybe<(...args: unknown[]) => void>
}

const { print } = window

const usePrint = () => {
  React.useEffect(() => {
    print
  }, [])
}

const makeWebClassName = (makePdf: Maybe<Props["makePdf"]>) =>
  makePdf
    ? ("print-container makePdfOverride" as const)
    : ("print-container" as const)

export const Print: React.FC<Props> = ({ makePdf }) => {
  usePrint()

  return (
    <S.Styled>
      <GlobalStyles />
      <Web classNames={makeWebClassName(makePdf)} hideSidebar={true} />
    </S.Styled>
  )
}
