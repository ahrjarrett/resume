import React from 'react'
import { SectionContainer } from 'components/Containers'

const skills = [
  'React',
  'Redux',
  'TypeScript',
  'Next.js',
  'GraphQL',
  'Node.js',
  'Jest',
  'Babel',
  'D3',
  'Ramda',
]

const Skill = ({ skill }) => <span className='skill'>{skill}</span>

const Skills = () => (
  <SectionContainer>
    <h2 className='section-header'>Tech skills</h2>
    <div className='section-item skills'>
      <div className='hr-left' />
      <div className='section-item-content languages'>
        <p className='skills-wrapper'>
          {skills.map(skill => (
            <Skill skill={skill} key={skill} />
          ))}
        </p>
      </div>
    </div>
  </SectionContainer>
)

export default Skills
