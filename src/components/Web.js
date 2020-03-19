import React from 'react'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'

const Web = ({ classNames = '', hideSidebar = false, makePdf = false }) => (
  <div className={classNames}>
    <div className='web-container'>
      {hideSidebar ? null : <Sidebar />}
      <div className='paper-wrapper'>
        <div className='paper'>
          <Header />
          <Main />
          <div className='hr-bottom' />
          <Footer />
        </div>
      </div>
    </div>
  </div>
)

export default Web
