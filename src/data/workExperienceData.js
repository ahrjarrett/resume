import React from 'react'

const HL = ({children}) => <span className="hl">{children}</span>
const Bullet = ({children}) => <Bullet>{children}</Bullet>

export const workExperienceData = [
  {
    title: 'LOU Assistant',
    subtitle: 'Software Engineer',
    time: '2019-Present',
    location: 'Austin, TX',
    bullets: [
      <Bullet>
        Built <HL>custom SSR payment flow</HL> into dashboard so people can pay us
      </Bullet>,

      <Bullet>
        Built Clojure-inspired npm library called LOUtils for data pipeline composition
      </Bullet>,
      <Bullet>
        <HL>Reverse engineer a competitor's Chrome Extension</HL> to demonstrate proof of concept
      </Bullet>,
      <Bullet>As the sole engineer on a 4-person team, handle any/everything dev-related</Bullet>,
    ],
  },

  {
    title: 'OwnLocal',
    subtitle: ['Software Engineer', 'Production Team Lead'],
    time: ['2018-Present', '2016-2018'],
    location: 'Austin, TX',
    bullets: [
      <Bullet>
        <HL>Frontend Architect</HL> for Typelaunch MVP
      </Bullet>,
      <Bullet>
        Develop & maintain flagship <HL>React/Rails</HL> app
      </Bullet>,
      <Bullet>
        Configure & scale network of internal <HL>GCP apps</HL> with <HL>Kubernetes containers</HL>
      </Bullet>,
      <Bullet>
        Build custom reports, data-viz with <HL>SQL</HL> & <HL>D3</HL>
      </Bullet>,
    ],
  },
  {
    title: 'FollowClosely',
    subtitle: 'Frontend Developer',
    time: '2015-2016',
    location: 'Austin, TX',
    bullets: [
      <Bullet>Design FollowClosely website</Bullet>,
      <Bullet>Develop client portal & analytics dashboard from scratch</Bullet>,
      <Bullet>
        Iterate on internal prototypes using <HL>Node & Express.js</HL>
      </Bullet>,
      <Bullet>Build website generator product for clients & mange all deployments</Bullet>,
    ],
  },
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
