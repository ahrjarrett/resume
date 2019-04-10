import React from "react"
import TechSkills from "./Skills"
import SideProjects from "./SideProjects"
import Education from "./Education"
import WorkExperience from "./WorkExperience"

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
