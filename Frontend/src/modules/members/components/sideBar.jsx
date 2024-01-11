import React from 'react'
import { NavLink } from 'react-router-dom'
function SideBar() {
  return (
<>
<nav className='shadow-xl bg-slate-200  mt-3 w-48   '>
<ul className='flex flex-col justify-around   h-lvh'>
    <li>
        <NavLink to="/membersDashboard/membersEvents">Events </NavLink>
    </li>
    <li>
        <NavLink to="/membersDashboard/membersNews">News </NavLink>
    </li>
    <li>
        <NavLink to="/membersDashboard/membersSocialActivity">Social-Activity</NavLink>
    </li>
    <li>
        <NavLink to="/membersDashboard/polingStations">polling-Stations</NavLink>
    </li>
    <li>
        <NavLink to="/chats">chats</NavLink>
    </li>
</ul>
</nav>
</>
  )
}

export default SideBar