import React from "react"

export const Header = () => (
  <div className="Header">
    <div className="header-left">
      <h1 className="full-name">Andrew Jarrett</h1>
      <p className="job-title">Functional Programmer</p>
      <p className="mini-bio" />
    </div>
    <nav className="nav-contact">
      <a className="external-link" href="mailto:ahrjarrett@gmail.com">
        ahrjarrett@gmail.com
        <img alt="" className="resume-icon" src="svg/mail.svg" />
      </a>
      <a
        className="external-link"
        href="https://www.linkedin.com/in/ahrjarrett/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/ahrjarrett
        <img alt="" className="resume-icon" src="svg/linkedin.svg" />
      </a>
      <a
        className="external-link"
        href="https://github.com/ahrjarrett"
        target="_blank"
        rel="noopener noreferrer"
      >
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

/*
  <p className="header-cta">
  View my portfolio at{" "}
  <a
  className="section-footer-link"
  href="https://portfolio.ahrjarrett.com"
  target="_blank"
  rel="noopener noreferrer"
  >
  portfolio.ahrjarrett.com
  <img alt="" className="resume-icon" src="svg/link.svg" />
  </a>
  </p>
  */

export default Header
