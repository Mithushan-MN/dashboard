import React from 'react'
import './TopNav.css'
import dashboard from '../../pages/Dashboard'

const TopNav = () => {
  return (
    <div className='top__nav'>
      <div className="top__nav-wrapper">
        <div className="top__nav-left">
          <a href='#' className='seting'>Settings</a>
          <a href='#'>organization</a>
          <a href='#'>Applications</a>
          <a href= 'dashboard' className='active__link'>Users</a>
          <a href='#'>Admins</a>
          <a href='#'>Groups</a>
          <a href='#'>Roles</a>
          <a href='#'>Domains</a>
        </div>

        <div className="top__nav-right">
          <span className='clossbtn'><i class="ri-close-fill"></i></span>
        </div>
      </div>
    
    </div>
  )
}

export default TopNav
