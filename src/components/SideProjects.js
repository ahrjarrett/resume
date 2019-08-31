import React from "react"
import Section from "components/Section"

const SideProjects = () => (
  <div>
    <Section heading="Projects" items={items} />
  </div>
)

const items = [
  {
    title: null,
    location: null,
    subtitle: "Typelaunch",
    time: "2019",
    bullets: [
      <p className="section-item-bullet">
        “<a
          href="https://typelaunch.com"
          className="external-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Simpler than Wix
    </a>” - MVP, team of 2 • <span className="hl">React Hooks / Express</span></p>
    ],
  },
  {
    title: null,
    location: null,
    subtitle: "Backwoods",
    time: "2019",
    bullets: [
      <p className="section-item-bullet">
        <a
          href="https://github.com/Lambda-School-Labs/LabsPT1_Backwoods"
          className="external-link"
          target="_blank"
          rel="noopener noreferrer"
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
    subtitle: "react-speak",
    time: "2018",
    bullets: [
      <p className="section-item-bullet">
        <a
          href="https://github.com/ahrjarrett/react-speak"
          className="external-link"
          target="_blank"
          rel="noopener noreferrer"
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
    subtitle: "polygon",
    time: "2017",
    bullets: [
      <p className="section-item-bullet">
        <a
          href="https://polygonpolygon.herokuapp.com"
          className="external-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Maps for Realtors
        </a>{" "}
        • <span className="hl">Google Maps / MongoDB</span>
      </p>
    ]
  }
]

export default SideProjects
