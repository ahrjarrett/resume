import React from 'react'

export const workExperienceData = [
  {
    title: 'LOU Assistant',
    subtitle: 'Software Engineer',
    time: '2019-Present',
    location: 'Austin, TX',
    bullets: [
      <p className="section-item-bullet">
        Built <span className="hl">custom SSR payment flow</span> into dashboard so people can pay
        us
      </p>,

      <p className="section-item-bullet">
        Built Clojure-inspired npm library called LOUtils for data pipelines composition
      </p>,
      <p className="section-item-bullet">
        <span className="hl">Reverse engineer a competitor's Chrome Extension</span> to demonstrate
        proof of concept
      </p>,
      <p className="section-item-bullet">
        As the sole engineer on a 4-person team, handle any/everything dev-related
      </p>,
    ],
  },

  {
    title: 'OwnLocal',
    subtitle: ['Software Engineer', 'Production Team Lead'],
    time: ['2018-Present', '2016-2018'],
    location: 'Austin, TX',
    bullets: [
      <p className="section-item-bullet">
        <span className="hl">Frontend Architect</span> for Typelaunch MVP
      </p>,
      <p className="section-item-bullet">
        Develop & maintain flagship <span className="hl">React/Rails</span> app
      </p>,
      <p className="section-item-bullet">
        Configure & scale network of internal <span className="hl">GCP apps</span> with{' '}
        <span className="hl">Kubernetes containers</span>
      </p>,
      <p className="section-item-bullet">
        Build custom reports, data-viz with <span className="hl">SQL</span> &{' '}
        <span className="hl">D3</span>
      </p>,
    ],
  },
  {
    title: 'FollowClosely',
    subtitle: 'Frontend Developer',
    time: '2015-2016',
    location: 'Austin, TX',
    bullets: [
      <p className="section-item-bullet">Design FollowClosely website</p>,
      <p className="section-item-bullet">
        Develop client portal & analytics dashboard from scratch
      </p>,
      <p className="section-item-bullet">
        Iterate on internal prototypes using <span className="hl">Node & Express.js</span>
      </p>,
      <p className="section-item-bullet">
        Build website generator product for clients & mange all deployments
      </p>,
    ],
  },
]

// {
//   title: 'Signpost',
//   subtitle: 'Sales Manager',
//   time: '2012-2014',
//   location: 'Austin, TX',
//   bullets: [
//     <p className='section-item-bullet'>#1 manager company-wide Q3 & Q4 2014</p>,
//   ]
// },

//{
//  title: "OwnLocal",
//  subtitle: ["Production Team Lead", "Production Supervisor"],
//  time: ["2017-Present", "2016-2017"],
//  location: "Austin, TX",
//  bullets: [
//    <p className="section-item-bullet">
//      Personally <span className="hl">built a SaaS MVP</span> for enterprise
//      <br />
//      customer, ran the first ever live demo
//    </p>,
//    <p className="section-item-bullet">
//      Maintain & debug flagship <span className="hl">React/Rails</span> app
//    </p>,
//    <p className="section-item-bullet">
//      Build reports, data-visualizations with <span className="hl">SQL</span>
//    </p>,
//    <p className="section-item-bullet">
//      Deploy updates & hotfixes to <span className="hl">iOS Django</span> app
//    </p>,
//    <p className="section-item-bullet">
//      Monitor and manage <span className="hl">AWS</span> configurations
//    </p>
//  ]
//},

//{
//    title: "OutboundEngine",
//    subtitle: "Sr. Sales Executive",
//    time: "2014-2015",
//    location: "Austin, TX",
//    bullets: [
//            <p className="section-item-bullet">
//            Manage social media profiles for 100+ clients
//                                         </p>,
//                                         <p className="section-item-bullet">Top 5% of sales floor Q1 & Q2 2015</p>,
//                                         <p className="section-item-bullet">
//                                         Brought in over $1,000,000 in new business
//                                         </p>
//                                         ]
//}
