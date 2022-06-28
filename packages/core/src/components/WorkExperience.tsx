import React from "react"

import Section from "components/Section"
import { workExperienceData } from "data"

const WorkExperience: React.FC = () => (
  <div className="resume--right-column">
    <Section heading="Work History (past)" items={workExperienceData} />
  </div>
)

export default WorkExperience
