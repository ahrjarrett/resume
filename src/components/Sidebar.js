import React from "react"
import { Link } from "react-router-dom"

const Sidebar = () => (
  <div className="action-buttons">
    <div className="action-button">
      <span className="svg-save" />
      <a
        href="/resume.pdf"
        className="action-button-link download-link"
        download="Andrew Jarrett’s resume"
      >
        Download my resume
      </a>
    </div>
    <div className="action-button">
      <span className="svg-print" />
      <Link to="/make-pdf" className="action-button-link internal-link">
        Print my resume
      </Link>
    </div>
    <div className="action-button">
      <span className="svg-home" />
      <a
        className="action-button-link external-link"
        href="https://portfolio.ahrjarrett.com"
      >
        View my portfolio
      </a>
    </div>
  </div>
)

export default Sidebar
