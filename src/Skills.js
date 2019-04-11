import React from "react"
import { SectionContainer } from "./Containers"

const Skills = () => (
  <SectionContainer>
    <h2 className="section-header">Tech skills</h2>
    <div className="section-item skills">
      <div className="hr-left" />
      <div className="section-item-content languages">
        <p className="skills-wrapper">
          <span className="skill">TypeScript</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">AWS</span>
          <span className="skill">GraphQL</span>
          <span className="skill">Node.js</span>
          <span className="skill">SQL</span>
          <span className="skill">Python</span>
          <span className="skill">Clojure</span>
          <span className="skill">OCaml</span>
          <span className="skill">TDD</span>
        </p>
      </div>
    </div>
  </SectionContainer>
)

export default Skills
