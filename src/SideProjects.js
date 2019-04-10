import React from "react"
import Section from "./Section"

const SideProjects = () => (
  <div>
    <Section heading="Projects" items={items} />
  </div>
)

const items = [
  {
    title: null,
    location: null,
    subtitle: "Elevate",
    time: "2019",
    bullets: [
      <p className="section-item-bullet">
        <a
          href="https://github.com/Lambda-School-Labs/LabsPT1_Backwoods"
          className="external-link"
        >
          Elevating the maps experience for active users
        </a>{" "}
        • <span className="hl">D3 / Google Maps</span>
      </p>
    ]
  },
  {
    title: null,
    location: null,
    subtitle: "React Speak",
    time: "2018",
    bullets: [
      <p className="section-item-bullet">
        <a
          href="https://github.com/ahrjarrett/react-speak"
          className="external-link"
        >
          An HOC for Talking to Your Browser
        </a>{" "}
        • <span className="hl">React / Redux</span>
      </p>
    ]
  },
  {
    title: null,
    location: null,
    subtitle: "Polygon",
    time: "2017",
    bullets: [
      <p className="section-item-bullet">
        <a
          href="https://github.com/ahrjarrett/polygon"
          className="external-link"
        >
          Google Maps for Realtors
        </a>{" "}
        • <span className="hl">Google Maps / MongoDB</span>
      </p>
    ]
  }
]

export default SideProjects
