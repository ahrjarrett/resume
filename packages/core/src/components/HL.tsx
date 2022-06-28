import React, { FC, PropsWithChildren } from "react"

export const HL: FC<PropsWithChildren> = ({ children }) => (
  <span className="hl">{children}</span>
)
