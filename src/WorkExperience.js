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
    subtitle: ["Production Team Lead", "Production Supervisor"],
    time: ["2017-Present", "2016-2017"],
    location: "Austin, TX",
    bullets: [
      <p className="section-item-bullet">
        Personally <span className="hl">built a SaaS MVP</span> for enterprise
        customer, ran the first ever live demo
      </p>,
      <p className="section-item-bullet">
        Maintain & debug flagship <span className="hl">React/Rails</span> app
      </p>,
      <p className="section-item-bullet">
        Build reports, data-visualizations with <span className="hl">SQL</span>
      </p>,
      <p className="section-item-bullet">
        Deploy updates & hotfixes to <span className="hl">iOS Django</span> app
      </p>,
      <p className="section-item-bullet">
        Monitor and manage <span className="hl">AWS</span> configurations
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
        Iterate on <span className="hl">Node & Express.js</span> prototypes
      </p>,
      <p className="section-item-bullet">
        Develop custom <span className="hl">Ghost</span> templates for clients
      </p>,
      <p className="section-item-bullet">
        Design marketing collateral in <span className="hl">Illustrator</span>
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
