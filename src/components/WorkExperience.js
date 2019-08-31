import React from "react"

import Section from "components/Section"
import { workExperienceData } from "data"

const WorkExperience = () => (
  <div className="resume--right-column">
    <Section heading="Work history" items={workExperienceData} />
  </div>
)

export default WorkExperience
