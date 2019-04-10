import React from "react"
import Section from "./Section"

const WorkExperience = () => (
  <div className="resume--right-column">
    <Section heading="Work history" items={items} />
  </div>
)

export default WorkExperience

const items = [
  {
    title: "OwnLocal",
    subtitle: ["Production Supervisor", "Production Team Lead"],
    time: ["2016-2017", "2017-Present"],
    location: "Austin, TX",
    bullets: [
      <p className="section-item-bullet">
        Create internal & external reports using <span className="hl">SQL</span>
      </p>,
      <p className="section-item-bullet">
        QA <span className="hl">React/Redux</span> apps & investigate bugs
      </p>,
      <p className="section-item-bullet">
        Troubleshoot internal <span className="hl">Rails</span> app
      </p>,
      <p className="section-item-bullet">
        Manage a team of 75 remote contractors
      </p>,
      <p className="section-item-bullet">
        Create tools to increase employee productivity
      </p>
    ]
  },
  {
    title: "FollowClosely",
    subtitle: "Frontend Developer",
    time: "2015-2016",
    location: "Austin, TX",
    bullets: [
      <p className="section-item-bullet">
        Create FollowClosely website using{" "}
        <span className="hl">Angular.js</span>
      </p>,
      <p className="section-item-bullet">
        Iterate on <span className="hl">Node & Express.js</span> prototype
      </p>,
      <p className="section-item-bullet">
        Write custom <span className="hl">Ghost</span> templates for customers
      </p>,
      <p className="section-item-bullet">
        Design marketing collateral using{" "}
        <span className="hl">Illustrator</span>
      </p>,
      <p className="section-item-bullet">
        Implement B2C email retargeting campaigns
      </p>
    ]
  },
  {
    title: "OutboundEngine",
    subtitle: "Sr. Sales Executive",
    time: "2014-2015",
    location: "Austin, TX",
    bullets: [
      <p className="section-item-bullet">
        Manage social media profiles for 100+ clients
      </p>,
      <p className="section-item-bullet">Top 5% of sales floor Q1 & Q2 2015</p>,
      <p className="section-item-bullet">
        Brought in over $1,000,000 in new business
      </p>
    ]
  }
  // {
  //   title: 'Signpost',
  //   subtitle: 'Sales Manager',
  //   time: '2012-2014',
  //   location: 'Austin, TX',
  //   bullets: [
  //     <p className='section-item-bullet'>#1 manager company-wide Q3 & Q4 2014</p>,
  //   ]
  // },
]
