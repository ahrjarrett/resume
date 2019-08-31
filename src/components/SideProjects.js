import React from "react"
import Section from "components/Section"
import { siteProjectsData } from "data"

const SideProjects = () => (
  <div>
    <Section heading="Projects" items={siteProjectsData} />
  </div>
)

export default SideProjects
