import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import logo from '../assets/APlogo.png'

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  function handleProfileSetting() {
    setShowProfile(!showProfile)
  }

  return (
    <header>
      <div className="row">
        <button
          className="hamburger"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="profile">
          <FontAwesomeIcon icon={faUserCircle} onClick={handleProfileSetting} />
          <div className={showProfile ? 'logout' : 'none'}>
            <li className="hide-profile">
              <a href="#">Notifications</a>
              <a href="#">Stats</a>
              <a href="#">Account settings</a>
              <a href="#">Logout @kalipso</a>
            </li>
          </div>
        </div>
        <nav className={navbarOpen ? 'nav-open' : ''}>
          <button onClick={() => setNavbarOpen(false)} className="close-nav">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul>
            <li>
              <a href="#" className="active">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#">Learning</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
