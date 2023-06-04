import React from 'react'

import {NavLink} from "react-router-dom"
import navLinks from '../../assets/dummy-data/navLinks'
import './Sidebar.css'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* <div className="sidebar__top">
        <h2><span><i class="ri-grid-fill"></i></span>Example</h2>
      </div> */}
      
      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {
            navLinks.map((item,index)=>(
            <li className="nav__item" key={index}>
              <NavLink to="/dashboard" 
              className={navClass => navClass.isActive ? 'nav__active nav__link' : 'nav__link'
              }>
              <i className={item.icon}></i>
              {item.display}
              </NavLink></li>))
            }
          </ul>
        </div>

        <div className="sidebar__bottom">
          <span><i class="ri-information-line"></i>Quick Guide</span><br/>
          <span><i class="ri-question-line"></i>Help</span><br/>
          <span><i class="ri-tools-fill"></i>Preference</span>
        </div>

      </div>

    </div>

    
  )
}

export default Sidebar
