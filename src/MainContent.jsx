

import React from 'react'
import Banner from './bannerandNav/Banner'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function MainContent() {
  return (
    <div>
        <Banner/>
        <div>
          
          <Outlet/>
            
        </div>
        <Footer/>
      
    </div>
  )
}

export default MainContent