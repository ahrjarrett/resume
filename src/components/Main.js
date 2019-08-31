import React from "react"
import TechSkills from "components/Skills"
import SideProjects from "components/SideProjects"
import Education from "components/Education"
import WorkExperience from "components/WorkExperience"

const Main = () => (
  <main className="Main">
    <div className="column-left">
      <TechSkills />
      <SideProjects />
      <Education />
    </div>
    <WorkExperience />
  </main>
)

export default Main
