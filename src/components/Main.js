import React from 'react'
import TechSkills from 'components/Skills'
import Education from 'components/Education'
import WorkExperience from 'components/WorkExperience'

const Main = () => (
  <main className='Main'>
    <div>
      <TechSkills />
      <WorkExperience />
      <Education />
    </div>
  </main>
)

export default Main
