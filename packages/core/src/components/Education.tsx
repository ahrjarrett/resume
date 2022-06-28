import React from "react";
import { SectionContainer } from "./Containers";
const items = [
  {
    title: "Lambda School",
    subtitle: "Full-Stack Web & Computer Science",
    time: "2017-2019",
    location: null,
    bullets: [],
  },
  {
    title: "Northwestern University",
    subtitle: "English, Critical Theory",
    time: "2008-2012",
    location: null,
    bullets: [],
  },
];

const sectionTitle = "Education";

const Education = () => (
  <SectionContainer>
    <h2 className="section-header">{sectionTitle}</h2>
    {items.map((item, i) => (
      <div key={i} className="section-item">
        <div className="hr-left" />
        <div className="section-item-content">
          <h3 className="section-item-title">
            <span className="section-item-title-left">{item.title}</span>
            <span className="ellipses">
              <span className="ellipses-spacer" />
              . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              <span className="ellipses-spacer" />
            </span>
            <span className="hl-regular">{item.time}</span>
          </h3>
          <p className="section-item-subtitle">
            <span className="section-item-subtitle-left">{item.subtitle}</span>
          </p>
        </div>
      </div>
    ))}
  </SectionContainer>
);

export default Education;
