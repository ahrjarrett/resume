import styled, { css } from "styled-components"

import { fontStyles } from "./Font"
import { animationStyles } from "./Animation"
import { printStyles } from "./Print"
import { PaperStyles } from "./Paper"

const index =  css`
  ${fontStyles}
  ${animationStyles}
  ${printStyles}
`

export const Styled = styled(PaperStyles)`
  overflow: hidden;
  ${index}
`


