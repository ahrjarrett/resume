import React from "react"

const HL = ({ children }) => <span className="hl">{children}</span>
const Bullet = ({ children }) => (
  <p className="section-item-bullet">{children}</p>
)

export const workExperienceData = [
  {
    title: "Kazoo",
    subtitle: "Software Engineer II",
    time: "May 2020 - Feb 2021",
    location: "Austin, TX (Remote)",
    bullets: [
      <Bullet>
        <HL>
          Build & maintain data visualizations across all product dashboards
        </HL>
      </Bullet>,
      <Bullet>
        Aggregate data from various PostgreSQL & MongoDB databases using Scala
        Databricks notebooks & GCP BigQuery warehouses
      </Bullet>,
      <Bullet>Manage team of contractors to delegate & review work</Bullet>,
      <Bullet>
        Work closely with Architecture team to expose new measures via GraphQL;
        deployed `fp-ts` library into production in an effort to improve type
        safety
      </Bullet>
    ]
  },
  {
    title: "LOU Assistant",
    subtitle: "Software Engineer",
    time: "Oct 2019 - Mar 2020",
    location: "Austin, TX",
    bullets: [
      <Bullet>
        <HL>Integrate Stripe</HL> into our product, write FE & BE tests that
        make sure it stays there
      </Bullet>,

      <Bullet>
        Authored LOUtils, a <HL>tiny utility library </HL>that DRY-ed out our
        frontend code without destroying it
      </Bullet>,

      <Bullet>
        Create webpack build for in-house Chrome Extension,{" "}
        <HL>extend Redux DevTools</HL> to talk to it
      </Bullet>
    ]
  },

  {
    title: "OwnLocal",
    subtitle: ["Software Engineer", "Production Team Lead"],
    time: ["Apr '18 - Sept '19", "Aug '16 - Apr '18"],
    location: "Austin, TX (Remote)",
    bullets: [
      <Bullet>
        <HL>Frontend Architect</HL> for Typelaunch MVP
      </Bullet>,
      <Bullet>
        Monitor & maintain flagship <HL>React/Rails</HL> app
      </Bullet>,
      <Bullet>
        Configure Kubernetes to scale network of 100+ <HL>GCP apps</HL> to
        handle product launch
      </Bullet>,
      <Bullet>
        Write <HL>PostgreSQL</HL> queries & thin <HL>D3 client</HL> that enabled
        sales to track their KPIs in real time
      </Bullet>
    ]
  }
  // {
  //   title: "FollowClosely",
  //   subtitle: "Frontend Developer",
  //   time: "2015-2016",
  //   location: "Austin, TX",
  //   bullets: [
  //     <Bullet>Design FollowClosely website</Bullet>,
  //     <Bullet>
  //       <HL>Build client portal</HL> & analytics dashboard
  //     </Bullet>,
  //     <Bullet>
  //       Build website generator in <HL>Node & Express</HL> to streamline new
  //       customer launches
  //     </Bullet>
  //   ]
  // }
]

// {
//   title: 'Signpost',
//   subtitle: 'Sales Manager',
//   time: '2012-2014',
//   location: 'Austin, TX',
//   bullets: [
//     <Bullet>#1 manager company-wide Q3 & Q4 2014</Bullet>,
//   ]
// },

//{
//  title: "OwnLocal",
//  subtitle: ["Production Team Lead", "Production Supervisor"],
//  time: ["2017-Present", "2016-2017"],
//  location: "Austin, TX",
//  bullets: [
//    <Bullet>
//      Personally <HL >built a SaaS MVP</HL> for enterprise
//      <br />
//      customer, ran the first ever live demo
//    </Bullet>,
//    <Bullet>
//      Maintain & debug flagship <HL >React/Rails</HL> app
//    </Bullet>,
//    <Bullet>
//      Build reports, data-visualizations with <HL >SQL</HL>
//    </Bullet>,
//    <Bullet>
//      Deploy updates & hotfixes to <HL >iOS Django</HL> app
//    </Bullet>,
//    <Bullet>
//      Monitor and manage <span className="hl">AWS</span> configurations
//    </Bullet>
//  ]
//},

//{
//    title: "OutboundEngine",
//    subtitle: "Sr. Sales Executive",
//    time: "2014-2015",
//    location: "Austin, TX",
//    bullets: [
//            <Bullet>
//            Manage social media profiles for 100+ clients
//                                         </Bullet>,
//                                         <Bullet>Top 5% of sales floor Q1 & Q2 2015</Bullet>,
//                                         <Bullet>
//                                         Brought in over $1,000,000 in new business
//                                         </Bullet>
//                                         ]
//}
