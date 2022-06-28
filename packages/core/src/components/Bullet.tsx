import React, { FC, PropsWithChildren } from "react"

export const Bullet: FC<PropsWithChildren> = ({ children }) => (
  <p className="section-item-bullet">{children}</p>
)
