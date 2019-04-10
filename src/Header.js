import React from "react"

const Header = () => (
  <div className="Header">
    <div className="header-left">
      <h1 className="full-name">Andrew Jarrett</h1>
      <p className="job-title">Software developer</p>
      <p className="header-cta">
        View my portfolio at{" "}
        <a
          className="section-footer-link"
          href="https://portfolio.ahrjarrett.com"
        >
          portfolio.ahrjarrett.com
          <img alt="" className="resume-icon" src="svg/link.svg" />
        </a>
      </p>
    </div>
    <nav className="nav-contact">
      <a className="external-link" href="mailto:ahrjarrett@gmail.com">
        ahrjarrett@gmail.com
        <img alt="" className="resume-icon" src="svg/mail.svg" />
      </a>
      <a
        className="external-link"
        href="https://www.linkedin.com/in/andrewhjarrett/"
      >
        linkedin.com/in/andrewhjarrett
        <img alt="" className="resume-icon" src="svg/linkedin.svg" />
      </a>
      <a className="external-link" href="https://github.com/ahrjarrett">
        github.com/ahrjarrett
        <img alt="" className="resume-icon" src="svg/github.svg" />
      </a>
      <span className="italics">
        Austin, Texas
        <img alt="" className="resume-icon" src="svg/location.svg" />
      </span>
    </nav>
  </div>
)

export default Header
