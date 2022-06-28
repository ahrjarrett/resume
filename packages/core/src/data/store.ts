export const store: Store = {
  user: {
    name: "Andrew Jarrett",
    social: {
      github: "https://github.com/ahrjarrett",
    },
  },

  gigs: {
    order: ["bestow", "kazoo"], // descending order (most recent at top)
    entities: {
      bestow: {
        id: "bestow",
        title: "Bestow",
        subtitle: "Software Engineer",
        duration: {
          start: "Apr 2021",
          end: "Present",
        },
        location: {
          city: "Austin",
          state: "TX",
          kind: "Remote",
        }, // "Austin, TX (Remote)",
        bullets: [
          "gig_bestow_bullet_1",
          "gig_bestow_bullet_2",
          "gig_bestow_bullet_3",
          "gig_bestow_bullet_4",
        ],
      },
      kazoo: {
        id: "kazoo",
        title: "Kazoo",
        subtitle: "Software Engineer",
        duration: {
          start: "May 2020",
          end: "Feb 2021",
        },
        location: {
          city: "Austin",
          state: "TX",
          kind: "Remote",
        }, // "Austin, TX (Remote)",
        bullets: [
          `gig_kazoo_bullet_1`,
          `gig_kazoo_bullet_2`,
          `gig_kazoo_bullet_3`,
          `gig_kazoo_bullet_4`,
          `gig_kazoo_bullet_5`,
        ],
      },
      lou: {
        id: "lou",
        title: "LOU Assistant",
        subtitle: "Software Engineer",
        duration: {
          start: "Oct 2019",
          end: "Mar 2020",
        },
        location: {
          city: "Austin",
          state: "TX",
          kind: "Remote",
        }, // "Austin, TX (Remote)",
        bullets: ["gig_lou_bullet_1", "gig_lou_bullet_2", "gig_lou_bullet_3"],
      },
    },
  },
  bullets: {
    entities: {
      gig_bestow_bullet_1: {
        id: "gig_bestow_bullet_1",
        isHighlighted: true,
        content: `Led a team of 5 engineers to v1 release of a purely functional library using fp-ts`,
      },
      gig_bestow_bullet_2: {
        id: "gig_bestow_bullet_2",
        isHighlighted: false,
        content: `Built an SDK that 3 interal teams have used to launch greenfield projects`,
      },
      gig_bestow_bullet_3: {
        id: "gig_bestow_bullet_3",
        isHighlighted: false,
        content: `Released internal TypeScript library \`vouchsafe\` that is currently replacing lodash across our tech stack`,
      },
      gig_bestow_bullet_4: {
        id: "gig_bestow_bullet_3",
        isHighlighted: false,
        content: `Introduced \`io-ts\`, \`monocle-ts\`, and more generally, DDD (domain-driven
        design) into the dev-culture`,
      },
      gig_kazoo_bullet_1: {
        id: "gig_kazoo_bullet_1",
        isHighlighted: true,
        content: `Introduced & deployed "fp-ts" library into production, despite the dev
          culture being strongly Java/OO-oriented`,
      },
      gig_kazoo_bullet_2: {
        id: "gig_kazoo_bullet_2",
        isHighlighted: false,
        content: `Built & maintained data visualizations across all product dashboards`,
      },
      gig_kazoo_bullet_3: {
        id: "gig_kazoo_bullet_3",
        isHighlighted: false,
        content: `Stream & aggregate data from various PostgreSQL & MongoDB databases into Databricks (Scala) & BigQuery to create ad hoc reports`,
      },
      gig_kazoo_bullet_4: {
        id: "gig_kazoo_bullet_4",
        isHighlighted: false,
        content: `Manage team of contractors to delegate & review work`,
      },
      gig_kazoo_bullet_5: {
        id: "gig_kazoo_bullet_5",
        isHighlighted: false,
        content: `Work closely with Architecture team to expose more of the domain model via GraphQL; deployed \`fp-ts\` library into production in an effort to improve type`,
      },
      gig_lou_bullet_1: {
        id: "gig_lou_bullet_1",
        isHighlighted: true,
        content: `Integrate Stripe into our product, write FE & BE tests that make sure it stays there`,
      },
      gig_lou_bullet_2: {
        id: "gig_lou_bullet_2",
        isHighlighted: false,
        content: `Authored LOUtils, a <HL>tiny utility library </HL>that DRY-ed out our frontend code without destroying it`,
      },
      gig_lou_bullet_3: {
        id: "gig_lou_bullet_3",
        isHighlighted: false,
        content: `Create webpack build for in-house Chrome Extension,{" "} <HL>extend Redux DevTools</HL> to talk to it`,
      },
    },
  },
}
