import React from 'react'
import './MainNav.css'
import {Link} from "react-router-dom"
import profileImg from "../../assets/images/profile-02.png"

const MainNav = () => {
  return (
    <div className='main__nav'>
        
      <div className="main__nav-wrapper">
        <div className="main__nav-grid">
            <h2><span><i class="ri-grid-fill"></i></span>Example</h2>
        </div>
        
        {/* <div className="main__nav-left">
        
          <a href='#' className='seting'>Settings</a>
          <a href='#'>organization</a>
          <a href='#'>Applications</a>
          <a href='#' className='active__link'>Users</a>
          <a href='#'>Admins</a>
          <a href='#'>Groups</a>
          <a href='#'>Roles</a>
          <a href='#'>Domains</a>
        </div> */}

        <div className="main__nav-right">
          <span className='clossbtn'><i class="ri-settings-3-line"></i></span>
          <div className="profile">
            <Link to='/setting'>
            <img src={profileImg} alt="" />
            </Link>
          </div>
          <div className="pro-name">
            <h5>johndoe@example.com</h5>
            {/* <h6>EXAMPLE PVT LTD</h6> */}
          </div>
          
          <span className='clossbtn'><i class="ri-arrow-down-s-line"></i></span>
        </div>
      </div>
    
    </div>
  )
}

export default MainNav
