import React from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import HorizontalRule from "./HorizontalRule"
import Main from "./Main"
import Footer from "./Footer"

const Web = ({ classNames = "", hideSidebar = false, makePdf = false }) => (
  <div className={classNames}>
    <div className="web-container">
      {hideSidebar ? null : <Sidebar />}
      <div className="paper-wrapper">
        <div className="paper">
          <Header />
          <HorizontalRule />
          <Main />
          <div className="hr-bottom" />
          <Footer />
        </div>
      </div>
    </div>
  </div>
)

export default Web
