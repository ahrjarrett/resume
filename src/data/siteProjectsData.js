import React from "react";

const HL = ({ children }) => <span className="hl">{children}</span>;
const Bullet = ({ children }) => (
  <p className="section-item-bullet">{children}</p>
);

export const siteProjectsData = [
  {
    title: "Bestow",
    subtitle: "Software Engineer",
    time: "Apr 2021 - Present",
    location: "Austin, TX (Remote)",
    bullets: [
      <Bullet>
        <HL>
          Led a team of 5 engineers to v1 release of a purely functional library
          using fp-ts
        </HL>
      </Bullet>,
      <Bullet>
        Built an SDK that 3 interal teams have used to launch greenfield
        projects
      </Bullet>,
      <Bullet>
        Released internal TypeScript library `vouchsafe` that is currently
        replacing lodash across our tech stack
      </Bullet>,
      <Bullet>
        Introduced `io-ts`, `monocle-ts`, and more generally, DDD (domain-driven
        design) into the dev-culture
      </Bullet>,
    ],
  },

  // {
  //   title: "Kazoo",
  //   subtitle: "Software Engineer",
  //   time: "May 2020 - Feb 2021",
  //   location: "Austin, TX (Remote)",
  //   bullets: [
  //     <Bullet>
  //       <HL>
  //         Build & maintain data visualizations across all product dashboards
  //       </HL>
  //     </Bullet>,
  //     <Bullet>
  //       Aggregate data from various PostgreSQL & MongoDB databases using Scala
  //       Databricks notebooks & GCP BigQuery warehouses
  //     </Bullet>,
  //     <Bullet>Manage team of contractors to delegate & review work</Bullet>,
  //     <Bullet>
  //       Work closely with Architecture team to expose new measures via GraphQL;
  //       deployed `fp-ts` library into production in an effort to improve type
  //       safety
  //     </Bullet>,
  //   ],
  // },
];

// export const siteProjectsData = [
//   {
//     title: null,
//     location: null,
//     subtitle: "Typelaunch",
//     time: "2019",
//     bullets: [
//       <p className="section-item-bullet">
//         FE architect for{" "}
//         <a
//           href="https://typelaunch.com"
//           className="external-link"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           website builder MVP
//         </a>
//         . 3 devs, 2 mo • <span className="hl">React / Express</span>
//       </p>
//     ]
//   },
//   {
//     title: null,
//     location: null,
//     subtitle: "Backwoods",
//     time: "2019",
//     bullets: [
//       <p className="section-item-bullet">
//         <a
//           href="https://github.com/Lambda-School-Labs/LabsPT1_Backwoods"
//           className="external-link"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Elevating the maps experience for active users
//         </a>{" "}
//         • <span className="hl">D3 / Google Maps</span>
//       </p>
//     ]
//   },
//   {
//     title: null,
//     location: null,
//     subtitle: "react-speak",
//     time: "2018",
//     bullets: [
//       <p className="section-item-bullet">
//         <a
//           href="https://github.com/ahrjarrett/react-speak"
//           className="external-link"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           An HOC for Talking to Your Browser
//         </a>{" "}
//         • <span className="hl">React / Redux</span>
//       </p>
//     ]
//   },
//   {
//     title: null,
//     location: null,
//     subtitle: "polygon",
//     time: "2017",
//     bullets: [
//       <p className="section-item-bullet">
//         <a
//           href="https://polygonpolygon.herokuapp.com"
//           className="external-link"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Google Maps for Realtors
//         </a>{" "}
//         • <span className="hl">Google Maps / MongoDB</span>
//       </p>
//     ]
//   }
// ]
