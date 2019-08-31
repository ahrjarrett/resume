import React from "react"

const SectionSubtitle = ({ subtitle, time }) => (
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

const SectionItem = ({ item }) => {
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

        {Array.isArray(item.subtitle) ? (
          item.subtitle.map((st, i) => (
            <SectionSubtitle key={i} subtitle={st} time={item.time[i]} />
          ))
        ) : (
          <SectionSubtitle subtitle={item.subtitle} time={item.time} />
        )}

        {item.bullets.map((bullet, i) => ({ ...bullet, key: i }))}
      </div>
    </div>
  )
}

export default SectionItem
