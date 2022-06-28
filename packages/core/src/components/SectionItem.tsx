import { string } from "fp-ts"
import React from "react"

export interface SubtitleProps {
  subtitle: string
  time: string
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle, time }) => (
  <p className="section-item-subtitle">
    <span className="section-item-subtitle-left">{subtitle}</span>
    <span className="ellipses">
      <span className="ellipses-spacer" />
      . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
      <span className="ellipses-spacer" />
    </span>
    <span className="hl-regular">{time}</span>
  </p>
)

export interface ItemProps {
  item: {
    title: string
    subtitle: string | string[]
    location: string
    time: string
    bullets: string[]
  }
}

export const Item: React.FC<ItemProps> = ({ item }) => {
  const initialSubtitles: string[] = []
  const subtitles = initialSubtitles.concat(item.subtitle)
  return (
    <div className="section-item">
      <div className="hr-left" />
      <div className="section-item-content">
        {item.title && item.location ? (
          <h3 className="section-item-title">
            <span className="section-item-title-left">{item.title}</span>
            <span className="ellipses">
              <span className="ellipses-spacer" />
              . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              <span className="ellipses-spacer" />
            </span>
            <span className="section-item-location">
              <img className="resume-icon" src="svg/location.svg" alt="" />
              {item.location}
            </span>
          </h3>
        ) : null}

        {subtitles.map((st, i) => (
          <SectionSubtitle key={i} subtitle={st} time={item.time[i]} />
        ))}

        {item.bullets.map((bullet, i) => ({ ...bullet, key: i }))}
      </div>
    </div>
  )
}
