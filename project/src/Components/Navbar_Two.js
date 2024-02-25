// React
import React from 'react'
import { NavLink} from 'react-router-dom';

// CSS
import './Navbar_Two.css'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faGamepad, faTrophy, faFire} from '@fortawesome/free-solid-svg-icons'

// images


function Navbar_Two() {
  return (
    <div className='NavbarTwo_Container'>
        <NavLink to='/'>
            <FontAwesomeIcon className='navbar-two-icon' icon={faHouse} />
        </NavLink>
        <NavLink to='/music'>
            <FontAwesomeIcon className='navbar-two-icon' icon={faMusic} />
        </NavLink>
        <NavLink to='/game'>
            <FontAwesomeIcon className='navbar-two-icon' icon={faGamepad} />
        </NavLink>
        <NavLink to='/sport'>
            <FontAwesomeIcon className='navbar-two-icon' icon={faTrophy} />
        </NavLink>
        <NavLink to='/trend'>
            <FontAwesomeIcon className='navbar-two-icon' icon={faFire} />
        </NavLink>
    </div>
  )
}

export default Navbar_Two