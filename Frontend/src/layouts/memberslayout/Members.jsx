import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import SideBar from '../../modules/members/components/sideBar'

function MembersLayout() {
  return (
    <> 
    <Navbar/>
    <SideBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MembersLayout