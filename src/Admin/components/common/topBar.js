import React, { useState } from 'react'
import "./topBar.css"
import profile from '../images/101.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const AdminNavBar = () => {

        
   
  return (
    <div className='admin-navbar-container'>
        <div className='admin-navbar-main'>
            <div className='admin-navbar-topbar'>
                <div className='admin-navbar-logo-text'>
                    <h1>Corlmart</h1>
                </div>
                <div className='admin-navbar-profile'>
                    <img src={profile} alt="Profile" />
                    <h2>Tharun Kumar </h2>
                    <FontAwesomeIcon icon={faChevronDown} /> {/* Dropdown icon */}   
                </div>
            </div>
          

        </div>

    </div>
  )
}

export default AdminNavBar;